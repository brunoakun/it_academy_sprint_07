# ItAcademySprint07 Presupuesto Web

## 1.- bootstrap
npm install bootstrap 
- In your angular.json add bootstrap stylesheet and javascript
```
"styles": [
  "src/scss/styles.scss",
  "./node_modules/bootstrap/dist/css/bootstrap.min.css",
],

"scripts": [
  "./node_modules/bootstrap/dist/js/bootstrap.min.js"
]
```
- Now add popperjs and add it to your scripts
npm install @popperjs/core 
```
"scripts": [
  "./node_modules/@popperjs/core/dist/umd/popper.min.js",
  "./node_modules/bootstrap/dist/js/bootstrap.min.js"
]
```
## 2.- Montar el ROUTING  
- En src\app\app-routing.module.ts, crear la constante appRutas y exportarla
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
- en app.components.html, añadir los href's y el control de la rutas:

```
<li class="nav-item">
    <a class="nav-link" href="/proyectos">Proyectos</a>
</li>
...

<router-outlet></router-outlet>
```
## 3.- Formularios reactivos
- Crear el formulario en home.component.html: con los nombres de los campos y la función donde se recogerán los valores del form 
```
<form [formGroup]="formContacto" (ngSubmit)="enviar(formContacto.value)">
    <label>Nombre</label>
    <input formControlName="nombre" type="text">
    <br>
    <label>eMail</label>
    <input formControlName="email" type="email">
    <br>
    <label>comentario</label>
    <input formControlName="comentario" type="text">
    <br>
    <button [disabled]="formContacto.invalid" type="submit">Enviar</button>
</form>
```
- importar el módulo ReactiveFormsModule en app.module.ts:
```
import { ReactiveFormsModule } from '@angular/forms';

...

@NgModule({
...
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRutas),
    ReactiveFormsModule
  ],
...
```
- en contacto.components.ts, definir el nombre del formulario y en el constructor definir las reglas de validación del formulario
```
  formContacto: FormGroup;

  constructor(
    private _builder: FormBuilder
  ) {
    this.formContacto = this._builder.group({
      nombre: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      comentario: ['', Validators.required]
    })
  }
  ```

## 4.- Crear un servicio
- ng generate service tarificador

  ```
// registrarlo en app.module.ts
  providers: [Servicio01Service],
  
  ```