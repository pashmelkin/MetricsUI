export function GetAsync(config: { url: string; port: string; }): Promise<string> {
    const apiUrl = config.url + (config.port === "" ? "" : ":" + config.port) ;

    return fetch(apiUrl)
        .then(response => response.json())
        .catch(() => console.log("Can’t access  response from " + apiUrl))
}
