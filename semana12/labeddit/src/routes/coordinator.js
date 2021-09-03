export const goToLogin = (history) => {
    history.push("/login")
}

export const goToSignUp = (history) => {
    history.push("/signup")
}

export const goToFeedPage = (history) => {
    history.push("/")
    window.location.reload()
}

export const goToPostPage = (history, id) => {
    history.push(`/post/${id}`)
}