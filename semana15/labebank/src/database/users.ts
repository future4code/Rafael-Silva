import { user } from "./types";


// let today = new Date();
// const dd = String(today.getDate()).padStart(2, "0");
// const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
// const yyyy = today.getFullYear();

// const newDate:string = `"${dd}/${mm}/${yyyy}"`;
export let users: user[] = [
    {
        name: "Rafael",
        birthDate: "12/11/1998",
        document: 12343232110,
        balance: 0
    }
];
