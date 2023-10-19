function studentInfo(studentName, studentAge, averageGrade){
    let name = studentName;
    let age = Number(studentAge);
    let grade = Number(averageGrade);

    console.log(`Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`);
}

studentInfo('Nikolay', '15', '6.00');