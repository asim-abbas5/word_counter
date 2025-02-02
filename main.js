#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var answers = await inquirer_1.default.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word:"
    }
]);
var words = answers.Sentence.split(" ");
//Print the array of words to the console
console.log(words);
//Print the word of the sentence to the console
console.log("Your sentence word count is ".concat(words.length));
