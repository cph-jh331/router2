import React, { Component } from 'react';
import RepoStore from '../facades/repoStore';
import { Redirect } from 'react-router-dom';
export default class Repository extends Component {
    constructor(props) {
        super(props);
        this.state = { repo: [] };
    }

    componentWillMount() {
        let name = this.props.match.params.id;
        RepoStore.getRepositoryFromName(name, repo => {
            this.setState({ repo });
        });
    }

    render() {
        const repo = this.state.repo;
        if (!repo) {
            return <Redirect to="/" />
        }
        return (
            <div>
                <div>
                    <h2>Fullname: {repo.full_name}</h2>
                    <h2>Size: {repo.size}</h2>
                </div>
            </div>
        )
    }
}