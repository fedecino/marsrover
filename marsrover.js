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

	move(forward, roverX, roverY, roverDir) {
        let roverSelectedX = roverX.x;
        let roverSelectedY = roverY.y;
        let roverSelectedDir = roverDir.direction;
		console.log(`moving ${roverSelectedX}`);
        console.log(`moving ${roverSelectedY}`);
        console.log(`moving ${roverSelectedDir}`);

        //planet limit
        if ((roverSelectedDir == "N" && roverSelectedY <= 0) || (roverSelectedDir == "S" && roverSelectedY >= 9) || (roverSelectedDir == "E" && roverSelectedX >= 9) || 
            (roverSelectedDir == "W" && roverSelectedX <=0)) {
                alert("You cannot move in that direction, the rover has to stay on Mars");
                
        }
        else if (roverSelectedDir == "N" && roverSelectedY <=9){
            roverSelectedY = roverSelectedY - [forward];

        }
        else if (roverSelectedDir == "S" && roverSelectedY < 9){
            roverSelectedY = roverSelectedY + [forward];

        }
        else if (roverSelectedDir == "E" && roverSelectedX < 9){
            roverSelectedX = roverSelectedX + [forward];
        }
        else if (roverSelectedDir == "W" && roverSelectedX < 9){
            roverSelectedX = roverSelectedX - [forward];
        }
       this.x = roverSelectedX;
       this.y = roverSelectedY;


	}

	turn = (turnDirection) => {
        let turn = turnDirection.toUpperCase();
        if (turn == "N"){
            this.direction = turn;
        }
        if (turn == "E"){
            this.direction = turn;
        }
        if (turn == "W"){
            this.direction = turn;
        }
        if (turn == "S"){
            this.direction = turn;
        }

    }
}

class Obstacle {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}

const startMove = (rover,mars) => {
	let whereToGo = prompt(
		"Plese let me know the direction, mars rover need to know it (ex : N or E or W or S):"
	);
    rover.turn(whereToGo);
	whereIsMyRover(rover);
	chooseMove(rover,mars);
};

const chooseMove = (roverSelected) => {
    let forward = prompt(
		'Choose how far you want to go (choose a number)'
	);
    console.log("valore di forward",forward);
	// let move2 = move.toUpperCase();
    roverPos = roverSelected;
	roverSelected.move(forward,roverPos.x,roverSelected.y,roverSelected.direction);
};

const checkObstacle = (roverPosition) => {};

const checkPlanetDimension = (roverX,roverY,roverDir) => {

};

const whereIsMyRover = (rover) => {
    document.getElementById('roverposition').textContent = [`Now the Rover is X:${rover.x}, Y: ${rover.y}, facing: ${rover.direction}`];
 
	alert(
		`Now the Rover is X:${rover.x}, Y: ${rover.y}, facing: ${rover.direction}`
	);
};

const start = () => {
    const rover = new Rover();
	const mars = new Planet();
	const obstacle = new Obstacle();
   
	alert(`Welcome to Mars`);
	alert(`Now your Mars Rover is in position X:0 , Y:0 ; Direction : `);

	startMove(rover);
   
};

window.load = () => {
	const c = document.getElementById("marsCanvas");
	const img = document.getElementById("mars");
	const ctx = c.getContext("2d");
	ctx.drawImage(img, 1, 1);
};

window.load();

