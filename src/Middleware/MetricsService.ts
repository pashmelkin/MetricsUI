import {IMetric} from "../Models/IMetric";

export function MetricService(cardId: string, repo: string) : IMetric[] {
    const result : IMetric[] = [{
        commit : "one", date : "two"
    },
        {commit : "one", date : "two"}]
    return result;
}
