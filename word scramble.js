let myString = "Ascendant";

function wordScramble (value){
    let wordLength = value.length;
    let scrambledString = "";
    for (let i = 0; i < wordLength; i ++) {
        console.log(value.length);
        let index = Math.floor(Math.random() * value.length);
        scrambledString += value[index];
        console.log(scrambledString);
        value = value.substr(0, index) + value.substr(index + 1);
        console.log(value);
    }
    return scrambledString;
}

console.log(wordScramble(myString));

/* Project was to make a word scrambler */