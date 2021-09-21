const fs = require('fs');


const read = async () => {
    const newList = await fs.readFileSync("./task.txt", data).toString().split("\n")
    
    return newList
}