pow2 n =
    if n == 0
    then 1
    else 2 * (pow2 (n - 1))

repeatString str n =
    if n == 0
    then ""
    else str ++ repeatString str (n - 1)

main = do
    line <- getLine
    let pow = read line :: Int
    putStrLn (show(pow2 pow))

    str <- getLine
    line1 <- getLine
    let n = read line1 :: Int
    putStrLn (repeatString str n)
