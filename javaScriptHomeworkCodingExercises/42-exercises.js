let show_magicians = (magicians) => magicians.map((magician) => console.log(`${magician} is a magicians`)), magicians = ['israr', 'fahad', 'ahmed']


const make_great = (magicians =>
    magicians.map((magician) =>
        `Great ${magician}`
    )
)

magicians = make_great(magicians)

show_magicians(magicians)
