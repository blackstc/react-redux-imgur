import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchImages } from '../actions/index';

class Topic extends Component {
    componentWillMount() {
        this.props.fetchImages(this.props.params.id)
    }

    renderList() {
        const { images } = this.props;

        return images.slice(0, 20).map((image) => {
            return <div>{image.title}</div>
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
