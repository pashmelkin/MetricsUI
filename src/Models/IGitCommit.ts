import {IMetric} from './IMetric';

export interface IGitCommit{
    PRcommits : IMetric[],
    mergeCommitId: string;
}
