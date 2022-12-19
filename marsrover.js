


class EventEmitter {
	constructor() {
		this.events = {};
	}
}

class Planet {
	constructor(squaredGridDimension = 10) {
		this.maxX = squaredGridDimension - 1;
		this.maxY = squaredGridDimension - 1;
	}
}

class Rover {
	constructor(x = 0, y = 0, direction = "N") {
		this.x = x;
		this.y = y;
		this.direction = direction; //N S W E
	}

	move(number, roverX, roverY, roverDir, obstacle) {
		console.log("number", number);
		console.log("obstacle", obstacle);
		//planet limit
		if (
			(roverDir == "N" && roverY <= 0) ||
			(roverDir == "S" && roverY >= 9) ||
			(roverDir == "E" && roverX >= 9) ||
			(roverDir == "W" && roverX <= 0)
		) {
			alert("You cannot move in that direction, the rover has to stay on Mars");
		} else if (roverDir == "N" && roverY <= 9) {
			roverY = roverY - number;
		} else if (roverDir == "S" && roverY < 9) {
			roverY = roverY + number;
		} else if (roverDir == "E" && roverX < 9) {
			roverX = roverX + number;
		} else if (roverDir == "W" && roverX < 9) {
			roverX = roverX - number;
		}
		this.x = roverX;
		this.y = roverY;
		this.direction = roverDir;
		let position = new Rover(this.x, this.y, this.direction);

		whereIsMyRover(position);
		goOn(position, obstacle);
	}

	turn = (turnDirection) => {
		let turn = turnDirection.toUpperCase();
		if (turn == "N") {
			this.direction = turn;
		}
		if (turn == "E") {
			this.direction = turn;
		}
		if (turn == "W") {
			this.direction = turn;
		}
		if (turn == "S") {
			this.direction = turn;
		}
	};
}

class Obstacle {
	constructor(x = 2, y = 3) {
		this.x = x;
		this.y = y;
	}
}

const startMove = (rover, obstacle) => {
	let whereToGo = prompt(
		"Plese let me know the direction, mars rover need to know it (ex : N or E or W or S):"
	);
	rover.turn(whereToGo);
	whereIsMyRover(rover);
	chooseMove(rover, obstacle);
};

const chooseMove = (roverSelected, obstacle) => {
	let forward = prompt("Choose how far you want to go (choose a number)");
	let number = parseInt(forward);
	console.log("valore di forward", number);
	// let move2 = move.toUpperCase();
	roverSelected.move(
		number,
		roverSelected.x,
		roverSelected.y,
		roverSelected.direction,
		obstacle
	);
};

const whereIsMyRover = (rover) => {
	document.getElementById("roverposition").textContent = [
		`Now the Rover is X:${rover.x}, Y: ${rover.y}, facing: ${rover.direction}`,
	];

	alert(
		`Now the Rover is X:${rover.x}, Y: ${rover.y}, facing: ${rover.direction}`
	);
};

const startexplore = () => {
	const rover = new Rover();
	const mars = new Planet();
	const obstacle = new Obstacle();
	alert(`Welcome to Mars`);
	alert(`Now your Mars Rover is in position X:0 , Y:0 ; Direction : `);
	startMove(rover, obstacle);
};

const goOn = (roverPosition, obstacle) => {
	let continueExplore = confirm(
		"Do you want to move one more time your mars rover?"
	);
	if (continueExplore) {
		alert("Yeah, good choice ");
		startMove(roverPosition, obstacle);
	} else {
		alert("Ok, see you next time, enjoy Mars");
	}
};

const onLoading = () => {
	const rover = new Rover();
	return rover;
};

const oppositeEdge = () => {
	const rover = new Rover(9, 9, "N");
	whereIsMyRover(rover);
};

//load Background
window.load = () => {
	const c = document.getElementById("marsCanvas");
	const img = document.getElementById("mars");
	const ctx = c.getContext("2d");
	ctx.drawImage(img, 1, 1);
};


window.load();
