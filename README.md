# ItAcademySprint07 Presupuesto Web

## 1.- bootstrap
npm install bootstrap 

 In your angular.json add bootstrap stylesheet and javascript
```
"styles": [
  "src/scss/styles.scss",
  "./node_modules/bootstrap/dist/css/bootstrap.min.css",
],

"scripts": [
  "./node_modules/bootstrap/dist/js/bootstrap.min.js"
]
```
 Now add popperjs and add it to your scripts

npm install @popperjs/core 
```
"scripts": [
  "./node_modules/@popperjs/core/dist/umd/popper.min.js",
  "./node_modules/bootstrap/dist/js/bootstrap.min.js"
]
```
## 2.- Montar el ROUTING  
- En app.modules.ts, crear la constante appRutas
```
const appRutas: Routes = [
  { path: '', component: HomeComponent },
  { path: 'proyectos', component:ProyectosComponent }, 
  { path: 'quienes-somos', component:QuienesSomosComponent }, 
  { path: 'contacto', component:ContactoComponent }
]

// e importarla
...
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRutas)
  ],
...
```