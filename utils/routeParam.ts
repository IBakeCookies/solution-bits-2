export function getSingleRouteParam(params: string | string[]): string {
    if (Array.isArray(params)) {
        return params.at(0) || '';
    }

    return params;
}