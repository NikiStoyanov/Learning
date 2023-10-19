function tradeCommissions(input) {
    let town = input.shift();
    let sails = Number(input.shift());

    if (sails < 0){
        console.log("error");
    } else if (sails >= 0 && sails <= 500) {
        switch (town) {
            case "Sofia":
                    console.log(((sails * 5) / 100).toFixed(2));
                break;
            case "Varna": 
                   console.log(((sails * 4.5) / 100).toFixed(2)); 
                break;
            case "Plovdiv":
                    console.log(((sails * 5.5) / 100).toFixed(2)); 
                break;
            default:
                console.log("error");
                break;
        }
    } else if (sails <= 1000) {
        switch (town) {
            case "Sofia":
                    console.log(((sails * 7) / 100).toFixed(2));
                break;
            case "Varna": 
                   console.log(((sails * 7.5) / 100).toFixed(2)); 
                break;
            case "Plovdiv":
                    console.log(((sails * 8) / 100).toFixed(2)); 
                break;
            default:
                console.log("error");
                break;
        }
    } else if (sails <= 10000) {
        switch (town) {
            case "Sofia":
                    console.log(((sails * 8) / 100).toFixed(2));
                break;
            case "Varna": 
                   console.log(((sails * 10) / 100).toFixed(2)); 
                break;
            case "Plovdiv":
                    console.log(((sails * 12) / 100).toFixed(2)); 
                break;
            default:
                console.log("error");
                break;
        }
    } else if (sails > 10000) {
        switch (town) {
            case "Sofia":
                    console.log(((sails * 12) / 100).toFixed(2));
                break;
            case "Varna": 
                   console.log(((sails * 13) / 100).toFixed(2)); 
                break;
            case "Plovdiv":
                    console.log(((sails * 14.5) / 100).toFixed(2)); 
                break;
            default:
                console.log("error");
                break;
        }
    } else {
        console.log("error");
    }
} 

tradeCommissions(["Sofia", "-20"]);