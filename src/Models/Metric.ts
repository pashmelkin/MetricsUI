export class Metric {
    title: string;
    sha: string;
    firstDate: string;
    deployDate: string;
    dateDiff: string;


    constructor(title: string, sha: string, firstDate: string, deployDate: string, dateDiff: string) {
        this.title = title;
        this.sha = sha;
        this.firstDate = firstDate;
        this.deployDate = deployDate;
        this.dateDiff = dateDiff;
    }
}
