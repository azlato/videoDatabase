// A tiny wrapper around fetch(), borrowed from
// https://kentcdodds.com/blog/replace-axios-with-a-simple-custom-fetch-wrapper

interface IReturnData<D> {
    status: number,
    data: D,
    headers: HeadersInit,
    url: string;
}

export async function apiClient<D>(
    endpoint: string,
    { body, ...customConfig }: RequestInit = {}
): Promise<IReturnData<D>> {
    const config: RequestInit = {
        method: body ? 'POST' : 'GET',
        ...customConfig,
        headers: {
            ...customConfig.headers,
        }
    };

    if (body) {
        config.body = JSON.stringify(body);
    }

    let data
    try {
        const response = await window.fetch(endpoint, config);
        data = await response.json();

        if (response.ok) {
            // Return a result object similar to Axios
            return {
                status: response.status,
                data,
                headers: response.headers,
                url: response.url,
            };
        }

        throw new Error(response.statusText);
    } catch (error) {
        if (error instanceof Error) {
            return Promise.reject(error.message ? error.message : data);
        } else {
            return Promise.reject(error);
        }
    }
}

apiClient.get = function<D>(endpoint: string, customConfig: RequestInit = {}): Promise<IReturnData<D>> {
    return apiClient(endpoint, { ...customConfig, method: 'GET' })
};

apiClient.post = function<D>(endpoint: string, body: string, customConfig: RequestInit = {}): Promise<IReturnData<D>> {
    return apiClient(endpoint, { ...customConfig, body })
};
