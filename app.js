// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos=[];
let amigoGlobal;

function agregarAmigo(){
    captura_valor();    
}

function captura_valor(){
    amigoGlobal=document.getElementById('amigo').value;
    if (validaVacio(amigoGlobal)) {
        pushValor(amigoGlobal);
    }

}

function validaVacio(val){
    if (val=='') {
        alert('El campo no puede estar vacio');
        return false;
    }else {
        return true;
    }
}

function pushValor(val){
    amigos.push(val);
    document.getElementById('amigo').value ="";
    actualizarLista();
}

function actualizarLista(){
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML="";
    for (let i = 0; i < amigos.length; i++) {
        const nuevoElemento = document.createElement('li');
        nuevoElemento.textContent=amigos[i];
        lista.appendChild(nuevoElemento)
    }
}
/////////////////

function sortearAmigo(){
    let retval = validaArray();
    //alert(`Valor de RetVal= ${retval}`)
    if (retval==true){
        let indiceAleatorio =  Math.floor(Math.random()*amigos.length);
        let nombre = amigos[indiceAleatorio];
        //alert(`Indice generado: ${indiceAleatorio}, para el amigo secreto ${nombre}`);
        mostrarResultado(nombre);
    };
}

function validaArray(){
    if (amigos.length==0) {
        alert('No hay Amigos para realizar el sorteo');
        return false;
    }else{
        //alert(`La cantidad de amigos es ${amigos.length}`);
        return true;
    }
}

function mostrarResultado(val){
    //alert(`Mostrar resultado del Amigo secreto: ${val}`);
    const listaResultado = document.getElementById('resultado');
    listaResultado.innerHTML="";
    listaResultado.innerHTML=val;
    //const nuevoElemento = document.createElement('li');
    //nuevoElemento.textContent=val;
    //listaResultado.appendChild(nuevoElemento)
}