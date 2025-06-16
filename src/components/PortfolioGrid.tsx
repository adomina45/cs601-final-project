import React from 'react';
import type { RepoData } from '../types/types';

function PortfolioGrid({ data }: {data: RepoData[]}) {
    return(
    <main id="main">
        <h2 className="projects" id="projectLabel">Projects</h2>
        {data.length ? 
            <div className="grid" id="grid">
            {data.map((repo, index) => (
                <div className="card" id={`card-${repo.name}`} key={index}>
                    <h3 id={`card-title-${repo.name}`}>
                        <a href={repo.url} data-type="external" id={`card-link-${repo.name}`}>{repo.name}</a>
                    </h3>
                    <p id={`card-description-${repo.name}`}>{repo.description}</p>
                    {repo.language ? <p id={`card-language-${repo.name}`}><b>Programming Language</b>: {repo.language}</p> : <p>No Programming Language Found</p>}
                    <p id={`card-date-created-${repo.name}`}><b>Created At</b>: {repo.createdAt.toString()}</p>
                    <p id={`card-date-updated-${repo.name}`}><b>Updated At</b>: {repo.updatedAt.toString()}</p>
                </div>
            ))}
            </div> : (<h3 style = {{'textAlign': 'center'}}>Data Loading</h3>)}
    </main>
    )
}

export default PortfolioGrid;