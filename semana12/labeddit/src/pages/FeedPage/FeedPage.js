import useProtectedPage from "../../hooks/useProtectedPage";
import {CardContainer, MainContainer} from "./styled";
import {Grid} from "@material-ui/core";
import Post from "../../components/Post/Post";
import {useContext} from "react";
import GlobalContext from "../../global/GlobalContext";

const FeedPage = () => {
    useProtectedPage()
    const {states} = useContext(GlobalContext)

    const posts = states && states.posts

    return (
        <MainContainer m={5}>
            <Grid container>
                <Grid item xs={8}>
                    <CardContainer>

                        <Post
                            posts={posts}
                        />

                    </CardContainer>
                </Grid>

                <Grid item xs={4}>
                    <h1>FeedPage</h1>
                </Grid>
            </Grid>
        </MainContainer>
    )
}

export default FeedPage