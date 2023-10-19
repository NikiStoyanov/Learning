doubleNum n = n * 2

doubleNum n = n * 2


main = do
    line <- getLine
    let n = read line :: Int
    putStrLn ("Doubled number: " ++ show(doubleNum n))
