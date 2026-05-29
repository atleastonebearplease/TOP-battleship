import { Cell } from "./cell";
import * as CONST from "./constants.js";
import { SHIPS } from './shipTypes.js';
import { Ship } from "./ship.js";

export class GameBoard {
    constructor() {
        this.playerBoard = [];
        this.attackBoard = [];
        this.#initializeBoard();
        this.playerShips = [];
    }

    #initializeBoard() {
        for(let x = 0; x < CONST.BOARD_SIZE; x++) {
            let cellColumn = new Array();

            for(let y = 0; y < CONST.BOARD_SIZE; y++) {
                cellColumn.push(new Cell(x, y));
            }

            this.playerBoard.push(cellColumn);
        }

        for(let x = 0; x < CONST.BOARD_SIZE; x++) {
            let cellColumn = new Array();

            for(let y = 0; y < CONST.BOARD_SIZE; y++) {
                cellColumn.push(new Cell(x, y))
            }

            this.attackBoard.push(cellColumn);
        }
    }

    addShip(x, y, orientation, shipType) {
        if(this.cellOutOfBounds(x, y)) return "OUT OF BOUNDS";

        let shipCells = [];

        shipCells.push(this.getPlayerCell(x, y));

        for(let i = 0; i < shipType.size; i++) {
            if(orientation === CONST.HORIZONTAL) {
                //Add cells moving to the right
                let shipCellX = x + i; 

                if(this.cellOutOfBounds(shipCellX, y)) return "OUT OF BOUNDS";

                let newShipCell = this.getPlayerCell(shipCellX, y);

                if(newShipCell.containsShip) return "OCCUPIED"; //Make sure there isn't a ship here already

                shipCells.push(newShipCell);
                
            } else {
                //Add cells moving to the right
                let shipCellY = y + i; 

                if(this.cellOutOfBounds(shipCellY, y)) return "OUT OF BOUNDS";

                let newShipCell = this.getPlayerCell(x, shipCellY);

                if(newShipCell.containsShip) return "OCCUPIED"; //Make sure there isn't a ship here already

                shipCells.push(newShipCell);
            }
        }

        let newShip = new Ship(x, y, orientation, shipType);

        for(let i = 0; i < shipCells.length; i++) {
            shipCells[i].containsShip = true;
            newShip.cells.push(shipCells[i]);
        }
        
        this.playerShips.push(newShip);
    }

    getPlayerCell(x, y) {
        if(this.cellOutOfBounds(x, y) === true) throw new RangeError("Coordinates are out of bounds");

        return this.playerBoard[x][y];
    }

    getAttackCell(x, y) {
        if(this.cellOutOfBounds(x, y) === true) throw new RangeError("Coordinates are out of bounds");

        return this.attackBoard[x][y];
    }

    cellOutOfBounds(x, y) {
        return x < 0 || x > CONST.BOARD_SIZE - 1 || y < 0 || y > CONST.BOARD_SIZE - 1;
    }

    /* 
        Takes a coordinate. Returns a message about what happened:
        "Hit" "Sank Battleship" "Miss" "Already attacked"
    */
    attack(x, y) { 

    }
    
    /* 
        Returns if all ships are sunk
    */
    allShipsSunk() {

    }
}

/* 
    Ship owns its state: ship cells, sunk
    Gameboard owns hits, misses, and ships
    Game owns game boards and state for player and computer
    Controller 
*/