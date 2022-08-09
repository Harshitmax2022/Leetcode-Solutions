var minimumMoves = function(s) {
    let move = 0;
    let i = 0;
    while(i<s.length){
        let char = s[i];
		// incrementing the index if we already have 'O'
        if(char== 'O'){
            i++;
        }
		// incrementing the move and index by 3 (Per move =  3 characters)
        if(char== 'X'){
            i=i+3;
            move++;
        }
    }
    return move;
};
