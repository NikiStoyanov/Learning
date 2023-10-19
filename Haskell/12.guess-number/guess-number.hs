enterNumber :: IO Int
enterNumber = do
    line1 <- getLine
    let a = read line1 :: Int
    return a

guessNumber :: Int -> IO ()
guessNumber a = do
    line2 <- getLine
    let number = read line2 :: Int

    if number > a
    then do
        putStrLn "Too high!"
        guessNumber a
    else if number < a
    then do
        putStrLn "Too low!"
        guessNumber a
    else putStrLn "You win!"

main :: IO ()
main = do
    putStrLn "Enter a number:"
    n <- enterNumber
    putStrLn "Guess the number:"
    guessNumber n