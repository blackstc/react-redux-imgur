import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTopics } from '../actions/index';
import { Link } from 'react-router';

class Topics extends Component {
    componentWillMount() {
        this.props.fetchTopics();
    }

    renderTopics() {
        const { topics } = this.props;

        return topics.map((topic) => {
            return (
                <Link to={`topics/${topic.id}`} className="list-group-item" key={topic.id}>
                    <h4>{topic.name}</h4>
                    <p>{topic.description}</p>
                </Link>
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
    return { topics: state.topics.all };
}

export default connect(mapStateToProps, { fetchTopics })(Topics);
