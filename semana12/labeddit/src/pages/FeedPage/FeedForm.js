import React, {useState} from "react"
import {FeedFormContainer, InputsContainer} from "./styled"
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import useForm from '../../hooks/useForm'
import {CircularProgress} from "@material-ui/core";
import {createPost} from "../../services/post";

const FeedForm = () => {
    const [form, onChange, clear] = useForm({title: "", body: ""})
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (event) => {
        event.preventDefault()
        createPost(form, clear, setIsLoading)
    }

    return (
        <FeedFormContainer>
            <form onSubmit={onSubmitForm}>
                <InputsContainer>
                    <TextField
                        name={"title"}
                        value={form.title}
                        onChange={onChange}
                        label={"Título do Post"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"text"}
                    />
                    <TextField
                        name={"body"}
                        value={form.body}
                        onChange={onChange}
                        label={"Conteúdo do Post"}
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
                    {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Criar Post</>}
                </Button>
            </form>
        </FeedFormContainer>
    )
}

export default FeedForm