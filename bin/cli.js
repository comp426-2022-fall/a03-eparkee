#!/usr/bin/env node

import {roll} from "~/workspace/a03-eparkee/lib/roll.js";
import minimist from "minimist";

const args = minimist(process.argv.slice(2));

//bring in values and set defaults if outside of bounds
if(args.sides > 0){
	sides = args.sides
}
else {
	sides = 6
if(args.dice > 0){
	dice = args.dice
}
else{
	dice = 2
}
if(args.rolls > 0){
	rolls.args.rolls
}
else{
	rolls = 1
}

//run the program from the command line
console.log(JSON.stringify(roll-dice(sides,dice,rolls)))
//exit the program with no status message
process.exit(0)

