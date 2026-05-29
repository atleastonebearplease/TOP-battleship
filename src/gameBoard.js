import { Cell } from "./cell";
import * as CONST from "./constants.js";
import { SHIPS } from './shipTypes.js';
import { Ship } from "./ship.js";

export class GameBoard {
    constructor() {
        this.playerBoard = [];
        this.attackBoard = [];
        this.#initializeBoard();
        this.ships = [];
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
        this.ships.push(new Ship(x, y, orientation, shipType));
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