import {IMetric} from "../Models/IMetric"
import {IGitCommit} from "../Models/IGitCommit"
import config from '../config.json';
import {GetAsync} from "../ApiCall/GetAsync";
import {IDeployment} from "../Models/IDeployment";

export async function MetricService(cardId: string, repo: string) : Promise<IMetric[]> {
    const gitConfig = config.GitHubApi;
    const deploymentConfig = config.SumoApi;
    gitConfig.url += cardId;

    const res = await GetAsync(gitConfig);

    let gitStr = JSON.stringify(res);
    console.log(gitStr);
    let objGit: IGitCommit = JSON.parse(gitStr);

    deploymentConfig.url += objGit.mergeCommitId;
    const deployment = await GetAsync(deploymentConfig);
    let deployStr = JSON.stringify(deployment);
    let objDeploy: IDeployment = JSON.parse(deployStr);

    const result : IMetric[] = [
        {
            sha : objGit.PRcommits[0].sha.substring(0,7),
            date : objGit.PRcommits[0].date
        },
        {   sha : objGit.mergeCommitId.substring(0,7),
            date : "two"
        },
        {   sha: objDeploy.commitSha.substring(0,7),
            date: objDeploy.date
        }];
    return result;
}
