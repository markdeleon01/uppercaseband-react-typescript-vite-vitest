import './Discography.css'

import { useAppSelector, useAppDispatch } from '../hooks'
import { useEffect } from 'react'
import { discographyActions } from '../store/discography'
import { fetchDiscography } from '../services/DiscographyService'

import DiscographyListing from '../components/DiscographyListing'
import NProgress from 'nprogress'

function Discography() {
	NProgress.start()

	const releases = useAppSelector((state) => state.discography.releases)
	const dispatch = useAppDispatch()

	// useEffect hook is called after React updates the DOM
	useEffect(() => {
		fetchDiscography()
			.then((data) => {
				dispatch(discographyActions.setReleases(data))
			})
			.then(() => {
				NProgress.done()
			})
	}, [dispatch])

	return (
		<div data-testid='discography' className='discography'>
			<h1 data-testid='discography-header-1'>U P P E R C A S E</h1>
			<hr />
			<h2 data-testid='discography-header-2'>Discography</h2>
			<p className='discography-headline'>
				The band released a full-length album, an EP and top-hit singles <br />
				that have garnered popularity and heavy streaming <br />
				from listeners in the Philippines and around the world.
			</p>
			<hr />
			{releases &&
				releases.map((release) => (
					<DiscographyListing key={release.title} release={release} />
				))}
		</div>
	)
}

export default Discography
