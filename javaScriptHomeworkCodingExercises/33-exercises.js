let ordinalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
ordinalNumbers.map((ordinalNumber) => {
    if ([1, 2, 3].includes(ordinalNumber))
        ordinalNumber === 1 ?
            console.log(`1st`) :
            ordinalNumber === 2 ?
                console.log(`2nd`) :
                console.log(`3rd`)
    else
        console.log(`${ordinalNumber}th`)
})