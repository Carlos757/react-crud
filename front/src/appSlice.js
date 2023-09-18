import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  snackbar: { open: false, message: '', timer: 0 }
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setSnackbar: (state, action) => {
      state.snackbar = action.payload
    },
    closeSnackbar: (state, action) => {
      state.snackbar = initialState.snackbar
    },
  },
})

export const { setSnackbar } = appSlice.actions

export default appSlice.reducer