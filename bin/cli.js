#!/usr/bin/env node

//importing in the libraries and functions
import roll from "../lib/roll.js";
import minimist from "minimist";

//creating the string parsing thing
const args = minimist(process.argv.slice(2));

let sides = 6
let dice = 2 
let rolls = 1

//bring in values and set defaults if outside of bounds
if(args.sides > 0){
	sides = args.sides
}
if(args.dice > 0){
	dice = args.dice
}
if(args.rolls > 0){
	rolls = args.rolls
}

//run the program from the command line
console.log(JSON.stringify(roll(sides,dice,rolls)))
//exit the program with no status message
process.exit(0);
