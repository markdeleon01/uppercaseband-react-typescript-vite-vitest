import './EventListing.css'
import { formatDate } from '../utils/dateFormatter'
import ReactHtmlParser from 'react-html-parser'
import { Event } from '../store/events'

function EventListing(props: { event: Event }) {
	const event = props.event

	return (
		<div data-testid='event-item' className='event-item'>
			<span data-testid='event-title' className='event-title'>{event.title}</span>
			<br />
			<span data-testid='event-date' className='event-date'>{formatDate(event.date)}</span>
			<br />
			<span data-testid='event-location' className='event-location'>{event.location}</span>
			<br />
			<span data-testid='event-content' className='event-content'>{ReactHtmlParser(event.content)}</span>
			<a
                data-testid='event-url' 
				className='event-url'
				href={event.externalUrl}
				target='_blank'
				rel='noreferrer'
			>
				Learn more
			</a>
		</div>
	)
}

export default EventListing
