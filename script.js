/*
Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100 all’avvio 
della pagina.
MILESTONE 1
Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli 
di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
MILESTONE 2
Dato un container nel DOM, appendi un elemento html con il numero o 
la stringa corretta.
MILESTONE 3
Applica uno stile differente a seconda del valore dell’indice per 
i multipli di 3, per i multipli di 5 e per i valori che sono 
sia multipli di 3 che di 5.
*/


let text = "";


for (let i = 1; i <= 100; i++) {


console.log ("calcolo dei numeri")

let text = "";
let colorClass = "";

if(i % 3 == 0 && i % 5 == 0){
    text= "fizzbuzz" ;
    colorClass= "bg-danger"
    console.log("fizzbuzz");
}else if(i % 5 === 0){
    text= "buzz" ;
    colorClass= "bg-warning"
    console.log("buzz");
}else if(i % 3 === 0){
    text= " fizz" ;
    colorClass= "bg-success"
    console.log("fizz");
}else{
    text= i.toString()
}

//si potrebbe anche fare " let text = i.toString()"

console.log (text)

const resultListHtml = document.querySelector(".result-list");




resultListHtml.innerHTML += `<li class="${colorClass}">
                                ${text}
                                </li>`; 

}