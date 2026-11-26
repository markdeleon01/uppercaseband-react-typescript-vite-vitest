import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
export interface Member {
	name: string
	role: string
	imageUrl: string
}

const membersList : Member[] = [];
const membersSlice = createSlice({
    // `createSlice` will infer the state type from the `initialState` argument
	name: 'members',
	initialState: { members: membersList },
	reducers: {
		// actions
        // Use the PayloadAction type to declare the contents of `action.payload`
        /* c8 ignore start */
		setMembers(state, action: PayloadAction<Member[]>) {
			state.members = action.payload
		}
        /* c8 ignore stop */
	}
})

export default membersSlice.reducer

export const membersActions = membersSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value
