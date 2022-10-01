let current_users = ['admin', 'asharib90', 'arsalan90', 'israr90', 'fahad90'], new_users = ['asharib90', 'arsalan90', 'emad90', 'talha90', 'bilal90'];

new_users.map((username) => {
    if (current_users.includes(username.toLowerCase()))
        console.log(`Person will need to enter a new username`)
        else
        console.log(`username is available.`)
    })