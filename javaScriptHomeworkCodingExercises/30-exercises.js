let usernames = ['admin', 'asharib90', 'arsalan90', 'israr90', 'fahad90'];

usernames.map((username) => {
    if (username === `admin`)
        console.log(`Hello admin, would you like to see a status report?`)
    else
        console.log(`Hello ${username}, thank you for logging in again.`)
})