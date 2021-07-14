var sintaxys = "Mauro<=1;"; //Sintaxis de prueba

var datos = [];
var analizis = [];
var listado = [];

var index = 0;

var longitud_datos = 0;




console.log("Esta es la sintaxys:");
for (var i = 0; i< sintaxys.length; i++) {
    var caracter = sintaxys.charAt(i);
    datos.push(sintaxys.charAt(i));
}
console.log(datos);

console.log("------ Iniciando proceso de analizis....");

console.log(datos.length);

longitud_datos = datos.length;

while(index < longitud_datos){

    if(isAlpha(datos[index])){
        
        while(datos[index] != "=" && datos[index] != "<" && datos[index] != index != -1){
            index++;
        }
        console.log("var");
        analizis.push("var");
        index--;

        
    }else if(isNumber(datos[index])){
        if(index == longitud_datos -1){
            index++;
        }else{
            while(isNumber(datos[index])){
                index++;
            }
        }
        console.log("numero");
        analizis.push("numero");
        index = index - 1;

    }else if(datos[index] == "<"){
        if(index == longitud_datos-1){
           console.log("menor");
           analizis.push("menor");
        }else{
            if(datos[index + 1] == "="){
                console.log("menorigual");
                analizis.push("menorigual");
                index++;
            }else{
                console.log("menor");
                analizis.push("menor");
            }
            
        }
       
     
    }else if(datos[index] == ">"){
        if(index == longitud_datos -1){
            console.log("mayor");
                analizis.push("mayor");
        }else{
            if(datos[index + 1] == "="){
                console.log("mayorigual");
                analizis.push("mayorigual");
                index++;
            }else{
                console.log("mayor");
                analizis.push("mayor");
            }
          
        }
    }else if(datos[index] == "="){
        if(index == longitud_datos -1){
            console.log("igual");
                analizis.push("igual");
        }else{
            if(datos[index + 1] == "="){
                console.log("igual-igual");
                analizis.push("igual-igual");
                index++;
            }else{
                console.log("igual");
                analizis.push("igual");
            }
          
        }
    }else if(datos[index] == ";"){
        console.log("lastTerm");
        analizis.push("lastTerm");
    }
        
    index += 1;

    
}
console.log(analizis);

console.log("Analizado sintatico... ");
var longitud_analizis = analizis.length;

if(longitud_analizis >=4){
    if(analizis[3]=="lastTerm"){
        listado=analizis[Math.floor(longitud_analizis / 2)];
    }
    console.log("multiples variables")
    console.log(listado);

}
if(longitud_analizis == 4 || listado.length ==4){
    if(analizis[3] == "lastTerm" && analizis[0] == "var" && (analizis[2]=="numero" || analizis[2] == "var")){
        console.log("Sintaxis correcta")
    }else{
        console.log("Sintaxis erronea");
    }
    console.log("Es una declaracion");
}else if(longitud_analizis == 3 || listado.length == 3){
    if(analizis[0] == "var" && (analizis[1] == "igual-igual" || analizis[1] == "mayorigual" || analizis[1] == "mayor" || analizis[1] == "menorigual" || analizis[1] == "menor" ) && (analizis[2] == "var" || analizis[2] == "numero")){
        console.log("sintaxis correcta");
        console.log("Igualacion o compracion");
    }else{
        console.log("error")
    }
}

console.log("Final del analizador");

//Funciones para verificar caracter
function isAlpha(char)
  {
   var letters = /^[A-Za-z]+$/;
   if(char.match(letters))
     {
      return true;
     }
   else
     {
     return false;
     }
  }

function isNumber(c){
    if (c >= '0' && c <= '9') {
        return true;
    } else {
       return false;
    }
}