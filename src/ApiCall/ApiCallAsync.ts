
export function ApiCallAsync(config: { url: string; port: string; route: string; }, limit : number): Promise<IVegetable[]> {
    const apiUrl = config.url + (config.port === "" ? "" : ":" + config.port) + "/" + config.route;

    return fetch(apiUrl)
        .then(response => response.json())
        .then(data => data.results.slice(0, limit))
        .catch(() => console.log("Can’t access  response from " + apiUrl))
}
