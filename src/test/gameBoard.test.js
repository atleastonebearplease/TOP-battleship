import { GameBoard } from "../gameBoard";
import * as CONST from "../constants.js";
import { SHIPS } from "../shipTypes.js";

describe("Game Board Testing", () => {
    let gameBoard = new GameBoard();

    describe('addShip()', () => {
        it('Adds a new ship to the ship list', () => {
            gameBoard.addShip(1, 1, CONST.HORIZONTAL, SHIPS.BATTLESHIP);

            expect(gameBoard.playerShips.length).toEqual(1);
            expect(gameBoard.playerShips[0].x).toEqual(1);
            expect(gameBoard.playerShips[0].name).toEqual(SHIPS.BATTLESHIP.name);
        });

        it('Adds a new ship to the player board', () => {
            gameBoard.addShip(1, 1, CONST.HORIZONTAL, SHIPS.BATTLESHIP);

            expect(gameBoard.getPlayerCell(1, 1).containsShip).toEqual(true);
            expect(gameBoard.getPlayerCell(2, 1).containsShip).toEqual(true);
            expect(gameBoard.getPlayerCell(3, 1).containsShip).toEqual(true);
            expect(gameBoard.getPlayerCell(4, 1).containsShip).toEqual(true);

            gameBoard.addShip(2, 2, CONST.VERTICAL, SHIPS.BATTLESHIP);

            expect(gameBoard.getPlayerCell(2, 2).containsShip).toEqual(true);
            expect(gameBoard.getPlayerCell(2, 3).containsShip).toEqual(true);
            expect(gameBoard.getPlayerCell(2, 4).containsShip).toEqual(true);
            expect(gameBoard.getPlayerCell(2, 5).containsShip).toEqual(true);
        })
    });

    describe('getPlayerCell()', () => {
        it('Returns the correct cell', () => {
            let cell = gameBoard.getPlayerCell(1, 9);

            expect(cell.x).toEqual(1);
            expect(cell.y).toEqual(9);
        });

        it('Throws when coordinate is out of bounds', () => {
            let outOfBounds = () => {
                gameBoard.getPlayerCell(10, 10);
            }

            expect(() => outOfBounds()).toThrow('Coordinates are out of bounds');
        });
    });

});