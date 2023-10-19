multiply = do
    line1 <- getLine
    line2 <- getLine

    let a = read line1 :: Int
    let b = read line2 :: Int
    let c = a * b

    putStrLn (show(c))

main = do
    multiply