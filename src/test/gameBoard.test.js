import { GameBoard } from "../gameBoard";
import * as CONST from "../constants.js";
import { SHIPS } from "../shipTypes.js";

describe("Game Board Testing", () => {
    let gameBoard = new GameBoard();

    describe('addShip()', () => {
        it('Adds a new ship', () => {
            gameBoard.addShip(1, 1, CONST.HORIZONTAL, SHIPS.BATTLESHIP);

            expect(gameBoard.ships.length).toEqual(1);
            expect(gameBoard.ships[0].x).toEqual(1);
            expect(gameBoard.ships[0].name).toEqual(SHIPS.BATTLESHIP.name);
        });
    });

});