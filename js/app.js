var selectPromo = document.body.children[1];
var imagesContainer = document.getElementById('images-container');


selectPromo.addEventListener('change',showPromo); //change evento para el cambio de selecioon en el select
// arrays de las promociones: alumnas
var arr4Chile = ['anais-araya', 'andrea-miranda', 'berenisse-rios', 'caterina-da-silva', 'daniela-sanchez', 'francisca-ojeda', 'katerine-sandoval'];
var arr5Lima = ['andrea-cabrera', 'ariadna-izaguirre', 'carito-juarez', 'cristy-castro', 'karol-orrillo', 'paola-ortiz', 'teresa-lara'];
var arr6Lima = ['arantza-burga', 'daguiana-revoredo', 'elizabeth-condori', 'grecia-rayme', 'janine-vega', 'michelle-more', 'mishel-velasquez', 'rosario-felix'];

var CHILE4 = '4-chile';
var PERU5 = '5-lima';
var PERU6 = '6-lima';

imagesContainer
//metodo que muestra las coders
// primer parametro un array de nombre y segundo parametro un str q indica la promo
function showCoders(arr,promo) {
  // if(subImagesContainer)
  // imagesContainer.removeChild(subImagesContainer);
  // subImagesContainer=document.createElement('div');
  // imagesContainer.appendChild(subImagesContainer);


 for( var i = 0; i < arr.length; i++){
   createImage(promo,arr[i]);
 }
}

// creando imagen
function createImage(promo, nombre) {
 var img = document.createElement('img');
 // construyendo una url dinamica --agregandole atributos
 img.setAttribute('src','assets/images/' + promo +'/' + nombre + '.jpg');
 // subImagesContainer.appendChild(img);
 imagesContainer.appendChild(img);
}


function showPromo(event) { // si no se 'e' o 'event' como paramentro dentro de la funcion se debe usar this pero aún no se lo que es pe'
 console.log(event.target.value); //target es el que ejecutra el evento o el que dispara el evento-- esto con console.log sirve para comprobar que esta ocurriendo lo que queremos en la consola
 switch(true) {
   case event.target.value === '4chile':
   imagesContainer.textContent = ''; //para que desaparezcan las imagenes al seleccionar otra promocion
   showCoders(arr4Chile, CHILE4);
   break;
   case event.target.value === '5lima':
   imagesContainer.textContent = ''; //para que desaparezcan las imagenes al seleccionar otra promocion
   showCoders(arr5Lima, PERU5);
   break;
   case event.target.value === '6lima':
   imagesContainer.textContent = ''; //para que desaparezcan las imagenes al seleccionar otra promocion
   showCoders(arr6Lima, PERU6);
   break;
   default:
   // que aparezcan todas las coders
   showCoders(arr4Chile, CHILE4);
   showCoders(arr5Lima, PERU5);
   showCoders(arr6Lima, PERU6);
 }
}
showCoders(arr4Chile, CHILE4);
showCoders(arr5Lima, PERU5);
showCoders(arr6Lima, PERU6);

function showModal(event){
  var modal=document.createElement('div');
  modal.style.position='fixed';
  modal.style.background='rgda(0,0,0.7)';
  modal.style.background='rgda(0,0,0.7)';

}
