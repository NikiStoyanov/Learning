function cats(input) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        };

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    let cats = [];
    
    for (const catInfo of input) {
        var catInformation = catInfo.split(' ');

        let cat = new Cat(catInformation[0], catInformation[1]);

        cats.push(cat);
    }

    for (const cat of cats) {
        cat.meow();
    }
}

cats(['Mellow 2', 'Tom 5']);