let winningBox;
let clickCounter = 0;
let whereisthecoin;
let player2selection;

function closeModal() {
   modal.style.display = "none";
}

function coinFacesSelect(removeFace, faces) {
   flipResults.textContent = faces;
   coinFace.classList.remove(removeFace); // Remove old class
   coinFace.classList.add(faces);
}

function playertwoturn() {
   boxA.style.backgroundColor = "Red";
   boxB.style.backgroundColor = "Red";
   player.textContent = "2";
   instructions.textContent = "Select the box you believe that have the coin";
}

// Flip calculation where the system will generate random number and determine if the output is odd or even
function flipHandler() {
   let flipResult = parseInt(Math.random() * Math.random() * 100);
   flipResult %= 2;
   if (flipResult > 0) {
      faces = "tails";
      removeFace = "heads";
      coinFacesSelect(removeFace, faces);
   } else {
      faces = "heads";
      removeFace = "tails";
      coinFacesSelect(removeFace, faces);
   }
}

function isEmpty(message) {
   messageContainer.textContent = message;
   modal.style.display = "block";
}

function generateBoxWin() {
   let winningBoxMessage;
   winningBox = parseInt(Math.random() * Math.random() * 100);
   winningBox = winningBox % 2;

   if (winningBox > 0) {
      winningBoxMessage = "You have the coin";
      isEmpty(winningBoxMessage);
   } else {
      winningBoxMessage = "The box is empty";
      isEmpty(winningBoxMessage);
   }
}

function checkWinner() {
   function playerselect() {
      console.log("The coin is on " + whereisthecoin);
      console.log("Player 2 Selected " + player2selection);
   }
   if (player2selection === whereisthecoin) {
      playerselect();
      console.log("Player 2 Won");
      isEmpty("Player 2 Won");
   } else {
      playerselect();
      console.log("Player 1 Won");
      isEmpty("Player 1 Won");
   }
}

function selectBoxA() {
   if (clickCounter == 0) {
      clickCounter++;
      playertwoturn();
      generateBoxWin();
      if (winningBox == 0) {
         whereisthecoin = "B";
      } else {
         whereisthecoin = "A";
      }
   }
   //player 2 turn to select
   else if (clickCounter > 0) {
      player2selection = "A";
      checkWinner();
   }
}

function selectBoxB() {
   if (clickCounter == 0) {
      clickCounter++;
      playertwoturn();
      generateBoxWin();
      if (winningBox == 1) {
         whereisthecoin = "B";
      } else {
         whereisthecoin = "A";
      }
   } else if (clickCounter > 0) {
      player2selection = "B";
      checkWinner();
   }
}

// Button click or space keypress
document.body.onkeyup = function (e) {
   if (e.key == " " || e.code == "space" || e.keycode == 32) {
      flipHandler();
   }
};

window.onclick = function (event) {
   if (event.target == modal) {
      modal.style.display = "none";
   }
};

function nextPageToBox() {
   console.log("next button clicked");
   sectionCoin.style.display = "none";
   sectionBox.style.display = "block";
}
function backPageToCoin() {
   sectionCoin.classList.remove("coin-section-hidden");
   sectionCoin.classList.add("coin-section");
}

span.addEventListener("click", closeModal);
coinFace.addEventListener("click", flipHandler);
boxA.addEventListener("click", selectBoxA);
boxB.addEventListener("click", selectBoxB);
btnNext.addEventListener("click", nextPageToBox);
