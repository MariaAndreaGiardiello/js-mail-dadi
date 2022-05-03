// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// 1. Creare prompt per inserimento e-mail utente
const usermail = prompt("Inserisci la tua mail");

// 2. Creare array che contenga le email concesse
const rightMail = ["giuseppe.verdi@gmail.com", "giuseppe.verdi@icloud.com", "giuseppe.verdi@libero.com", "giuseppe.verdi@outlook.com"];
console.log(rightMail);

// 3. Creare ciclo per convalida email utente
for (let i = 0; i < rightMail.length; i++) {
    if (usermail === rightMail[i]) {
        console.log(rightMail[i]);
// 4. Creare alert per verifica andata a buon fine
        alert("Complimenti, e-mail verificata correttamente. Buona navigazione!")
    } else {
        console.log(rightMail[i]);
// 5. Creare alert per verifica non andata a buon fine
        alert("Si prega di inserire una nuova e-mail; formato non supportato")
    }
    break
}