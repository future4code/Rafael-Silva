//ENDPOINTS
export const CONF_BASE_URL = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafael-nascimento-lovelace"


//HEADER

export const HEADERS = {
    headers: {
        auth: localStorage.getItem("token")
    }
}