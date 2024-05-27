import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
export interface Event {
    id: string
	title: string
    location: string
    date: string
    imageUrl: string
    content: string
    externalUrl: string
}

const events : Event[] = []
const initialState = { events: events}

const eventsSlice = createSlice({
    // `createSlice` will infer the state type from the `initialState` argument
	name: 'events',
	initialState,
	reducers: {
        // actions
        // Use the PayloadAction type to declare the contents of `action.payload`
        setEvents(state, action: PayloadAction<Event[]>) {
            state.events = action.payload
        }
    }
})

export default eventsSlice.reducer

export const eventsActions = eventsSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value
