const fs = require('fs');


const read = async () => {
    const newList = await fs.readFileSync("./tasks.txt").toString().split(",")
    
    return newList
}

module.exports = read