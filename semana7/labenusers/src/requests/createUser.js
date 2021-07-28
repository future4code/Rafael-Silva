// import axios from "axios";
// import {getAllUsers} from "./getAllUsers";
// //Headers
// const headers = {
//     headers: {
//         Authorization: "rafael-nascimento-silva"
//     }
// }
//
// //REQUESTS
// export const createUser = async (userName, userEmail) => {
//     const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
//
//     const body = {
//         name: userName,
//         email: userEmail
//     }
//
//     let response
//     // axios.post(url, body, headers)
//     //     .then((response) => {
//     //         alert("Cadastro realizado com sucesso!!")
//     //         this.setState({
//     //             clickListUsers: !this.state.clickListUsers,
//     //             inputName: "",
//     //             inputEmail: ""
//     //         })
//     //         this.getAllUsers()
//     //     }).catch((exception) => {
//     //     alert(`Ooops! Ocorreu um erro. \n${exception.response.data.message}`)
//     // })
//
//     try {
//         await axios.post(url, body, headers)
//
//         alert("Cadastro realizado com sucesso!!")
//
//         await getAllUsers()
//     } catch (e) {
//         alert(`Ooops! Ocorreu um erro. \n${e.response.data.message}`)
//     }
// }