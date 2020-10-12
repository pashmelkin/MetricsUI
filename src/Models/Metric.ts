export class Metric {
    title: string;
    sha: string;
    firstDate: Date;
    deployDate: Date;
    dateDiff: number;

    constructor(title: string, sha: string, firstDate: Date, deployDate: Date, dateDiff: number) {
        this.title = title;
        this.sha = sha;
        this.firstDate = firstDate;
        this.deployDate = deployDate;
        this.dateDiff = dateDiff;
    }
}
