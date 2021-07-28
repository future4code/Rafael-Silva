// import axios from "axios";
//
// //Headers
// const headers = {
//     headers: {
//         Authorization: "rafael-nascimento-silva"
//     }
// }
//
// //REQUESTS
// export const getAllUsers = async () => {
//     const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
//
//     let response
//     // axios.get(url, headers)
//     //     .then((response) => {
//     //         this.setState({
//     //             users: response.data
//     //         })
//     //     }).catch((exception) => {
//     //     alert(`Ooops! Ocorreu um erro. \n${exception.response.data.message}`)
//     // })
//
//     try {
//          response = await axios.get(url, headers)
//
//         //
//         // this.setState({
//         //     users: response.data
//         // })
//     } catch (e) {
//         alert(`Ooops! Ocorreu um erro. \n${e.response.data.message}`)
//     }
//
//     // return response.data
// }