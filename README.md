# ItAcademySprint07

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