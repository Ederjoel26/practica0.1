var letra = prompt("Ingresa tu frase: ");
var a=0, e=0, i=0, o=0, u=0;
(letra,20,'\n');

for(var i=0; i<20; i++){
    switch(letra[i]){
        case 'a': a++;
        break;
        case 'e': e++;
        break;
        case 'i': i++;
        break;
        case 'o': o++;
        break;
        case 'u': u++;
        break;
    }
}
console.log("VOCAL A: ",a);
console.log("VOCAL E: ",e);
console.log("VOCAL I: ",i);
console.log("VOCAL O: ",o);
console.log("VOCAL U: ",u);