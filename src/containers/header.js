import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTopics } from '../actions/index';
import { Link } from 'react-router';

class Header extends Component {
    componentWillMount() {
        this.props.fetchTopics();
    }

    renderTopics() {
        const { topics } = this.props;

        return topics.slice(0, 4).map((topic) => {
            return (
                <li key={topic.id}>
                    <Link activeClassName="active" to={"topics/" + topic.id}>
                        {topic.name}
                    </Link>
                </li>
            );
        });
    }

    render() {
        return (
            <nav className="navbar navbar-default header">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        Imgur Browser
                    </Link>
                    <ul className="nav navbar-nav navbar-right">
                        {this.renderTopics()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return { topics: state.topics.all };
}

export default connect(mapStateToProps, { fetchTopics })(Header);
