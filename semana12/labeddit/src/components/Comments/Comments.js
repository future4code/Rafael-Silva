import {Box, Card, CardActions, CardContent, CardHeader, IconButton, makeStyles, Typography} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import useRequestData from "../../hooks/useRequestData";

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

const Comments = (props) => {
    const classes = useStyles();
    const [comments] = useRequestData(`/posts/${props.postId}/comments`)

    return (
        <>
            {comments && comments.map((comment) => {
                return (
                    <div key={comment.id}>
                        <Card className={classes.root}>
                            <CardHeader
                                className={classes.cardHeader}
                                title={comment.username}
                            />

                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {comment.body}
                                </Typography>
                            </CardContent>

                            <CardActions className={classes.cardFooter} disableSpacing>
                                <Box className={classes.actions}>
                                    <IconButton aria-label="like">
                                        <ThumbUpAltIcon/>
                                    </IconButton>

                                    {!comment.userSum ? <p className={classes.votes}>0</p> :
                                        <p className={classes.votes}>{comment.userSum}</p>}

                                    <IconButton aria-label="deslike">
                                        <ThumbDownIcon/>
                                    </IconButton>

                                </Box>


                            </CardActions>
                        </Card>
                    </div>
                )
            })
            }
        </>
    )
}

export default Comments