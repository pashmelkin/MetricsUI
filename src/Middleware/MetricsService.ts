import {Metric} from "../Models/Metric"
import {IGitCommit} from "../Models/IGitCommit"
import config from '../config.json';
import {GetAsync} from "../ApiCall/GetAsync";
import {IDeployment} from "../Models/IDeployment";

const CalculateDateDiff = (date1: Date , date2: Date)  : number => {
    const firstCommitDate = (new Date(date1)).valueOf();
    const deployDate = (new Date(date2)).valueOf();
    return (deployDate - firstCommitDate);
};

export async function MetricService(cardId = "", repo: string) : Promise<Metric[]> {
    const gitPrConfig = config.GitHubAPIPr;
    const gitCardConfig = config.GitHubApiCard;
    gitCardConfig.url += cardId;

    const deploymentConfig = config.SumoApi;
    let result : Metric[] = [];

    const res = await GetAsync(cardId === ""?  gitPrConfig : gitCardConfig );

    let gitStr = JSON.stringify(res);
    let objGit: IGitCommit[] = JSON.parse(gitStr);
    const deployUrl = deploymentConfig.url;

    for (let obj of objGit)
    {
        deploymentConfig.url = deployUrl + obj.mergeCommitId;
        const deployment = await GetAsync(deploymentConfig);

        const deployStr = JSON.stringify(deployment);
        const objDeploy: IDeployment = JSON.parse(deployStr);
        const sha = objDeploy.commitSha;
        const shaDisplay = (sha == null || sha.toLowerCase().includes("deploy")) ?
            sha : sha.substring(0, 15);
        console.log(objDeploy);
        console.log("obj: ",  obj);
        const diffMs = (shaDisplay.toLowerCase().includes("not deployed"))? 0 : CalculateDateDiff(obj.commits[0].date, objDeploy.date);

        result.push(new Metric(obj.title, shaDisplay, obj.commits[0].date, objDeploy.date, diffMs));
    }

    return result;
}
