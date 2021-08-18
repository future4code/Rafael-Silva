
//ENDPOINTS
export const CONF_BASE_URL = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafael-nascimento-lovelace"
// export const CONF_TRIPS_URL = `${CONF_BASE_URL}/trips`
// export const CONF_TRIPS_DETAIL_URL = `${CONF_BASE_URL}/trip`
// export const CONF_CREATE_TRIP_URL = `${CONF_BASE_URL}/trips`

//HEADER

export const HEADERS = {
    auth: localStorage.getItem("token")
}
