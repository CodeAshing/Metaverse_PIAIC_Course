let oldPersonsList = ["Farhan Ahmed", "Salman Ali", "Alina Baber"]

console.log(`Salman Ali is not coming`)

let modifiedPersonsList = oldPersonsList.map((person) => {
    if (person !== "Salman Ali")
        return person
    return "Fahad Ahmed"
})

modifiedPersonsList.map((person) => console.log(`Hey ${person}, would you like be at my place for dinner?`))