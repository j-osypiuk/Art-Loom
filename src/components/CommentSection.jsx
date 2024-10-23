import React, {useState} from "react";
import Comment from "../components/Comment.jsx"
import LoadingSpinner from "./LoadingSpinner.jsx";
import {getRandomDarkColor} from "../utils/colors.js";

const CommentSection = ({props}) => {

    const [comments, setComments] = useState([
        {
            id: 1,
            userId: 1,
            fullName: "Marlyn Davis",
            nickName: "CrazyMarlynnnn",
            publishedDate: "2015-09-15",
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat lacus non tortor tristique aliquam. Maecenas convallis varius nulla, varius mollis tellus mollis vitae. Suspendisse potenti. Suspendisse suscipit ante a est cursus gravida. Nulla facilisis ornare auctor. Suspendisse a scelerisque purus, vel suscipit eros. Suspendisse viverra tellus vitae ligula venenatis feugiat et a turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat lacus non tortor tristique aliquam."
        },
        {
            id: 2,
            userId: 2,
            fullName: "Paul McGeen",
            nickName: "PG-89",
            publishedDate: "2024-10-19",
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 😊. Vivamus consequat lacus non tortor tristique aliquam. Maecenas convallis varius nulla, varius mollis tellus mollis vitae. Suspendisse potenti."
        },
        {
            id: 3,
            userId: 3,
            fullName: "Steve Wazowski",
            nickName: "Sevvee",
            publishedDate: "2024-03-01",
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        }
    ]);

    return (
        <div className="cmp-comment-section">
            <h3 className="cmp-comment-section__header">Comments</h3>
            {
                comments.map((comment) => <Comment key={comment.id} props={comment} />)
            }
            <div className="cmp-comment-section__loading-wrap">
                <LoadingSpinner size={4} width={0.8} color={getRandomDarkColor()}/>
            </div>
        </div>
    )
}

export default CommentSection;