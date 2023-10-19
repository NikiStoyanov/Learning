function tripleOfLatinLetters(n) {
    let num = n;

    for (let i = 0; i < n; i++) {
        let result = '';
        result += String.fromCharCode(97 + i);
        for (let j = 0; j < n; j++) {
            
            result += String.fromCharCode(97 + j);
            for (let k = 0; k < n; k++) {
                result += String.fromCharCode(97 + k);
                console.log(result);
                result = result.substring(0, 2);
            }
            result = result.substring(0, 1);;
        }   
        
    }
} 

tripleOfLatinLetters(9);