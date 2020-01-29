var gameState = {
    input: "",
    words: [],
    stage: 0,
    word: 0,
    stages: [],
};

const LEARNED = 2;
const ALMOST_OK = 1;
const PRACTICE = 0;

/**
 * Makes an ajax request to get the list of words. This function works
 * asynchronously, so the state should be setup after it completes.
 */
function fetchWords() {
    window.setTimeout(function() {
        //in reality, this would come from the API in a callback
        var data = ["hello", "friend", "pencil", "car", "apple", "thinking", "thought", "music", "magical"];
    }, 1000);
}

function restart() {
    //suffle the words
    for(let i = 0; i < gameState.words.length; i++) {
        let temp = gameState.words[i];
        let i2 = parseInt(Math.random() * gameState.words.length)
        gameState.words[i] = gameState.words[i2];
        gameState.words[i2] = temp;
    }
    //setup the spacial repetition stages
}

/**
 * This sets up the honeycomb hexagons with letters. It should be run once when
 * the document is loaded. Each letter is given the appropriate offset from the 
 * rest of the grid.
 */
function setup(){
    var i = document.getElementById("letter_input").childNodes;
    i[1].style.transform='translateY(82px)';
    i[1].contentDocument.getElementById("text").textContent='F';
    i[3].style.transform='translateY(164px)';
    i[3].contentDocument.getElementById("text").textContent='K';
    i[5].style.transform='translateY(246px)';
    i[5].contentDocument.getElementById("text").textContent='P';
    i[7].style.transform='translateY(328px)';
    i[7].contentDocument.getElementById("text").textContent='U';
    i[9].style.transform='translate(71px,41px)';
    i[9].contentDocument.getElementById("text").textContent='B';
    i[11].style.transform='translate(71px,123px)';
    i[11].contentDocument.getElementById("text").textContent='G';
    i[13].style.transform='translate(71px,205px)';
    i[13].contentDocument.getElementById("text").textContent='L';
    i[15].style.transform='translate(71px,287px)';
    i[15].contentDocument.getElementById("text").textContent='Q';
    i[17].style.transform='translate(71px,369px)';
    i[17].contentDocument.getElementById("text").textContent='V';
    i[19].style.transform='translate(142px,0px)';
    i[19].contentDocument.getElementById("text").textContent='C';
    i[21].style.transform='translate(142px,82px)';
    i[21].contentDocument.getElementById("text").textContent='H';
    i[23].style.transform='translate(142px,164px)';
    i[23].contentDocument.getElementById("text").textContent='M';
    i[25].style.transform='translate(142px,246px)';
    i[25].contentDocument.getElementById("text").textContent='R';
    i[27].style.transform='translate(142px,328px)';
    i[27].contentDocument.getElementById("text").textContent='W';
    i[29].style.transform='translate(142px,410px)';
    i[29].contentDocument.getElementById("text").textContent='Z';
    i[31].style.transform='translate(213px,41px)';
    i[31].contentDocument.getElementById("text").textContent='D';
    i[33].style.transform='translate(213px,123px)';
    i[33].contentDocument.getElementById("text").textContent='I';
    i[35].style.transform='translate(213px,205px)';
    i[35].contentDocument.getElementById("text").textContent='N';
    i[37].style.transform='translate(213px,287px)';
    i[37].contentDocument.getElementById("text").textContent='S';
    i[39].style.transform='translate(213px,369px)';
    i[39].contentDocument.getElementById("text").textContent='X';
    i[41].style.transform='translate(284px,0px)';
    i[41].contentDocument.getElementById("text").textContent='E';
    i[43].style.transform='translate(284px,82px)';
    i[43].contentDocument.getElementById("text").textContent='J';
    i[45].style.transform='translate(284px,164px)';
    i[45].contentDocument.getElementById("text").textContent='O';
    i[47].style.transform='translate(284px,246px)';
    i[47].contentDocument.getElementById("text").textContent='T';
    i[49].style.transform='translate(284px,328px)';
    i[49].contentDocument.getElementById("text").textContent='Y';
    fetchWords();
}

/** */
function addLetter(obj) {
    var letter = obj.getElementById("text").textContent;
    var guess = document.getElementById("card").contentDocument.getElementById("text").textContent;
    console.log(letter);
    for (var j = 0; j < guess.length; j++){
        if (guess[j] == '_'){
            guess = setCharAt(guess,j,letter);
            document.getElementById("card").contentDocument.getElementById("text").textContent = guess;
            if (j == guess.length-1){
                if(guess == "BEAUTY"){
                    alert("That's Right!");
                    //run correct word animation and flip to show definition
                }
                else{
                    document.getElementById("card").contentDocument.getElementById("text").textContent = "______";
                    //wrong answer, reset the card and show option to give up
                }
            }
            break;
        }
    }
}
window.onload = setup;