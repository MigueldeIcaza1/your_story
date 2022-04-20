const baseURL = "https://localhost:44303/api";

export async function postStory(data) {
    const response = await fetch(`${baseURL}/story/PostStory`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    return await response.json();
}