import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTopics } from '../actions/index';

class Topic extends Component {
    componentWillMount() {
        this.props.fetchTopics();
    }

    renderTopics() {
        const { topics } = this.props.topics;
        
        if (!topics.data) {
            return <div>Loading...</div>
        }

        return topics.data.map((topic) => {
            return (
                <div className="list-group-item" key={topic.id}>
                    <h4>{topic.name}</h4>
                    <p>{topic.description}</p>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="list-group">
                {this.renderTopics()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { topics: state.topics };
}

export default connect(mapStateToProps, { fetchTopics })(Topic);
