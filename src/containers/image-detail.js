import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchImage } from '../actions/index';
import CommentBox from '../components/comment-box';

class ImageDetail extends Component {
    componentWillMount() {
        this.props.fetchImage(this.props.params.id);
    }

    renderContent() {
        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4>{this.props.image.title}</h4>
                    </div>
                    <div className="panel-body">
                        {this.renderImage()}
                    </div>
                    <div className="panel-footer">
                        <h5>{this.props.image.description}</h5>
                    </div>
                </div>
                <h3>Comments</h3>
                {this.renderComments()}
            </div>
        )
    }

    renderImage() {
        if (this.props.image.animated) {
            return (
                <video preload="auto" autoPlay="autoplay" loop="loop" webkit-playsinline>
                    <source src={this.props.image.mp4} type="video/mp4"></source>
                </video>
            );
        } else {
          return <img src={this.props.image.link} />
        }
    }

    renderComments() {
        const comments = this.props.image.comment_preview;
        if (!comments) {
            return null;
        }

        return <CommentBox comments={comments}/>
    }

    render() {
        if (!this.props.image) {
            return <div>Loading...</div>
        }

        return (
            <div className="image-detail">
                {this.renderContent()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { image: state.images.single };
}

export default connect(mapStateToProps, { fetchImage })(ImageDetail);
