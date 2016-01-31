import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchImages } from '../actions/index';
import ImagePreview from './image-preview';

class Topic extends Component {
    componentWillMount() {
        this.props.fetchImages(this.props.params.id)
    }

    renderList() {
        const { images } = this.props;

        return images.slice(0, 21).map((image) => {
            return <ImagePreview key={image.id} {...image}/>
        });

    }

    render() {

        return (
            <div>
                {this.renderList()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { images: state.images.all }
}
export default connect(mapStateToProps, { fetchImages })(Topic);
