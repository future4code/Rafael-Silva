// import axios from "axios";
// import {getAllUsers} from "./getAllUsers";
//
// //Headers
// const headers = {
//     headers: {
//         Authorization: "rafael-nascimento-silva"
//     }
// }
//
// export const removeUser = async (userId) => {
//     const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`
//
//     if (window.confirm("Tem certeza de que deseja deletar?\n")) {
//         // axios.delete(url, headers)
//         //     .then((response) => {
//         //         alert("Usuário removido com sucesso!!")
//         //
//         //         this.getAllUsers()
//         //     }).catch((exception) => {
//         //     alert(`Ooops! Ocorreu um erro. \n${exception.response.data.message}`)
//         // })
//
//         try {
//             await axios.delete(url, headers)
//
//             alert("Usuário removido com sucesso!!")
//
//             await getAllUsers()
//         } catch (e) {
//             alert(`Ooops! Ocorreu um erro. \n${e.response.data.message}`)
//         }
//     }
// }