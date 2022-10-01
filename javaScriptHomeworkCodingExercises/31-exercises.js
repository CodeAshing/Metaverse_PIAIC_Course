let usernames = [];

if (!usernames.length)
    console.log(`We need to find some users!`)
else
    usernames.map((username) => {
        if (username === `admin`)
            console.log(`Hello admin, would you like to see a status report?`)
        else
            console.log(`Hello ${username}, thank you for logging in again.`)
    })