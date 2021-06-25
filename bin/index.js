#!/usr/bin/env node

const readline = require('readline');
const eol = require('os').EOL;
const Tutor = require("./Tutor").item;

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);


 const keyMap = new Map();

keyMap.set('t', 'Tense related sentence.');
keyMap.set('v', 'Vocabulery.');
keyMap.set('CTRL+c', 'For Exit.');


function listKeys() {
    console.clear();
    keyMap.forEach((value, key) => {
      console.log(`${key} - ${value}`);
    });
  }

let intervalObj = null;
let timeDuration = 10000;
listKeys();

process.stdin.on('keypress', (str, key) => {
    if(intervalObj){
        clearInterval(intervalObj);
    }

    if (key.ctrl && key.name === 'q') {
      clearInterval(interval);
      console.clear();
      listKeys();
    } else if (key.ctrl && key.name === 'c') {
        process.exit();
    } else {
        if (keyMap.has(str)) {
            if (key.name === 't') {
                if(intervalObj){
                    clearInterval(intervalObj);
                }
                Tutor.showSentenceByRandom();

                intervalObj = setInterval(Tutor.showSentenceByRandom, timeDuration);

            } else if (key.name === 'v') {
                if(intervalObj){
                    clearInterval(intervalObj);
                }
                Tutor.showWordByRandom()
                intervalObj = setInterval(Tutor.showWordByRandom, timeDuration);
            }
        }else{
            if(intervalObj){
                clearInterval(intervalObj);
            }
            console.clear();
            listKeys();
        }

       
    }
  });