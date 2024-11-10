import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';
export const pasteSlice = createSlice({
  name: 'paste',
  initialState: {
   pastes:localStorage.getItem('pastes')
   ? JSON.parse(localStorage.getItem('pastes'))
   :[]
   
  },
  reducers: {
    addToPaste: (state,action) => {
      const paste = action.payload;
      state.pastes.push(paste);
      localStorage.setItem('pastes', JSON.stringify(state.pastes));
                           // key     value(stored in json string)
      toast.success("paste created successfully", { position: 'top-lright' })                     
    },
    updateToPaste: (state,action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex((item) => item._id === paste._id);
      if(index>=0){// paste exists
        state.pastes[index] = paste;
        localStorage.setItem('pastes', JSON.stringify(state.pastes));
        toast.success("paste updated successfully",{ position: 'top-lright' });
      }
    },
    resetAllPaste: (state, action) => {
      state.pastes = [];
      localStorage.removeItem('pastes');

    },
    removeFromPaste: (state,action) => {
    const pasteId=action.payload;
    console.log(pasteId);
    const index = state.pastes.findIndex((item) => item._id === pasteId);

    if(index>=0){
        state.pastes.splice(index, 1);
        localStorage.setItem('pastes', JSON.stringify(state.pastes));
        toast.success("paste deleted successfully",{ position: 'top-lright' });
  
    }
  },
}
  
})

// Action creators are generated for each case reducer function
export const { addToPaste, updateToPaste, resetAllPaste,removeFromPaste  } =  pasteSlice.actions

export default  pasteSlice.reducer