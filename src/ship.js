//TODO: Move into constants file? (along with game states constants)
export const HORIZONTAL = 0;
export const VERTICAL = 1;


export class Ship {
    constructor(size, name, orientation) {
        this.size = size;
        this.name = name;
        this.cells = [];
        this.orientation = orientation;
    } 
}