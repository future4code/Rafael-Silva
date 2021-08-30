import useProtectedPage from "../../hooks/useProtectedPage";

const FeedPage = () => {
    useProtectedPage()

    return (
        <h1>FeedPage</h1>
    )
}

export default FeedPage