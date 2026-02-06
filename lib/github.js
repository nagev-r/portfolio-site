import {Octokit} from "octokit";
import {projectMedia} from "./projectMedia";

// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
})

export async function listProjects() {
    try {
      const {data} = await octokit.request('GET /users/{username}/repos?sort=created_at&&per_page=4', {
        username: 'nagev-r',
        headers: {
            'X-GitHub-Api-Version': '2022-11-28' 
        }})

    const info = data.map(repo => ({
        id: repo.id,
        title: repo.name,
        media: projectMedia[repo.name] ?? [],
        description: repo.description,
        date: repo.created_at.slice(0,10),
        topics: repo.topics,
        html_url: repo.html_url,
    }))
    console.log(info);
    return (info);
    } catch (error) {
    console.error("Error fetching projects:", error);
    return [];    
    }
    
}