import './DiscographyListing.css'
import { formatDate } from '../utils/dateFormatter'
import { Release } from '../store/discography'

function DiscographyListing (props: { release: Release }) {
	const release = props.release

	return (
		<p data-testid='release-item' className='release-item'>
			<img
                data-testid='release-thumbnail' 
				alt={release.imageUrl}
				className='release-thumbnail'
				src={'/' + release.imageUrl}
			/>
			<br />
			<span data-testid='release-title' className='release-title'>{release.title}</span>
			<br />
			<span data-testid='release-date' className='release-date'>Released: {formatDate(release.releaseDate)}</span>
			<br />
			<a
                data-testid='release-url' 
				className='release-url'
				href={release.spotifyUrl}
				target='_blank'
				rel='noreferrer'
			>
				Listen on Spotify
			</a>
		</p>
	)
}

export default DiscographyListing
