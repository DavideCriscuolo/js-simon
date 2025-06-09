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
const btnEl = document.querySelector("#btnGen");
const rowEl = document.querySelector("#rowFirst");
const viewInputNumbEl = document.querySelector("#inputNumb");
const viewTitleCard = document.querySelector(".card-title");
const viewTextCard = document.querySelector("#cardText");
const viewCardResult = document.querySelector("#cardResult");
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
    viewInputNumbEl.classList.add("d-block");
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

    let numEquals = [];

    for (let i = 0; i < inputNumbres.length; i++) {
      let number = inputNumbres[i];

      if (numbGen.includes(number) && !numEquals.includes(number)) {
        numEquals.push(number); // aggiungi solo una volta
      } else if (numEquals === 0) {
        console.log("non");
      }
    }
    viewCardResult.classList.remove("d-none");
    viewCardResult.classList.add("d-block");
    for (let i = 0; i < numbGen.length; i++) {
      if (numbGen.includes(inputNumbres[i])) {
        viewTitleCard.innerHTML = `Congratulazioni hai indovinato ${numEquals.length} numeri. `;

        viewTextCard.innerText = `Numeri indovinati: ${numEquals}`;
      } else {
        viewTitleCard.innerHTML = "Mi spiace nessun numero indovinato";
      }
    }

    e.preventDefault();
  });
});
