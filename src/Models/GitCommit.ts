export class GitCommit {
    title: string;
    sha: string;
    date: Date;

    constructor(title: string, sha: string, date: Date) {
        this.title = title;
        this.sha = sha;
        this.date = date;
    }
}
