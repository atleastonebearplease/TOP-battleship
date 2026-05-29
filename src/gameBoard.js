import { Cell } from "./cell";

const BOARD_SIZE = 10;

export class GameBoard {
    constructor() {
        this.playerBoard = [];
        this.attackBoard = [];
        this.#initializeBoard();
    }

    #initializeBoard() {
        for(let x = 0; x < BOARD_SIZE; x++) {
            for(let y = 0; y < BOARD_SIZE; y++) {
                this.playerBoard[x][y] = new Cell(x, y);
            }
        }

        for(let x = 0; x < BOARD_SIZE; x++) {
            for(let y = 0; y < BOARD_SIZE; y++) {
                this.attackBoard[x][y] = new Cell(x, y);
            }
        }
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