import useProtectedPage from "../../hooks/useProtectedPage";
import {CardContainer, MainContainer, PostsContainer, RegisterPost} from "./styled";
import {Typography} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination'
import Posts from "../../components/Posts/Posts";
import React, {useContext} from "react";
import GlobalContext from "../../global/GlobalContext";
import FeedForm from "./FeedForm";
import Loading from "../../components/Loading/Loading";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
        display: "flex",
        justifyContent: "center",
        width: "100%",
        margin: "30px auto"
    },
}));

const FeedPage = () => {
    useProtectedPage()
    const {states, setters} = useContext(GlobalContext)
    const classes = useStyles();

    const posts = states && states.posts

    const handleChange = (event, value) => {
        setters.setIsLoading(true)
        setters.setPage(value);
        setTimeout(() => setters.setIsLoading(false), 300)
    };

    return (
        <MainContainer>
            {states.isLoading
                ? <Loading/>
                : <>
                    <PostsContainer>
                        <CardContainer>
                            {states.isLoading
                                ? <Loading/>
                                : <Posts
                                    posts={posts}
                                />
                            }
                        </CardContainer>

                        <RegisterPost>
                            <Typography variant={"h4"}>
                                Cadastrar Post:
                            </Typography>
                            <FeedForm/>
                        </RegisterPost>

                    </PostsContainer>

                    <div className={classes.root}>
                        <Pagination count={posts.length} onChange={handleChange} variant="outlined" color="primary"/>
                    </div>
                </>
            }
        </MainContainer>
    )
}

export default FeedPage