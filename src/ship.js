//TODO: Move into constants file? (along with game states constants)
import SHIPS from './shipTypes.js';

export class Ship {
    constructor(x, y, orientation, shipType) {
        this.x = x;
        this.y = y;
        this.size = shipType.size;
        this.name = shipType.name;
        this.cells = [];
        this.orientation = orientation;
    }

    
}