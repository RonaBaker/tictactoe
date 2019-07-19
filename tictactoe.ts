import {Player} from './player';
import {GameStatus} from './gamestatus';
import {Game} from './game';

const game = new Game(3,3);
game.addPlayer(new Player('John Doe', 'x'));
game.addPlayer(new Player('Jason Bourne', 'o'));

game.board.print();

console.log(GameStatus[game.status]);
game.printSummary();

console.log(game.nextMove(0, 0));
console.log(game.nextMove(0, 0));
console.log(game.nextMove(1, 1));
console.log(game.nextMove(0, 2));
console.log(game.nextMove(2, 2));
console.log(game.nextMove(0, 1));
console.log(game.nextMove(2, 1));

game.board.print();

game.printSummary();
