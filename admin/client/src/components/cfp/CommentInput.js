import React from 'react'
import {
    CommentInputField
} from "./styles/Cfp"

function CommentInput(props){
    return (
        <CommentInputField
            placeholder = {props.placeholder}
            id = {props.id}
        >

        </CommentInputField>
    )
}

export default CommentInput
