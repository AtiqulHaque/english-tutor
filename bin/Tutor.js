const sentences = require("./sentences");
const words = require("./words");
const crypto = require("crypto");
const chalk = require("chalk");
const boxen = require("boxen");

const boxenOptions = {
 padding: 1,
 borderStyle: "round",
 borderColor: "green"
};

let Tutor = {
    showSentenceByRandom :  () =>{
      console.clear();
      let randomIndex = crypto.randomInt(0, sentences.items.length);
      const msgBox = boxen( chalk.green.bold(sentences.items[randomIndex]), boxenOptions );
      console.log(msgBox);
      console.log("\n\n\n\n\n\n\nPress any key to stop this game.");
      
  }, showWordByRandom :  () =>{

      console.clear();
      let randomIndex = crypto.randomInt(0, words.items.length);
      const msgBox = boxen( words.items[randomIndex], boxenOptions );
      console.log(msgBox);
      console.log("\n\n\n\n\n\n\nPress any key to stop this game.");
  }
}

exports.item = Tutor;

