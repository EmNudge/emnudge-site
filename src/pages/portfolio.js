import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Table from '../components/table';
import usePortfolio from '../hooks/usePortfolio';

const Portfolio = () => {
	console.log( usePortfolio())
	const { games, narrations, animations } = usePortfolio();

	const gameRows = games.map(({ title, company, character }) => [title, company, character]);
	const animationRows = animations.map(({ title, animator, character }) => [title, animator, character]);
	const narrationRows = narrations.map(({ title, company }) => [title, company]);

	return (
		<Layout>
			<SEO title="Portfolio" />
			<h1>Past Roles</h1>
			<main>
				<h2>Games</h2>
				<Table head={['Game', 'Developer', 'Role']} rows={gameRows} />
				<br />
				<h2>Animations</h2>
				<Table head={['Animation', 'Animator', 'Role']} rows={animationRows} />
				<br />
				<h2>Narration</h2>
				<Table head={['Video', 'Company']} rows={narrationRows} />
			</main>
		</Layout>
	);
};

export default Portfolio;
