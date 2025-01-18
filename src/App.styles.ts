import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	min-height: 100vh;
	display: grid;
	place-content: center;

	background-image: linear-gradient(to right, #000, #5e3c84, #8257e5, #000);
`;
export const Content = styled.div`
	width: 36rem;
	height: 46rem;
	display: flex;
	flex-direction: column;
	padding: 24px;

	@media (max-width: 578px) {
		width: 24rem;
	}
`;
export const Profile = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	height: 192px;
	gap: 0.5rem;

	span {
		font-style: normal;
		font-weight: 400;
		font-size: 1rem;
		line-height: 1.3rem;
		color: #ffffff;
	}
	.avatar {
		width: 100px;
		height: 100px;
		border-radius: 50%;

		img {
			width: 100px;
			height: 100px;
			border-radius: 50%;
			background-repeat: cover;
		}
	}
`;
export const Links = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 24px;
	gap: 16px;

	width: 100%;
	height: fit-content;

	@media (max-width: 578px) {
		width: 100%;
		padding: 0px;
	}
`;
export const Button = styled.a`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 16px 24px;
	gap: 8px;
	width: 100%;
	height: 56px;
	background: rgba(255, 255, 255, 0.1);

	border: 1px solid rgba(255, 255, 255, 0.5);
	backdrop-filter: blur(4px);
	border-radius: 8px;
	text-decoration: none;
	color: #fafafa;
	transition: 0.2s ease-in-out;

	&:hover {
		background: rgba(255, 255, 255, 0.2);
	}

	.content-box {
		width: 42%;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		gap: 1rem;

		@media (max-width: 578px) {
			width: 65%;
		}
	}
`;

export const Footer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	span {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		line-height: 24px;
		color: #ffffff;
	}

	a {
		color: #ffffff;
		margin-left: 4px;

		&:hover {
			opacity: 0.8;
		}
	}
`;
