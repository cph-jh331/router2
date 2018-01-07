import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RepoStore from '../facades/repoStore';

//const match = this.props.match;

export default class Repositories extends Component {
    constructor(props) {
        super(props);
        this.state = { repos: [] };
    }

    /*
    eksempel brug af async:
    async componentWillMount(){
        let repos = await AsyncRepoStore.getRepos();
        this.setState({repos});
    }
    */

    componentWillMount() {
        /*uden facade
        fetch("https://api.github.com/orgs/Cphdat3sem2017f/repos",
            { method: "GET" })
            .then(response => response.json())
            .then(repos => {
                this.setState({ repos });
            });
        */
        RepoStore.getRepos(repos => {
            this.setState({ repos });
        });
    }

    render() {
        return (
            <div>
                <h2>Hello from alle repos</h2>
                <ul>
                    {this.state.repos.map(repo => {
                        return <li key={repo.name}>{repo.name} - <Link to={"/repository/" + repo.name}>Details</Link></li>
                    })}
                </ul>
            </div>
        )
    }
}