import React, {useState} from "react"
import {PostFormContainer, InputsContainer} from "./styled"
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import useForm from '../../hooks/useForm'
import {CircularProgress} from "@material-ui/core";
import {createComment, createPost} from "../../services/post";

const PostCommentForm = (props) => {
    const [form, onChange, clear] = useForm({title: "", body: ""})
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (event) => {
        event.preventDefault()
        createComment(form, props.postId, clear, setIsLoading)
    }

    return (
        <PostFormContainer>
            <form onSubmit={onSubmitForm}>
                <InputsContainer>

                    <TextField
                        name={"body"}
                        value={form.body}
                        onChange={onChange}
                        label={"Escreva seu comentário"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        multiline
                        rows={4}
                    />
                </InputsContainer>
                <Button
                    type={"submit"}
                    fullWidth
                    variant={"contained"}
                    color={"primary"}
                >
                    {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Comentar</>}
                </Button>
            </form>
        </PostFormContainer>
    )
}

export default PostCommentForm