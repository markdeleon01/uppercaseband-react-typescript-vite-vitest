const formattedDate = function (value: string) {
	const date = new Date(value)
	return date.toLocaleString(['en-US'], {
		month: 'long',
		day: 'numeric',
		year: 'numeric'
	})
}

export const formatDate = formattedDate
