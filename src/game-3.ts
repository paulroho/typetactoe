import { Board, playX, playO } from './tictactoe';

const board = new Board();
const isFreeField = 'T';

const board1 = playX('TOP', 'LEFT')(board, isFreeField);
console.log(board1.render());
console.log(board1.status());

const board2 = playO('TOP', 'LEFT')(board1, isFreeField);
console.log(board2.render());
console.log(board2.status());
