export class GitCommit {
    title: string;
    sha: string;
    date: string;

    constructor(title: string, sha: string, date: string) {
        this.title = title;
        this.sha = sha;
        this.date = date;
    }
}
