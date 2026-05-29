export class GameBoard {
    constructor() {
        this.playerBoard = [];
        this.attackBoard = [];
    }

    #initializeBoard() {
        
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