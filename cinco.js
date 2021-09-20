var frase = prompt("ingrese un numero");
var total = 0;

if(frase < 0){
    alert("No se aceptan negativos");
}else{
    for(var i = 1; i<=frase; i++){
        var num = prompt("Ingrsa el numero "+ i );
        var suma = Number(num);
        total += suma;
    }
    console.log("resultado: "+total);
}
 