import {Player} from './player';

export class Board{
    cell : string[][] = [];
    rows: number;
    columns: number;
    winner?: Player ;
    winnerSign: string = '-';
    constructor(rows : number , columns : number){
        this.rows = rows; 
        this.columns = columns;
        this.cell = new Array(rows*columns);
        for (let i=0; i< rows; i++) {
            this.cell[i]=[];
            for (let j=0; j<columns; j++){
                this.cell[i][j]= '-';
            }
        }    
    }

    print(){
        let tempStr: string = "";
        for (let i=0; i< this.rows; i++) {
            for (let j=0; j< this.columns; j++){
                tempStr+= this.cell[i][j] +'  '
            }
            console.log(tempStr);
            tempStr = "";
        }  
    }
    
    isOccupied(row: number , col: number) : Boolean{
        if(this.cell[row][col] != '-'){
            return true;
        }
        return false;
    }

    setMove(row: number , col: number, sign: string) {
        this.cell[row][col] = sign;
    }

    checkWinning(): boolean{
        let strCheck: string = ""; 
        for(let i=0; i<this.rows; i++){ // check rows
            for(let j=0; j<this.columns; j++){
                strCheck+=this.cell[i][j];
            }
            if(this.checkWinner(strCheck)){
                return true;
            }
            strCheck = "";
        }

        for(let i=0; i<this.columns; i++){ // check columns
            for(let j=0; j<this.rows; j++){
                strCheck+=this.cell[i][j];
            }
            if(this.checkWinner(strCheck)){
                return true;
            }
            strCheck = "";
        }

        for(let i=0; i<this.rows; i++){ // check first diagonal
            strCheck+=this.cell[i][i];
        }
        if(this.checkWinner(strCheck)){
            return true;
        }

        strCheck = "";
        for(let i=0; i<this.rows; i++){ // check second diagonal
            for(let j=0; j<this.columns; j++){
                if(i+j === this.rows-1){
                    strCheck+=this.cell[i][j];
                }
            }
        }
        if(this.checkWinner(strCheck)){
            return true;
        }
        return false;
    }
    
    checkWinner(str: string) : boolean{
        if(str.split('').every(char => char === str[0] && str[0]!='-')){
            this.winnerSign = str[0];
            return true;
        }
        return false;
    }
}
