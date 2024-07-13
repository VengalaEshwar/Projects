export default function isWinner(board, symbol) {
    const winningCombinations = [
        [0, 1, 2], // Row 1
        [3, 4, 5], // Row 2
        [6, 7, 8], // Row 3
        [0, 3, 6], // Column 1
        [1, 4, 7], // Column 2
        [2, 5, 8], // Column 3
        [0, 4, 8], // Diagonal 1
        [2, 4, 6]  // Diagonal 2
    ];

    // Check if any of the winning combinations are met
    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] === symbol && board[b] === symbol && board[c] === symbol) {
            return symbol; // We have a winner
        }
    }
    
    return null; // No winner found
}
