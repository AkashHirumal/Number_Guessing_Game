

const guessNumber = Math.floor(Math.random() * 10) + 1;
console.log(guessNumber);
let countNum = 3;

function myGuess() {
    let guessText = Number(document.getElementById("txtGuess").value);  


    if (countNum > 0) {
        if (guessNumber === guessText) {
            countNum = 0;
            chance.innerHTML = "";
            resalt.innerHTML = "YOU WIN THE GAME...!";
            gif.innerHTML = `<img id="winGif" src="./img/winn.gif" alt="GIF win" style="display: block"/>`;
        } else {
            countNum--;
            countc.innerHTML = countNum;
            if (guessNumber > guessText) {
                resalt.innerHTML = "Your number is too low....TRY Again!";
            } else {
                resalt.innerHTML = "Your number is too high....TRY Again!";
            }
        }
        
        if (countNum === 0 && guessNumber !== guessText) {
            countNum = 0;
            chance.innerHTML = "";
            resalt.innerHTML = "GAME OVER ! Out of chances....";
            gif.innerHTML = `<img id="winGif" src="./img/lost.gif" alt="GIF win" style="display: block" />`;
            
        }
    }
}