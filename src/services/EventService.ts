const getEvents = async function () {
	/* c8 ignore start */
	const response = await fetch(
		'https://my-json-server.typicode.com/markdeleon01/uppercaseband-react-typescript-vite-vitest/events'
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
