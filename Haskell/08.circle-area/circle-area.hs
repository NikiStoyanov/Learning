findCircleArea = do
    line1 <- getLine

    let radius = read line1 :: Float
    let area = pi * radius * radius

    putStrLn (show(area))

main = do
    findCircleArea