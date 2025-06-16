//for using camel case instead of snake case, which is more common in JavaScript
interface RepoData {
    name: string;
    description: string;
    language: string | null;
    url: string;
    createdAt: Date;
    updatedAt: Date;
}

//only the stuff from Github that I care about
interface GitHubRepo {
    name: string;
    description: string;
    language: string | null;
    html_url: string;
    created_at: string;
    updated_at: string;
}

interface Image {
    image: string;
    alt: string;
}

export type {RepoData, GitHubRepo, Image};