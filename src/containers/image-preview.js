import React, { Component } from 'react';

class ImagePreview extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hovering: false
        };
    }

    image() {
        const link = `http://i.imgur.com/${this.props.id}h.jpg`;

        return <img src={link} />
    }

    icon() {
        return <span className="glyphicon glyphicon-play"></span>
    }

    video() {
        return (
            <div>
                <video preload="auto" autoPlay="autoplay" loop="loop" webkit-playsinline>
                    <source src={this.props.mp4} type="video/mp4"></source>
                </video>
            </div>
        );
    }

    onMouseEnter() {
        this.setState({ hovering: true });
    }

    onMouseLeave() {
        this.setState({ hovering: false });
    }

    render() {
        return (
            <div
                className="image-preview"
                onMouseEnter={this.onMouseEnter.bind(this)}
                onMouseLeave={this.onMouseLeave.bind(this)}>
                {this.props.animated && this.state.hovering ? this.video() : this.image()}
                {this.props.animated && !this.state.hovering ? this.icon() : null}
            </div>
        )
    }
}

export default ImagePreview;
