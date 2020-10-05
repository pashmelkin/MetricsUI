import {Metric} from "../Models/Metric"
import {IGitCommit} from "../Models/IGitCommit"
import config from '../config.json';
import {GetAsync} from "../ApiCall/GetAsync";
import {IDeployment} from "../Models/IDeployment";

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
        let deployStr = JSON.stringify(deployment);
        let objDeploy: IDeployment = JSON.parse(deployStr);
        console.log(objDeploy);
        console.log("obj: ",  obj);
        result.push(new Metric(obj.title, objDeploy.commitSha, obj.commits[0].date, objDeploy.date));
    }

    return result;
}
