# ItAcademySprint07 Presupuesto Web

## 1.- bootstrap
- npm install bootstrap
- *In your angular.json add bootstrap stylesheet and javascript*
```
"styles": [
  "src/scss/styles.scss",
  "./node_modules/bootstrap/dist/css/bootstrap.min.css",
],

"scripts": [
  "./node_modules/bootstrap/dist/js/bootstrap.min.js"
]
```
- npm install @popperjs/core 
- *Add popperjs and add it to your scripts*
```
"scripts": [
  "./node_modules/@popperjs/core/dist/umd/popper.min.js",
  "./node_modules/bootstrap/dist/js/bootstrap.min.js"
]
```
## 2.- Montar el ROUTING  
- *En src\app\app-routing.module.ts, crear la constante appRutas y exportarla*
```
const routes: Routes = [
  { path: '', component:  HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
...
```
- *en app.components.html, añadir los href's y el control de la rutas:*

```
<li class="nav-item">
    <a class="nav-link" href="/proyectos">Proyectos</a>
</li>
...

<router-outlet></router-outlet>
```
## 3.- Formularios reactivos
- *Crear el formulario en home.component.html: con los nombres de los campos y la función donde se recogerán los valores del form*
```
  <form [formGroup]="formOpcionesWeb" class="m-3 border border-3 border-dark rounded-3 p-4">
    <div class="row align-items-center">

      <div class="col-6 mb-2">
          <label for="paginas" class="col-form-label">Número de páginas</label>
      </div>
      <div class="col-6 mb-2">
          <input type="number" id="paginas" #pagina class="form-control" [(ngModel)]="presup.webPaginas"
              [ngModelOptions]="{standalone: true}" (ngModelChange)="calcular()" min="1" required>

          <div [hidden]="pagina.value" class="mt-2 alert alert-danger">
              Páginas es required
          </div>
      </div>

      ...
  </form>
```
- *importar el módulo ReactiveFormsModule en app.module.ts:*
```
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
...

@NgModule({
...
 imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
...
```
- *en panel.components.ts, definir el nombre del formulario y en el constructor definir las reglas de validación del formulario*
```
  formOpcionesWeb: FormGroup;

   constructor(
    private tarService: TarificadorService,
    private _builder: FormBuilder
  ) {
    this.formOpcionesWeb = this._builder.group({
      paginas: ['1', Validators.required],
      idiomas: ['1', Validators.required]
    })
  }
  ```

## 4.- Crear un servicio
- ng generate service tarificador
- *registrarlo en app.module.ts*
```
...
  providers: [TarificadorService],
...
```

## 5.- NgBootstrap
- npm install bootstrap
- ng add @ng-bootstrap/ng-bootstrap
 
 - *inyectamos el modal en el constructor y le añadimos un método a la clase para abrirlo. modal.compomenete.ts*
 ```
  constructor(private modal:NgbModal) { }
  ...
  
  abrirModal(contenido: any): void {
    this.modal.open(contenido, { size: 'lg' });
  }
```
- *Crear la plantilla modal.html , dentro del tag < ng-template>  con el  #nombre para poder lanzarlo*
```
<ng-template #contenido let-modal>   
    <div class="modal-body">
      TEXTO...
    </div>  
</ng-template>

<button type="button" class="btn btn-outline-danger" (click)="abrirModal(contenido)">lanzar modal SM</button>
 ```

## 6.- Locale en fechas  
 - *Modificar el app.module.ts para que las fechas aparezcan correctas en los 'pipe' de html
 ``` 
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs, 'es');

@NgModule({
 ...
  providers: [
    TarificadorService,
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  ... 
```