import useProtectedPage from "../../hooks/useProtectedPage";
import {CardContainer, MainContainer, PostsContainer, RegisterPost} from "./styled";
import {Typography} from "@material-ui/core";
import Posts from "../../components/Posts/Posts";
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

                    <Posts
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