const getEvents = async function () {
	const response = await fetch(
		'https://my-json-server.typicode.com/markdeleon01/uppercaseband-react-typescript-vite-vitest/events'
	)
    if (response.status === 200) {
        const resData = await response.json()
        return resData    
	} else {
		return null
	}
}

export const fetchEvents = getEvents
