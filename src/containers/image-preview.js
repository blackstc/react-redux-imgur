import React, { Component } from 'react';

class ImagePreview extends Component {
    image() {
        const link = `http://i.imgur.com/${this.props.id}h.jpg`;

        return <img src={link} />
    }
    render() {
        return (
            <div className="image-preview">
                {this.image()}
            </div>
        )
    }
}

export default ImagePreview;
