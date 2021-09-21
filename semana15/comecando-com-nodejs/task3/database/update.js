const fs = require("fs");

const update = async (newList) => {
    const listStr = newList.toString().replace(/\,/g, "\n");

    await fs.writeFileSync("./tasks.txt", listStr);
};

module.exports = update;
