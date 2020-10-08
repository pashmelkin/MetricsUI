export class Metric {
    title: string;
    sha: string;
    firstDate: Date;
    deployDate: Date;
    dateDiff: Date;

    constructor(title: string, sha: string, firstDate: Date, deployDate: Date, dateDiff: Date) {
        this.title = title;
        this.sha = sha;
        this.firstDate = firstDate;
        this.deployDate = deployDate;
        this.dateDiff = dateDiff;
    }
}
