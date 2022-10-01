let favorite_fruits = ['Banana', 'Apple', 'Mango'], fruitsList = ['Banana', 'Apple', 'Mango', 'peach']

fruitsList.map((fruit) => {
    if (favorite_fruits.includes(fruit))
        console.log(` You really like  ${fruit}`)
})