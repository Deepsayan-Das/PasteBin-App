import { configureStore } from '@reduxjs/toolkit'
import pasteReducer from '../src/redux/PasteSlice'
export default configureStore({
  reducer: {paste: pasteReducer,},
})