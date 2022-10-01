let oldPersonsList = ["Farhan Ahmed", "Salman Ali", "Alina Baber"]

console.log(`Salman Ali is not coming\n`)

let modifiedPersonsList = oldPersonsList.map((person) => {
    if (person !== "Salman Ali")
        return person
    return "Fahad Ahmed"
})

modifiedPersonsList.map((person) => console.log(`Hey ${person}, would you like be at my place for dinner?`))

console.log(`\nUpdate!!! Hey guest I just noticed that we have some extra space on table so I'm intiviting other members too\n`)


modifiedPersonsList.unshift('Israr')

modifiedPersonsList.splice(2, 0, 'Bilal');

modifiedPersonsList.push('EMad');


modifiedPersonsList.map((person) => console.log(`Hey ${person}, would you like be at my place for dinner?`))