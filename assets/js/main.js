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
const viewInputNumbEl = document.querySelector("#inputNumb");
const inputNumberOne = document.querySelector("#numberOne");
const inputNumberTwo = document.querySelector("#numberTwo");
const inputNumberThree = document.querySelector("#numberThree");
const inputNumberFour = document.querySelector("#numberFour");
const inputNumberFive = document.querySelector("#numberFive");
const btnSubEl = document.querySelector("#btnInput");
const formInputEL = document.querySelector("form");

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
    viewInputNumbEl.classList.remove("d-none");
    viewInputNumbEl.classList.add("d-flex");
  }, 2000);

  numbOneEl.innerText = numbGen[0];
  numbTwoEl.innerText = numbGen[1];
  numbThreeEl.innerText = numbGen[2];
  numbFourEl.innerText = numbGen[3];
  numbFiveEl.innerText = numbGen[4];

  //vorrei aggiungere un altra arry per i numeri che immette l utente in modo tale da conftontarli
  //oppure potrei optare per il confronto singolo e quindi creare delle condizione dove almeno 2 3 numeri se sono uguali ha vinto

  formInputEL.addEventListener("submit", function (e) {
    let inputNumbres = [
      Number(inputNumberOne.value),
      Number(inputNumberTwo.value),
      Number(inputNumberThree.value),
      Number(inputNumberFour.value),
      Number(inputNumberFive.value),
    ];
    let numbequals = 0;
    for (let i = 0; i < numbGen.length; i++) {
      if (numbGen.includes(inputNumbres[i])) {
        console.log("object");
      } else {
        console.log("no");
      }
    }

    e.preventDefault();
    console.log(e);
    console.log(inputNumbres);
  });
});
