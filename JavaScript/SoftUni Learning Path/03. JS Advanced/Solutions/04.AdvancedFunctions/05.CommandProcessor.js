function solution () {

    let result = '';
    
    function append (text) {
        result += text;
    }

    function removeStart (count) {
        result = result.substring(count);
    }

    function removeEnd (count) {
        result = result.substring(0, result.length - count);
    }

    function print () {
        console.log(result);
    }

    return {
        append,
        removeStart,
        removeEnd,
        print
    }
};

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
