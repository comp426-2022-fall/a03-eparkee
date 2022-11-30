//creating the roll function
export default function roll(sides, dices, rolls){
	var rolledvalues = [];
	for(let i = 0; i < rolls; i ++){
		var total = 0;
		for(let j = 0; j < dices; j ++){
			total += 1 + Math.floor(Math.random() * sides)
		}
		rolledvalues[i] = total
	}
	var object = {
		// creating the dices and setting the values to be parsed in cli.js
		sides: sides,
		dices: dices,
		rolls: rolls,
		results: rolledvalues
	}
	//return the completed array
	return object;
}

