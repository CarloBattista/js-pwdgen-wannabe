/* 

01-Chiedi all’utente il suo nome
02-poi chiedi il suo cognome
03-poi chiedi il suo colore preferito
04-Infine scrivi sulla pagina nomecognomecolorepreferito21

*/

let nome = prompt("Come ti chiami?")

let cognome = prompt("Qual'è il tuo cognome?")

let colorePreferito = prompt("Qual'è il tuo colore preferito?")

const numero = 21;

console.log(`${nome}${cognome}${colorePreferito}${numero}`)

document.getElementById("password_non_sicura").innerHTML = `
    <span class='text'>Questa è la tua password non sicura:</span> <span class='password'>${nome}${cognome}${colorePreferito}${numero}</span>
`;