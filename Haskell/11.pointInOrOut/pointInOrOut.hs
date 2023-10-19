findPointPosition = do
    line1 <- getLine
    line2 <- getLine
    line3 <- getLine
    line4 <- getLine
    line5 <- getLine
    line6 <- getLine

    let x1 = read line1 :: Int
    let y1 = read line2 :: Int
    let x2 = read line3 :: Int
    let y2 = read line4 :: Int
    let x = read line5 :: Int
    let y = read line6 :: Int

    if (x1 <= x && x <= x2) && (y1 <= y && y <= y2)
    then putStrLn "INSIDE"
    else putStrLn "OUTSIDE"

main = do
    findPointPosition