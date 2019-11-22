import { useStaticQuery, graphql } from 'gatsby';

const usePortfolio = () => {
	const data = useStaticQuery(graphql`
		query {
			allPortfolioToml {
				nodes {
					animations {
						animator
						character
						title
					}
					games {
						character
						company
						title
					}
					narrations {
						company
						title
					}
				}
			}
		}
    `);

    return data.allPortfolioToml.nodes[0]
};

export default usePortfolio;
