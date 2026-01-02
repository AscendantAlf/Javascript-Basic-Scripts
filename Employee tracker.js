class Employee {
    constructor (firstName, lastname, tenure) {
        this.firstName = firstName;
        this.lastname = lastname;
        this.tenure = tenure;
    }
}

let Thomas = new Employee ("Thomas", "Doe", 5);
let Mike = new Employee ("Mike", "Stroganoff", 12);

newArray = [Thomas, Mike];

Employee.prototype.detail = function () {
    return this.firstName + " " + this.lastname + " has been with the company for" + " " + this.tenure + " years";
};

newArray.forEach((Employee) => {
    console.log(Employee.detail());
});

/* mostly simple. had to macke an "employee tracking" script that
would log how long each person has been with the company. the
instructions were to use prototype to create a function that
returned all of that info and then iterate over an array of two
employees with it */