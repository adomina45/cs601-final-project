import { useEffect, useState } from 'react';
import '../styles/main.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PortfolioGrid from '../components/PortfolioGrid.tsx';
import type { GitHubRepo, RepoData } from '../types/types.ts';

//React component for the photos page
function Portfolio() {
    //State of the repo data
    const [repoData, setRepoData] = useState<RepoData[]>([]);
     //State of the error
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const getRepoData = async () => {
            // get api data from github
            try {
                const resp = await fetch("https://api.github.com/users/adomina45/repos", {
                    method: "GET",
                });
                // get json response
                const data = await resp.json();
                // place the relevant data into the repo data state
                setRepoData(data.map((repo: GitHubRepo) => {
                    return {
                        name: repo.name,
                        description: repo.description,
                        language: repo.language,
                        url: repo.html_url,
                        createdAt: new Date(repo.created_at),
                        updatedAt: new Date(repo.updated_at)
                    } as RepoData;
                }));
            // if it fails, store the error
            } catch (err) {
                setError(err instanceof Error ? err.message : String(err));
            }
        };

        // call the function to get repo data
        getRepoData();
        // dependency array is empty, this will only fire on mount
    }, []);
    return (
        <div className='page-container' id="portfolio-page">
            <Header />
            <div className="content" id="portfolio-page-content">
                {error ? <h3 style={{ textAlign: "center", color: "red" }} id="portfolio-page-error">{error}</h3> :<PortfolioGrid data={repoData} /> }
            </div>
            <Footer />
        </div>
    );
}

export default Portfolio;