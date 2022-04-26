import { baseURL } from './urls';

export async function postStory(data) {
    const response = await fetch(`${baseURL}/story/PostStory`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    return await response.json();
}

// export async function getStories(request) {
//     const response = await fetch(`${baseURL}/story/GetStories?pageNo=${request.pageNo}&pageSize=${request.pageSize}`);
//     return await response.json();
// }