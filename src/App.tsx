import * as S from './App.styles';
import perfil from './assets/perfil.jpg';
import youtube from './assets/youtube.png';
import instagram from './assets/Instagram.svg';
import tiktok from './assets/logo-tiktok-svgrepo-com.svg';
import shoppe from './assets/bag.svg';

function App() {
	return (
		<S.Container>
			<S.Content>
				<S.Profile>
					<div className='avatar'>
						<img src={perfil} />
					</div>

					<span>Jéssica Sales</span>
				</S.Profile>
				<S.Links>
					<S.Button
						href='https://instagram.com/jessicasalesbeauty/'
						target='_BLANK'
						rel='noreferrer'
					>
						<div className='content-box'>
							<img src={instagram} />
							<span>Instagram</span>
						</div>
					</S.Button>
					<S.Button
						href='https://www.youtube.com/@jessiicasales'
						target='_BLANK'
						rel='noreferrer'
					>
						<div className='content-box'>
							<img src={youtube} />
							<span>Acesse meu canal</span>
						</div>
					</S.Button>

					<S.Button
						href='https://www.tiktok.com/@canaljessicasales/'
						target='_BLANK'
						rel='noreferrer'
					>
						<div className='content-box'>
							<img src={tiktok} />
							<span>Tik Tok</span>
						</div>
					</S.Button>
					<S.Button
						href='https://collshp.com/canaldajessiicq'
						target='_BLANK'
						rel='noreferrer'
					>
						<div className='content-box'>
							<img src={shoppe} />
							<span>Shoppe</span>
						</div>
					</S.Button>
				</S.Links>

				<S.Footer>
					<span>Feito com ❤️ por </span>
					<a
						href='https://instagram.com/dyeegoalves/'
						target='_BLANK'
						rel='noreferrer'
					>
						{' '}
						Diego Alves
					</a>
				</S.Footer>
			</S.Content>
		</S.Container>
	);
}

export default App;
