/*Descrizione: 
Visualizzare in pagina 5 numeri casuali. 
Da lì parte un timer di 30 secondi. 
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.
BONUS:
Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.*/

//

const numbOneEl = document.querySelector(".numbOne");
const numbTwoEl = document.querySelector(".numbTwo");
const numbThreeEl = document.querySelector(".numbThree");
const numbFourEl = document.querySelector(".numbFour");
const numbFiveEl = document.querySelector(".numbFive");
const btnEl = document.querySelector(".btn");
const rowEl = document.querySelector(".row");
const inputNumbEl = document.querySelector("#inputNumb");

btnEl.addEventListener("click", function (e) {
  let numbGen = [];
  for (let i = 1; i <= 5; i++) {
    function getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    numbGen.push(getRndInteger(1, 100));
  }
  console.log(numbGen);
  e.preventDefault();
  setTimeout(function () {
    rowEl.classList.add("d-none");
    inputNumbEl.classList.remove("d-none");
    inputNumbEl.classList.add("d-flex");
  }, 1000);

  numbOneEl.innerText = numbGen[0];
  numbTwoEl.innerText = numbGen[1];
  numbThreeEl.innerText = numbGen[2];
  numbFourEl.innerText = numbGen[3];
  numbFiveEl.innerText = numbGen[4];
});
