import useProtectedPage from "../../hooks/useProtectedPage";

const PostPage = () => {
    useProtectedPage()

    return (
        <h1>PostPage</h1>
    )
}

export default PostPage