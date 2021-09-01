import {
    Box,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    IconButton,
    makeStyles,
    Typography
} from "@material-ui/core";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import {useContext} from "react";
import GlobalContext from "../../global/GlobalContext";

const useStyles = makeStyles(() => ({
    root: {
        width: "400px",
        margin: "20px",
        textAlign: "center",
        border: "1px solid #000",

    },
    cardHeader: {
        borderRadius: "8px",
        borderBottom: "1px solid #000"
    },
    cardFooter: {
        borderRadius: "8px",
        borderTop: "1px solid #000"
    },
    comments: {
        fontSize: "20px",
        fontWeight: "500",
        textAlign: "right",
        marginLeft: "15px"
    },
    actions: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
    },
    votes: {
        fontSize: "20px",
        fontWeight: "500",
        margin: "0 15px"
    }
}));

const Post = (props) => {
    const classes = useStyles();
    const {states} = useContext(GlobalContext)

    const post = states.posts.find((post) => post.id === props.postId)


    return (
        <>
            <Card className={classes.root}>
                <CardHeader
                    className={classes.cardHeader}
                    title={post && post.username}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {post && post.body}
                    </Typography>
                </CardContent>

                <CardActions className={classes.cardFooter} disableSpacing>
                    <Box className={classes.actions}>
                        <IconButton aria-label="like">
                            <ThumbUpAltIcon/>
                        </IconButton>

                        {post && !post.userSum ? <p className={classes.votes}>0</p> :
                            <p className={classes.votes}>{post && post.userSum}</p>}

                        <IconButton aria-label="deslike">
                            <ThumbDownIcon/>
                        </IconButton>

                    </Box>
                    {post && !post.commentCount
                        ? (
                            <>
                                <p className={classes.comments}>0</p>
                                <p className={classes.comments}>Comentarios</p>
                            </>
                        ) : (
                            <>
                                <p className={classes.comments}>{post && post.commentCount}</p>
                                <p className={classes.comments}>Comentarios</p>
                            </>
                        )}


                </CardActions>
            </Card>

        </>
    )
}

export default Post