import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import cssClass from "./card.css";

function Posts({ post }) {
    return (
        <Card className={cssClass.card}  style= {{ background: "#004700" }} >
                <Card.Body style= {{ color: "white" }}>

                    <Card.Title as="div">
                        <strong>{post.title}</strong>
                    </Card.Title>

                    <Card.Text >
                        <p class="card-text"><small class="text-muted">Number of comments: {post.total_comments}</small></p>
                    </Card.Text>

                    <Link to={`/post/${post.slug}`}>
                        <Card.Text as="div" style= {{ color: "white" }}>
                            <strong>Read More</strong>
                        </Card.Text>
                    </Link>

                </Card.Body>
        </Card>
    )
}

export default Posts

