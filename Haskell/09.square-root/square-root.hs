square x = x * x

main = do
    let a = square 5
    let b = (sqrt a)

    putStrLn ("The square of " ++ b ++ " is " ++ a)
