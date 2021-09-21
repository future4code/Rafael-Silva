const { red, green } = require("./utils/colors");
const read = require("./database/read");
const update = require("./database/update");

// Exercicio 3:

const main = async () => {
    const [, , newTask] = process.argv;

    let newList = await read();

    if (newTask) {
        console.log(green("Tarefa adicionada com sucesso!\n"));
        await update([...newList, newTask]);
        newList = await read();
    }

    console.log(green(newList), "\n");
};

main();
