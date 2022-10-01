let show_magicians = (magicians) => magicians.map((magician) => console.log(`${magician} is a magicians`)), magicians = ['israr', 'fahad', 'ahmed']


const make_great = (magicians =>
    magicians.map((magician) =>
        `Great ${magician}`
    )
)

let modifiedMagicians = make_great(magicians)

show_magicians(modifiedMagicians)
show_magicians(magicians)
