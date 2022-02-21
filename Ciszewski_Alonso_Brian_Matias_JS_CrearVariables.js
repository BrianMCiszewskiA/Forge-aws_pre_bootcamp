var alturaMinima = 1 //metro
var edadMinima = 10 //años

//variables a asignar con app
var alturaPersona;
var edadPersona;


function cumpleRequisitos(){
    //alturaPersona y edadPersona deben ser asignados previamente
    if(alturaPersona>alturaMinima||edadPersona>edadMinima){
        console.log("¡Subete, chico!");
    } 
    else {
        console.log("Lo siento, chico. Tal vez el proximo año")
    }
}