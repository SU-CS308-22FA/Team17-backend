import React from 'react'
import { Link } from 'react-router-dom'
import cssClass from "./comments.css";
import hr from './HR/hr.js'

function Comments({ comments }) {
    return (

        <div className={cssClass.Comment}>
            <hr />
            <div className={cssClass.Detail}>
                <strong>Name:</strong> {comments.name}
            </div>
            <div className={cssClass.Body}>
                <strong>Comment:</strong> {comments.body}
            </div>
            <div className={cssClass.Detail}>
                <strong>On:</strong>{" "}
                {new Date(comments.published_on).toDateString()}
            </div>
        </div>
    )
}

export default Comments
