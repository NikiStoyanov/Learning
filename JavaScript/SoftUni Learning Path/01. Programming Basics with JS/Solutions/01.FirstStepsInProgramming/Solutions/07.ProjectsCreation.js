function projectsCreation(input) {
    let name = input.shift();
    let countOfProjects = Number(input.shift());

    console.log(`The architect ${name} will need ${countOfProjects * 3} hours to complete ${countOfProjects} project/s.`);
}

projectsCreation(["Sonya", "9"]);
