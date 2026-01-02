const multTable = [];

let value = prompt("What is the maximum number you want the multiplication table to have multiply by itself")
value = Number(value);

for (let i = 1; i <= value; i ++) {
    tempTable = [];
    for (let j = 1; j <= value; j++) {
    tempTable.push(i * j);   
    }
    multTable.push(tempTable);
}

console.table(multTable);

/*this project was to create a multiplication table
once again, I think console.log would look better
(table was instruction) since Index header is bound
to confuse some people */