import {Board} from './board';
import {Player} from './player';
import {GameStatus} from './gamestatus';

export class Game{
    movesHistory : string[] = [];
    rows: number;  
    columns: number; 
    playerList: Player[]= [];
    board: Board;
    status: GameStatus = GameStatus.InProgress;
    activePlayer? : Player; 
    playerTurn : number = 0;
    numPlayer : number = 0;

    constructor(rows : number , columns : number){
        this.rows = rows; 
        this.columns = columns; 
        this.board = new Board(rows, columns);
    }

    addPlayer(player: Player){
        this.playerList.push(player);
        this.activePlayer = this.playerList[this.playerTurn];
        this.numPlayer++;
    }

    printSummary(){
        if(this.status === GameStatus.InProgress){
            console.log("Game is in progress");
        }
        else if(this.status === GameStatus.Completed){
            console.log("Game completed");
            for(let player of this.playerList){
                if(player.sign === this.board.winnerSign){
                    console.log(player.name + " won!");
                    return;
                }
            }
            console.log("Tie game");
        }
        if (this.movesHistory.length === 0){
            console.log("No moves have been made");
        }
        else{
            console.log("Moves that have been made:");
            for (let move of this.movesHistory) {
                console.log(move); 
            }
        }
    }

    nextMove(row: number, col: number): Boolean{
        if (this.board.checkWinning() === true){
            this.status = GameStatus.Completed;
            return false;
        }
        if (this.board.isOccupied(row, col) === true){
            return false;
        }
        else{ // cell isn't occupied 
            this.board.setMove(row, col, this.activePlayer!.sign);
            this.movesHistory.push( "set '"+ this.activePlayer!.sign +"' in ("+ row +","+ col +")");
            this.updateActivePlayer();
        }
        return true;       
    }

    updateActivePlayer(){
        if (this.playerTurn+1 >= this.numPlayer){
            this.playerTurn = 0;
        }
        else{
            this.playerTurn++
        }
        this.activePlayer = this.playerList[this.playerTurn];
    }

}