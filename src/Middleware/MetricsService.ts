import {IMetric} from "../Models/IMetric"
import {IGitCommit} from "../Models/IGitCommit"
import config from '../config.json';
import {GetAsync} from "../ApiCall/GetAsync";

export async function MetricService(cardId: string, repo: string) : Promise<IMetric[]> {
    const gitConfig = config.GitHubApi;
    gitConfig.url += cardId;

    const res = await GetAsync(gitConfig);

    var stringified = JSON.stringify(res);
    let obj: IGitCommit = JSON.parse(stringified);

    console.log("after call" + obj.mergeCommitId);

    const result : IMetric[] = [{
        sha : obj.PRcommits[0].sha, date : obj.PRcommits[0].date
    },
        {sha : obj.mergeCommitId, date : "two"}];
    return result;
}
