export const BASE_URL = "https://labeddit.herokuapp.com"

export const HEADERS = {
    headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("token")
    }
}