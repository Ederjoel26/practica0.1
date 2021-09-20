var frase = prompt("uwu");
var doble = frase * 2 ;
var aux = doble - 1; 


if(frase < 0){
    alert("No se aceptan negativos");
}else{
    for(var i = frase; i<=aux; i++){
        console.log(i);
    }
}
 
