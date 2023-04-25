alert("Bienvenido al portal del hincha")

//Nombre de hincha
let verdad= true
let nombre= prompt("Nombre del hincha");
while (verdad){
    if(nombre !=""){
        verdad=false
        alert("Hola" + " " + nombre)
    } else {
        nombre=prompt("Nombre del hincha")
    }
    console.log("Mi nombre es"+" " + nombre);
}

//Nombre de equipo
let entrada = prompt ("Ingrese el nombre su equipo");

if (entrada == "Independiente"){
        console.log("Hincha de" + " " + entrada);
        alert("Bienvenido rey de copas")
}
if (entrada == "Boca") {
        console.log("Hincha de" + " " + entrada);
        alert("Bienvenido xeneixe")
}
if (entrada == "River") {
        console.log("Hincha de" + " " + entrada);
        alert("Bienvenido millonario")
}
else {
    console.log("No ingresaste el nombre de tu equipo");
    entrada = prompt ("Ingrese el nombre su equipo")
        if (entrada != ""){
            console.log("Hincha de" + " " + entrada)
        }
}

//Socio de equipo
let socio = prompt ("Sos socio de tu club?");
if (socio == "si"){
    console.log("Es socio de su club");      
} else {
    console.log("No es socio de su club");
}

//Edad del hincha
let edad = Number(prompt ("Indique su edad"));
if (edad >= 18 && edad < 60){
    console.log("Su edad es:"+" "+ edad +" "+"y el valor de su cuota es de $4000");
    alert("La cuota mensual de tu club es de $4000")
} else if (edad > 60){
    console.log("Su edad es:"+" "+ edad +" "+"y el valor de la cuota es de $3000");
} else if(edad < 18){
    console.log("Es menor de edad y su cuota es de $2000");
    alert("La cuota mensual para menores de edad es de $2000")
}

//Productos
let producto = parseInt(prompt("Equipate con la ropa de tu equipo: \n 1- Camiseta titular \n 2- Camiseta suplente \n 3- Pantalón titular \n 4- Pantalón suplente \n 5- Buzo de arquero \n 6- Salir \n Seleccione con el número de artículo las prendas que desea adquirir:"))

while (producto != 6){
    switch(producto){
        case 1:
            console.log("La camiseta titular cuesta $25000");
            break
        case 2:
            console.log("La camiseta suplente cuesta $24000");
            break
        case 3:
            console.log("El pantalón titular cuesta $15000");
            break
        case 4:
            console.log("El pantalón suplente cuesta $14000");
            break
        case 5:
            console.log("El buzo de arquero cuesta $20000");
            break
        default:
            alert("No contamos con ese artículo")
            break
    }
    producto = parseInt(prompt("Equipate con la ropa de tu equipo: \n 1- Camiseta titular \n 2- Camiseta suplente \n 3- Pantalón titular \n 4- Pantalón suplente \n 5- Buzo de arquero \n 6- No deseo comprar nada \n Seleccione con el número de artículo las prendas que desea adquirir:"))
}

//Funcion calculo de tasa
const iva = (a) => a *1.21
const tasa = function (a) {
    if (a > 25000) {
        return a * 1.3;
    } 
    else {
        return a * 1.15;
    }
}



/*if (socio == "no"){
    console.log("No es socio de su club")
}


/*let salida = "Bienvenido hincha de" + " " + entrada

console.log("Hincha de" + " " + entrada)
alert(salida)

let socio = prompt ("Sos socio de tu club?")
    


/*if (entrada == Independiente){
    console.log("Hola Rey de copas")}
if (entrada == River){
    console.log("Bienvenido millonario")}
if (entrada == Boca){
    console.log("Bienvenido xeneize")}


let salida = "Bienvenido" + " " + entrada 


console.log ("Hola" + " " + entrada)
alert(salida)*/
