export class Metric {
    title: string;
    sha: string;
    firstDate: string;
    deployDate: string;


    constructor(title: string, sha: string, firstDate: string, deployDate: string) {
        this.title = title;
        this.sha = sha;
        this.firstDate = firstDate;
        this.deployDate = deployDate;
    }
}
