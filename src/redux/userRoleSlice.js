import { createSlice } from "@reduxjs/toolkit";

const userRoleSlice = createSlice({
    name: 'userRole',
    initialState: {
        role: 'user'
    },
    reducers: {
        userRole: (state, action) => {
            const email = action.payload;
            if (email === 'admin@gmail.com') {
                state.role = 'admin';
            }
        },
    }
})

export const { userRole } = userRoleSlice.actions;
export default userRoleSlice.reducer;

