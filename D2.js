/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const primoNumero= 10
const secondoNumero= 8
if(primoNumero > secondoNumero){
  console.log("Il primo numero è più grande: ", primoNumero)
} else {
  console.log("il secondo numero è più grande: ", secondoNumero)
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if(secondoNumero!==5){
  console.log("not equal")
}
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let paroDisparo1= primoNumero%5
let paroDisparo2= secondoNumero%5
if(paroDisparo1!==0){
  console.log("non è divisibile per 5")
} else {
  console.log("divisibile per 5")
}
if(paroDisparo2!==0){
  console.log("non è divisibile per 5")
} else {
  console.log("divisibile per 5")
}
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if((primoNumero && secondoNumero)&& 8) {
  console.log("uno di questi due numeri è 8")
} else if ((primoNumero+secondoNumero) && 8) {
  console.log("la somma dei due numeri è8")
} else if((primoNumero-secondoNumero)&&8) {
console.log("la sottrazione dei due numeri è 8")
}
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart1 = 52
let totalShoppingCart2 = 49
if(totalShoppingCart1>50) {
  totalShoppingCart=totalShoppingCart1,
  console.log("Il suo conto è di: €", totalShoppingCart)
} else {
  totalShoppingCart=totalShoppingCart1+10,
console.log("il suo conto è di €:", totalShoppingCart)
}
if(totalShoppingCart2>50) {
  totalShoppingCart=totalShoppingCart2,
  console.log("Il suo conto è di: €", totalShoppingCart)
} else {
  totalShoppingCart=totalShoppingCart2+10,
console.log("il suo conto è di €:", totalShoppingCart)
}
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
blackFriday=true
if(blackFriday=true) {
  sconto=totalShoppingCart1*0.2,
  totalShoppingCart1=totalShoppingCart1-sconto,
  console.log("Oggi è il black fraday! hai uno scontro extra nel carrello!")
 if(totalShoppingCart1>50) {
  totalShoppingCart=totalShoppingCart1,
  console.log("Il suo conto è di: €", totalShoppingCart)
} else {
  totalShoppingCart=totalShoppingCart1+10,
console.log("il suo conto è di €:", totalShoppingCart1)
}
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* const a = 5
const b = 1
const c = 8
if(a>b && b>c) {
  console.log(a,b,c)
} else if (a>b && b<c) { */


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
cosasei=56
console.log(typeof cosasei)
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const valore = 59
disparoParo = valore%2

if(disparoParo===0) {
  console.log("Questo numero è paro")
} else {
  console.log ("Questo numero è disparo")
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  */
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else if(val >= 10) {
      console.log("Uguale a 10 o maggiore");
    }
    

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.city = ("toronto")
console.log(me)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
delete me.lastName
console.log(me)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.skills[2]
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const scatolaVuota = []
scatolaVuota.push(1)
scatolaVuota.push(2)
scatolaVuota.push(3)
scatolaVuota.push(4)
scatolaVuota.push(5)
scatolaVuota.push(6)
scatolaVuota.push(7)
scatolaVuota.push(8)
scatolaVuota.push(9)
scatolaVuota.push(10)

console.log(scatolaVuota)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete scatolaVuota[9]
console.log(scatolaVuota)
scatolaVuota.push(100)
console.log(scatolaVuota)
