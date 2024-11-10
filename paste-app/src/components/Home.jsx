import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import Paste from './Paste';
import { addToPaste, updateToPaste } from '../redux/PasteSlice';



function Home() {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get('pasteId');
  const dispatch = useDispatch();
  const allPastes =useSelector((state)=>state.paste.pastes);
useEffect(() => {
  if(pasteId){
    const paste = allPastes.find((p)=>p._id === pasteId);
    setTitle(paste.title);
    setValue(paste.content);
  }
  
}, [pasteId])

  function createPaste() {
    const paste ={
      title: title,
      content: value,
      _id:pasteId || Date.now().toString(36),
      createdAt:new Date().toISOString(),
    }


    

    if (pasteId) {
         //updation
         dispatch(updateToPaste(paste));
    }
    else{
       //creation
       dispatch(addToPaste(paste));
    }
    //clearing text area after submission
    setTitle('');
    setValue('');
    setSearchParams({});


  }
  return (
    < div className='flex align-middle justify-center rounded-3xl flex-col gap-4 h-screen' >
      <input type='text' placeholder='enter the title' value={title} onChange={(e) => setTitle(e.target.value)}
        className='p-4 w-full rounded-2xl self-center' />


      <button className='w-50 self-center bg-blue-950' onClick={createPaste}>{
        pasteId? 'update paste' : 'create paste'
      }
      </button>
      <textarea value={value} placeholder='enter your paste ' onChange={(e) => setValue(e.target.value)}
        className='w-full h-3/4 rounded-2xl  text-start flex p-4 resize-none align-top'
      />

    </div>
  )
}

export default Home