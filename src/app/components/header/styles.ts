import styled from 'styled-components';

export const Header = styled.header`
	background-color: #1c2c41;
	padding: 20px 12px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;

	.searchInput {
		width: 300px;
	}

	.label {
		position: absolute;
		bottom: 8px;
		left: 14px;

		a {
			color: #fff;
		}
	}
	
	@media screen and (max-width: 600px) {
		flex-direction: column;
		gap: 16px;

		.searchInput {
			width: calc(100vw - 24px)
		}

		.label {
			bottom: 5px;
		}
  }
`;
