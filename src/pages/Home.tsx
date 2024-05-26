import './Home.css'
import { useEffect } from 'react'
import NProgress from 'nprogress'

function Home() {
	NProgress.start()

	// useEffect hook is called after React updates the DOM
	useEffect(() => {
		NProgress.done()
	})

	return (
		<div data-testid='home' className='home'>
			<h1 data-testid='home-header-1'>U P P E R C A S E</h1>
			<hr />
			<h2 data-testid='home-header-2'>Welcome to the Official Website!</h2>
			<p data-testid='band-logo' className='band-logo'>
				<img alt='UPPERCASE-logo.png' src='/UPPERCASE-logo.png' />
			</p>
			<p data-testid='page-content' className='page-content'>
				UPPERCASE is a Filipino-Canadian indie pop rock band <br />
				from Toronto, Canada pursuing Original Pilipino Music (OPM)
			</p>
			<p>
				Check out the band&apos;s music on&nbsp;
				<a
					href='https://open.spotify.com/artist/6h4pjpssOa3fBNiQmSkgOB'
					target='blank'
				>
					Spotify
				</a>
				!
			</p>
			<p>
				Follow the band on&nbsp;
				<a
					href='https://www.instagram.com/ang.bandang.uppercase/'
					target='blank'
				>
					Instagram
				</a>
				!
			</p>
			<p>
				Like and Share on&nbsp;
				<a
					href='https://www.facebook.com/ang.bandang.uppercase/'
					target='blank'
				>
					Facebook
				</a>
				!
			</p>
		</div>
	)
}

export default Home
