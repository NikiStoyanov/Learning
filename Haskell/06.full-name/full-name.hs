printName firstName lastName = putStrLn(firstName ++ " " ++ lastName)

main = do
    firstName <- getLine
    lastName <- getLine

    printName firstName lastName
