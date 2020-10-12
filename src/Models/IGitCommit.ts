import {GitCommit} from "./GitCommit";

export interface IGitCommit{
    title: string,
    commits : GitCommit[],
    mergeCommitId: string;
}
