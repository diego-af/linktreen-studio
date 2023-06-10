import * as S from './App.styles';
import perfil from './assets/perfil.jpg';
import youtube from './assets/youtube.png';
import instagram from './assets/Instagram.svg';
import tiktok from './assets/logo-tiktok-svgrepo-com.svg';
import whatssap from './assets/icons8-whatsapp.svg';

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
					<S.Button href='https://wa.me/message/U23JFV4II6R7G1'>
						<div className='content-box'>
							<img src={whatssap} />
							<span>Agende um horário</span>
						</div>
					</S.Button>
					<S.Button href='https://instagram.com/jessicasalesbeauty/'>
						<div className='content-box'>
							<img src={instagram} />
							<span>Instagram</span>
						</div>
					</S.Button>
					<S.Button
						href='https://www.youtube.com/@jessiicasales'
						target='_BLANK'
					>
						<div className='content-box'>
							<img src={youtube} />
							<span>Acesse meu canal</span>
						</div>
					</S.Button>

					<S.Button href='https://www.tiktok.com/@canaljessicasales/'>
						<div className='content-box'>
							<img src={tiktok} />
							<span>Tik Tok</span>
						</div>
					</S.Button>
				</S.Links>
				<div className='medias'></div>
				<div className='footer'></div>
			</S.Content>
		</S.Container>
	);
}

export default App;
