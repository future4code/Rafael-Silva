import useProtectedPage from "../../hooks/useProtectedPage";
import {MainContainer, PostContainer} from "./styled";
import React from "react";
import {useParams} from "react-router-dom";
import Post from "../../components/Posts/Post";
import PostCommentForm from "./PostCommentForm";
import Comments from "../../components/Comments/Comments";

const PostPage = () => {
    useProtectedPage()
    const param = useParams()

    const postId = param && param.id

    return (
        <MainContainer>
            {postId &&
            <>
                <PostContainer>
                    <Post
                        postId={postId}
                    />
                </PostContainer>

                <hr/>
                <PostCommentForm
                    postId={postId}
                />

                <hr/>

                <Comments
                    postId={postId}
                />
            </>
            }
        </MainContainer>
    )
}

export default PostPage