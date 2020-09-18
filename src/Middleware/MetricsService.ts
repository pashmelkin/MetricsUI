import {IMetric} from "../Models/IMetric";
import config from '../config.json';
import {GetAsync} from "../ApiCall/GetAsync";

export async function MetricService(cardId: string, repo: string) : Promise<IMetric[]> {
    console.log( 'cardId:', cardId, 'repo: ', repo);
    const apiConfig = config.PokemonApi;

    const res = await GetAsync(apiConfig);
    const obj = JSON.parse(res);
    console.log("res" + obj);

    const result : IMetric[] = [{
        commit : "one", date : "two"
    },
        {commit : "one", date : "two"}];
    return result;
}
