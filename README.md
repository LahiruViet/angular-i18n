# angular-i18n

01. install nodejs(so npm) latest LTS version    
==================================================   
node -v --> v14.17.6  
npm -v --> 6.14.15  

02. install angular-cli latest version (NOT globally)  
==================================================  
npm install @angular/cli  
ng v --> 12.2.6  



03. set up angular app with latest version  
==================================================  
ng new my-app  
cd my-app  
ng serve --open  

04. run lint command and lint fix command   
==================================================  
npm i @angular-eslint/schematics  
npm install   
ng lint   
ng lint --fix   
(ng build --prod --base-href=.)  
  

05. install and configure bootstrap latest version  
==================================================  
npm install bootstrap  
latest version --> v5.1.1  
npm install @popperjs/core  
"styles": [  
	  "./node_modules/bootstrap/dist/css/bootstrap.min.css",  
	  "src/styles.css"  
],  
"scripts": [  
  "./node_modules/@popperjs/core/dist/umd/popper.min.js",  
  "./node_modules/bootstrap/dist/js/bootstrap.min.js"  
]  


05. install and configure font-awesome latest version  
==================================================  
(font-awesome for angular)  
npm install @fortawesome/fontawesome-svg-core  
npm install @fortawesome/free-solid-svg-icons  
npm install @fortawesome/angular-fontawesome  

apply configuration to   
export class AppModule { }  

06. use i18n in angular with ngx-translate  
==================================================  
npm install @ngx-translate/core --save  
npm install @ngx-translate/http-loader --save  

add .json files   
src\assets\i18n\en-US.json  
src\assets\i18n\ja-JP.json  
