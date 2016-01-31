import React, { Component } from 'react';

// const CommentBox = (props) => {
//     return (
//         <ul>
//             {this.props}
//         </ul>
//     );
// }
class CommentBox extends Component {
    render() {
        return (
            <ul className="list-group">
                {this.renderComments()}
            </ul>
        );
    }

    renderComments() {
        return this.props.comments.map((comment) => {
            return (
                <li className="list-group-item comment-box" key={comment.id}>
                    <span className="badge">{comment.ups}</span>
                    <h5>{comment.author}</h5>
                    {comment.comment}
                </li>
            );
        });
    }
}

export default CommentBox;
