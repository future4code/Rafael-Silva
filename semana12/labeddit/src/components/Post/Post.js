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
import {goToPostPage} from "../../routes/coordinator";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles(() => ({
    root: {
        width: "400px",
        margin: "20px",
        textAlign: "center",
        border: "1px solid #000",
        cursor: "pointer",

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
    const history = useHistory()

    return (
        <>
            {
                props.posts.map((post) => {
                    return (
                        <div key={post.id}>
                            <Card className={classes.root} >
                                <CardHeader
                                    onClick={() => goToPostPage(history, post.id)}
                                    className={classes.cardHeader}
                                    title={post.username}
                                />
                                <CardContent
                                    onClick={() => goToPostPage(history, post.id)}
                                >
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {post.body}
                                    </Typography>
                                </CardContent>

                                <CardActions className={classes.cardFooter} disableSpacing>
                                    <Box className={classes.actions}>
                                        <IconButton aria-label="like">
                                            <ThumbUpAltIcon/>
                                        </IconButton>

                                        {!post.userSum ? <p className={classes.votes}>0</p> :
                                            <p className={classes.votes}>{post.userSum}</p>}

                                        <IconButton aria-label="deslike">
                                            <ThumbDownIcon/>
                                        </IconButton>

                                    </Box>
                                    {!post.commentCount
                                        ? (
                                            <>
                                                <p className={classes.comments}>0</p>
                                                <p className={classes.comments}>Comentarios</p>
                                            </>
                                        ) : (
                                            <>
                                                <p className={classes.comments}>{post.commentCount}</p>
                                                <p className={classes.comments}>Comentarios</p>
                                            </>
                                        )}


                                </CardActions>
                            </Card>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Post