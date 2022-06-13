const pizzas=[
    {id:1, nombre:"Pizza muzarella",Imagen:"pizzacuatroquesos.jpg",ingredientes:["Queso","Tomate","Cebolla"], precio:890},
    {id:2, nombre:"Pizza napolitana",Imagen:"pizzanapolitana.jpg", ingredientes:["Salsa","Tomate","Queso","Oregano"], precio:560},
    {id:3, nombre:"Pizza carbonara",Imagen:"pizzadiavola.jpg", ingredientes:["Bacon","Huevo","Queso"], precio:1100},
    {id:4, nombre:"Pizza margarita",Imagen:"pizzacuatroquesos.jpg", ingredientes:["Ajo","Tomate","Albahaca","Queso"], precio:1300},
    {id:5, nombre:"Pizza fugazzeta",Imagen:"pizzafugazeta.jpg", ingredientes:["Cebolla","Oregano","Aceituna","Mozarella"], precio:890},
    {id:6, nombre:"Pizza hawaiana",Imagen:"pizzacuatroquesos.jpg", ingredientes:["Piña","Jamon","Salsa"], precio:1200},
 ]

 document.addEventListener('DOMContentLoaded', ()=>{
const pizzaslocal=localStorage.setItem('pizzas',JSON.stringify(pizzas))})


const nombre=document.getElementById('nombre');
const imagen=document.getElementById('imagen');
const ingredientes=document.getElementById('ingredientes');
const precios=document.getElementById('precios');
const input=document.querySelector('input');
const button=document.querySelector('button');



const functionPizzas=(pizzas)=>{

    button.addEventListener('click',(e)=>{

        while(nombre.firstChild){
            nombre.removeChild(nombre.firstChild);}
            
        while(precios.firstChild){
            precios.removeChild(precios.firstChild)}

        while(imagen.firstChild ){
            imagen.removeChild(imagen.firstChild)}

        while(ingredientes.firstChild){
            ingredientes.removeChild(ingredientes.firstChild);}

        


     const buscarIdPizza=pizzas.find(pizzas=>pizzas.id==input.value);
     if(buscarIdPizza!=undefined){
        
     const pizzaNombre=document.createTextNode(buscarIdPizza.nombre);
     const pizzaPrecio=document.createTextNode(`$${buscarIdPizza.precio}`);
     const pizzaImagen=document.createElement('img')
                pizzaImagen.setAttribute('src', buscarIdPizza.Imagen);
     const pizzaIngredientes=document.createTextNode(buscarIdPizza.ingredientes)
                

     nombre.appendChild(pizzaNombre);
     precios.appendChild(pizzaPrecio);
     imagen.appendChild(pizzaImagen)
     ingredientes.appendChild(pizzaIngredientes)

     }

     else{
     alert('No hay pizzas con el ID ingresado')}

    })


}

functionPizzas(pizzas)


