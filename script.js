var numbers01 = [6, 8, 7, 9, 0, 4, 44]
let numbers02 = numbers01
numbers01.push(60)
let age = parseInt(prompt("digita tu edad"), 10)
isNaN(age)
if (age && !isNaN(age)) {
    if (age >= 18) {
        alert("eres mayor de edad")
    } else {
        alert("eres menor de edad")
    }
} else {
    alert("¡ ingresa un número, no texto!")
    age = parseInt(prompt("digita tu edad"), 10)
}
// if (age >= 18) {
//     alert("eres mayor de edad")
// } else {
//     alert("eres menor de edad")
// }
let te = 8
if (age >= 18) {
    alert("toma cerveza")
} else {
    alert("yo me tomé tu cerveza")
    alert("isAdult".replace("isAdult", "porque eres feo"))
    alert((alert("conclusión, eres derito")))
    console.log(te * 4)
}
console.log("este es el espacio de r en la expresión toma cerveza:  ")
console.log("toma cerveza".indexOf("r"))

