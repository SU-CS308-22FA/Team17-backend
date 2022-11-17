import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import cssClass from "./card.css";

function Posts({ post }) {
    const articleClass = [
        cssClass.center,
        cssClass.mw5,
        cssClass.mw6Ns,
        cssClass.br3,
        cssClass.hidden,
        cssClass.ba,
        cssClass.bBlack10,
        cssClass.mv4
    ];

    const h1Class = [
        cssClass.f4,
        cssClass.bgNearWhite,
        cssClass.br3,
        cssClass.brTop,
        cssClass.Black60,
        cssClass.mv0,
        cssClass.pv2,
        cssClass.ph3,
        cssClass.title
    ];

    const articleDivClass = [cssClass.pa3, cssClass.bt, cssClass.bBlack10];

    const articlePClass = [
        cssClass.f6,
        cssClass.f5Ns,
        cssClass.lhCopy,
        cssClass.measure
    ];

    return (
        <Card className={cssClass.card}  style= {{ background: "#004700" }} >

            <Card.Body style= {{ color: "white" }}>

                <Card.Title as="div">
                    <strong>{post.title}</strong>
                </Card.Title>

                <Card.Text as="p">
                    <p>Number of comments: {post.total_comments}</p>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Posts

