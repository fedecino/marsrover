

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

const startMove = (rover) => {
    const whereToGo = prompt("Plese let me know the direction, mars rover need to know it (ex : N or E or W or S):");
    // const move = prompt("Choose if you want to move forward or move back ");
     const direction = whereToGo.toUpperCase();
     switch (direction) {
         case 'N':
             console.log(`you choose the ${direction} direction`);
             rover.direction = direction;
             break;
             case 'E':
                 console.log(`you choose the ${direction} direction`);
                 rover.direction = direction;
             break;
                 case 'W':
                     console.log(`you choose the ${direction} direction`);
                     rover.direction = direction;
             break;
                     case 'S':
                         console.log(`you choose the ${direction} direction`);
                         rover.direction = direction;
             break;
     }
     
     whereIsMyRover(rover);
     chooseMove(rover);
}

const chooseMove = (roverSelected ) => {
     const move = prompt('Choose if you want to move forward or move back (type "F" move forward / type "B"  move back)');
      const move2 = move.toUpperCase();
      switch (move2) {
          case 'F':
              console.log(`you choose to move ${move2}`);
              roverSelected.y = roverSelected.y +1;
              break;
              case 'B':
              console.log(`you choose to move ${move2}`);
              roverSelected.y = roverSelected.y +1;
              break;
              default:
                alert(`Use the right command, insert F or B`);
      }
      whereIsMyRover(roverSelected);
 }

const checkPosition = () =>{


}



const whereIsMyRover  = (rover) => {
    alert(`Now the Rover is X:${rover.x}, Y: ${rover.y}, facing: ${rover.direction}`);
}

const start = () => {
    const rover = new Rover();
    const mars = new Planet;
    const obstacle = new Obstacle;
    alert(`Welcome to Mars`)
    startMove(rover);

}


start();
