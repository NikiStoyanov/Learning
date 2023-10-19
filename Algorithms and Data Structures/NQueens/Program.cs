int N = int.Parse(Console.ReadLine());

int[,] board = new int[N, N];

if (!Solve(board, 0))
{
    Console.WriteLine("Solution does not exist");
    return;
}

Print(board);

// Check if you can place the queen on this square.
bool Place (int[,] board, int row, int col)
{
	int i, j;
    // Check this row on left side
    for (i = 0; i < col; i++)
        if (board[row, i] == 1) return false;

    // Check upper diagonal on left side
    for (i = row, j = col; i >= 0 && j >= 0; i--, j--)
        if (board[i, j] == 1) return false;

    // Check lower diagonal on left side
    for (i = row, j = col; j >= 0 && i < N; i++, j--)
        if (board[i, j] == 1) return false;

    return true;
}

bool Solve(int[,] board, int col)
{
    if (col >= N) return true;

    for (int i = 0; i < N; i++)
    {
        if (Place(board, i, col))
        {
            board[i, col] = 1;

            if (Solve(board, col + 1) == true) return true;

            board[i, col] = 0; // BACKTRACK
        }
    }

    return false;
}

// Print the chess board
void Print(int[,] board)
{
	for (int i = 0; i < N; i++)
	{
		for (int j = 0; j < N; j++)
		{
			var symbol = board[i, j] == 1 ? "Q" : ".";
            Console.Write(symbol);
		}
        Console.WriteLine();
	}
}