
const btnResumen = document.getElementById('btn-resumen');
btnResumen.addEventListener('click', guardarResumen);

const btnBorrar = document.getElementById('btn-borrar');
btnBorrar.addEventListener('click', borrarFormulario);

const pagar = document.getElementById('pagar');
let precio='';
pagar.innerHTML = `Total a Pagar: ${precio}$`


function guardarResumen(){
    // caputuro los elementos HTML 
   const valueNombre = getValue('nombre');
   const valueApellido = getValue('apellido');
   const valueCorreo = getValue('correo');
   const valueCantidad = getValue('cantidad');
   const valueCategoria = getValue('categoria');

   precio = costoTotal(valueCategoria, valueCantidad);
   pagar.innerHTML = `Total a Pagar: ${precio}$`
   
   //creo un objeto usando los valores
    const resumen = {
        nombre: valueNombre,
        apellido: valueApellido,
        correo: valueCorreo,
        cantidad: valueCantidad,
        categoria: valueCategoria,
        total: precio
    };
    console.log(resumen);
}

function getValue(id){
   return document.getElementById(id).value;;
}

function get(id){
    return document.getElementById(id);
}

function costoTotal(categoria, cantidad){
    
    //let precio;
    switch(categoria){
        case 'Estudiante':
              precio = (200-(0.80*200))*parseFloat(cantidad);
              console.log('Estudiante')
              break;
        case 'Trainee':
              precio = (200-(0.50*200))*parseFloat(cantidad);
              console.log('Trainee');
              break;
        case 'Junior':
              precio = (200-(0.15*200))*parseFloat(cantidad);
              console.log('Junior');
              break;
        default:
              console.warn('no se selecciono nada');    
    }
    
    return precio;
}

function setname(){

}

function borrarFormulario(){
   const nombre = get('nombre');
   nombre.value = null;
   const apellido = get('apellido');
   apellido.value = null;
   const correo = get('correo');
   correo.value = null;
   const cantidad = get('cantidad');
   cantidad.value = null;
   const categoria = get('categoria');
   categoria.selectedIndex = 0;
   precio='';
   pagar.innerHTML = `Total a Pagar: ${precio}$`
}
