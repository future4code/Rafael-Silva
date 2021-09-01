import useProtectedPage from "../../hooks/useProtectedPage";
import {CardContainer, MainContainer, PostsContainer, RegisterPost} from "./styled";
import {Grid, Typography} from "@material-ui/core";
import Post from "../../components/Post/Post";
import React, {useContext} from "react";
import GlobalContext from "../../global/GlobalContext";
import FeedForm from "./FeedForm";

const FeedPage = () => {
    useProtectedPage()
    const {states} = useContext(GlobalContext)

    const posts = states && states.posts

    return (
        <MainContainer>
            {posts &&
            <PostsContainer>
                <CardContainer>

                    <Post
                        posts={posts}
                    />

                </CardContainer>

                <RegisterPost>
                    <Typography variant={"h4"}>
                        Cadastrar Post:
                    </Typography>
                    <FeedForm/>
                </RegisterPost>

            </PostsContainer>
            }
        </MainContainer>
    )
}

export default FeedPage