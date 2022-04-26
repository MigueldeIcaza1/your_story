// const baseURL = "https://localhost:44303/api";

import { baseURL } from './urls';

export async function postContact(data) {
    const response = await fetch(`${baseURL}/contact/CreateContact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    return await response.json();
}