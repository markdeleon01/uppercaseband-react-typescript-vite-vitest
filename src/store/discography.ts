import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
export interface Release {
	title: string
	releaseType: string
	releaseDate: string
    imageUrl: string
    spotifyUrl: string
}

const releases : Release[] = []
const initialState = { releases: releases}

const discographySlice = createSlice({
    // `createSlice` will infer the state type from the `initialState` argument
	name: 'discography',
	initialState,
	reducers: {
        // actions
        // Use the PayloadAction type to declare the contents of `action.payload`
        /* c8 ignore start */
        setReleases(state, action: PayloadAction<Release[]>) {
            state.releases = action.payload
        }
        /* c8 ignore stop */
    }
})

export default discographySlice.reducer

export const discographyActions = discographySlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value
