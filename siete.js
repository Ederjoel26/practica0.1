var frase = prompt ("frase: ");
var num = 0;
var vocales = ['a','e','i','o','u']


for(var u=0; u<=frase.length; u++){
    if(vocales.indexOf(frase[u])>=0){
        ++num;
    }
}

console.log("Vocales: "+ num);