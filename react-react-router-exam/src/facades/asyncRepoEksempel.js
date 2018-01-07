//første gitUrl er fra git
//const gitUrl = require('../../package.json').serverUrl;
//anden git url er fra egen server.
const gitUrl = require('../../package.json').myServerUrl;

class AsyncRepo {
    constructor() {
        this._repos = null;
    }

    //uden callback:
    getRepos = async () => {
        if (this._repos) {
            return this._repos;
        } else {
            let response = await fetch(gitUrl, { method: "GET" });
            let data = await response.json();
            this._repos = data;
            return this._repos;
        }
    }

    //med callback:
    getReposCB = async (cb) => {
        if (this._repos) {
            cb(this._repos);
        } else {
            let response = await fetch(gitUrl, { method: "GET" });
            let data = await response.json();
            this._repos = data;
            cb(this._repos);
        }
    }
}

export default new AsyncRepo();