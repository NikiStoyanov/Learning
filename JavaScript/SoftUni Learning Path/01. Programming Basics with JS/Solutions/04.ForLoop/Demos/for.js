function forLoop() {
    // i is called iterator.
    // One full looping is called iteration.
    // We use for when we know the count of iterations.
    // i++ -> Postincrementation
    // ++i -> Preincrementation
    // i-- -> Postdecrementation
    // --i -> Predecrementation
    for (let i = 0/*start*/; i < 10/*condition for end of the loop*/; i++ /*step*/) {
        console.log(i); // Print the current value of i.
    }
}

forLoop();