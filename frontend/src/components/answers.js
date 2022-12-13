import React from 'react'
import { Link } from 'react-router-dom'
import cssClass from "./comments.css";
import hr from './HR/hr.js'

function Answers({ answers }) {
    return (

        <div className={cssClass.Comment}>
            <hr />
            <div className={cssClass.Body}>
                {answers.text}
            </div>
        </div>
    )
}

export default Answers
