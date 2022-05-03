// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


// 1. creo costante per contenere numeri da 1-6 uente
const randomNumberUser = Math.floor(Math.random() * 6) + 1;
// 2. Creo variabile per estrazione utente
let user = randomNumberUser;
console.log(user);
// 3. creo costante per contenere numeri da 1-6 uente
const randomNumberComp = Math.floor(Math.random() * 6) + 1;
// 4. Creo variabile per estrazione utente
let computer = randomNumberComp;
console.log(computer);

// 5. dichiaro costante per utilizzare box per inserimento immagine vincitore/perdente
const boxWinner = document.querySelector('.box-winner')
console.log(boxWinner)

const boxLoser = document.querySelector('.box-loser')
console.log(boxLoser)
// 5.1 Creo ciclo per stabilire il vincitore.
if (user > computer) {
    boxWinner.classList.add('winner');
    alert("Complimenti hai vinto!!")
} else if (user === computer) {
    alert("Stesso numero, riprova!!")
} else if (user < computer) {
    alert("Mi dispiace hai perso!!")
    boxLoser.classList.add('loser');
}

// 6. dichiaro costante per box dove mostrare numero estratto x user
const randomTextUser = document.querySelector('.random-number-user');
console.log(randomTextUser);
randomTextUser.innerText = randomNumberUser;
// 6. dichiaro costante per box dove mostrare numero estratto x computer
const randomTextComp = document.querySelector('.random-number-comp');
console.log(randomTextComp);
randomTextComp.innerText = randomNumberComp;



