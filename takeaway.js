function canWin(n) {
    if(n < 2) {
        return false;
    }

    let legalMoves = [2,3,5]

    let won = false;

    legalMoves.forEach(move => {
        if(!canWin(n-move)){
            won = true;
        }
    })

    return won;
}

console.log(canWin(8));