export const makeApiCall = async (input: RequestInfo, init?: RequestInit) => {
    const apiResponse = await fetch(input, init);
    if (apiResponse.ok) {
        const parsedResponse = await apiResponse.json();
        return parsedResponse;
    }
    else {
        throw Error('This is probably a server error, and we will work on fixing it ^^');
    }
};