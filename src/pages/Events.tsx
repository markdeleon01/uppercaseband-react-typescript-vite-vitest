import './Events.css'

import { useAppSelector, useAppDispatch } from '../hooks'
import { useEffect } from 'react'
import { eventsActions } from '../store/events'
import { fetchEvents } from '../services/EventService'

import EventListing from '../components/EventListing'
import NProgress from 'nprogress'

function Events() {
	NProgress.start()
	const events = useAppSelector((state) => state.events.events)
	const dispatch = useAppDispatch()

	// useEffect hook is called after React updates the DOM
	useEffect(() => {
		fetchEvents().then((data) => {
			dispatch(eventsActions.setEvents(data))
		}).then( () => {
			NProgress.done()
		})
	}, [dispatch])

	return (
		<div data-testid='events' className='events'>
			<h1 data-testid='events-header-1'>U P P E R C A S E</h1>
			<hr />
			<h2 data-testid='events-header-2'>Events</h2>
			{events &&
				events.map((event) => <EventListing key={event.id} event={event} />)}
		</div>
	)
}

export default Events