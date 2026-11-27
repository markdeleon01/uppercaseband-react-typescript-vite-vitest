const getEvents = async function () {
	/* c8 ignore start */
	const response = await fetch(
		'/api/events'
	)
    if (response.status === 200) {
        const resData = await response.json()
        return resData    
	} else {
		return null
	}
	/* c8 ignore stop */
}

export const fetchEvents = getEvents
