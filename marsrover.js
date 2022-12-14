

;
class Planet {
    constructor(squaredGridDimension = 10) {
        this.maxX = squaredGridDimension - 1;
        this.maxY = squaredGridDimension -1 ;
    }

}


class Rover {
    constructor(x = 0, y = 0, direction = "N") {
        this.x = x;
        this.y = y;
        this.direction = direction;  //N S W E
    }

    move(command){
        console.log(`moving ${command}`)
        if (command == "f"){
            this.y = this.y + 1;
        }

        if (command == "b"){
            this.y = this.y - 1;
        }
    }

    turn() {

    }

}

class Obstacle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

const start = () => {
   const mars = new Planet;
   const rover = new Rover;
   
   rover.move("b")
   whereIsMyRover(rover)
   rover.move("f")
   whereIsMyRover(rover)
}

const whereIsMyRover  = (rover) => {
    console.log(`Now the Rover is X:${rover.x}, Y: ${rover.y}, facing: ${rover.direction}`);
}

start();



/*

1,1 N
1, 2 N

*/