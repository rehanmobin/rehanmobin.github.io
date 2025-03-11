const githubUsername = "rehanmobin";
const createGitConnectedURL = (username) => `https://gitconnected.com/v1/portfolio/${username}`;
const gitRepos = (username) => `https://api.github.com/users/${username}/repos?per_page=100&sort=stars`;

export const URLs = {
    gitConnected: createGitConnectedURL(githubUsername),
    gitRepo: gitRepos(githubUsername),
};
