//normal fetch som vi kender med cb.

//første gitUrl er fra git
const gitUrl = require('../../package.json').serverUrl;
//anden git url er fra egen server.
//const gitUrl = require('../../package.json').myServerUrl;

class RepoStore {
    constructor() {
        this._repos = null;
    }

    getRepos = (cb) => {
        if (this._repos) {
            console.log("using stored data");
            if (cb) {
                cb(this._repos);
            }
        } else {
            console.log("fetching data");
            fetch(gitUrl, { method: "GET" })
                .then(response => response.json())
                .then(data => {
                    this._repos = data;
                    cb(this._repos);
                });
        }
    }

    getRepositoryFromName = (name, cb) => {
        if (this._repos) {
            console.log("using stored data");
            if (cb) {
                this.filterByName(name, cb);
            }
        } else {
            console.log("fetching data");
            fetch(gitUrl, { method: "GET" })
                .then(response => response.json())
                .then(data => {
                    this._repos = data;
                    this.filterByName(name, cb);
                });
        }
    }

    filterByName = (name, cb) => {
        let filterResult = this._repos.filter(repo => {
            return repo.name.startsWith(name);
        });
        cb(filterResult[0]);
    }
}

export default new RepoStore();