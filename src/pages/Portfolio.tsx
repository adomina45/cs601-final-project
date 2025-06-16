import React, { useEffect, useState } from 'react';
import '../styles/main.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PortfolioGrid from '../components/PortfolioGrid.tsx';
import type { GitHubRepo, RepoData } from '../types/types.ts';

function Portfolio() {
    const [repoData, setRepoData] = useState<RepoData[]>([]);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const getRepoData = async () => {
            try {
                const resp = await fetch("https://api.github.com/users/adomina45/repos", {
                    method: "GET",
                });
                const data = await resp.json();
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
            } catch (err) {
                setError(err instanceof Error ? err.message : String(err));
            }
        };

        getRepoData();
    }, []);
    return (
        <div>
            <Header />
            {error ? <h3>{error}</h3> :<PortfolioGrid data={repoData} /> }
            <Footer />
        </div>
    );
}

export default Portfolio;