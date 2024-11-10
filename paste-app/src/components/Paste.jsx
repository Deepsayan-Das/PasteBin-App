import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPaste } from '../redux/PasteSlice';
import toast from 'react-hot-toast';
import { NavLink } from 'react-router-dom';

const url= window.location.href
function Paste() {
const [searchTerm,setSearchTerm] =useState('');
 const pastes =useSelector((state) => state.paste.pastes);
 const dispatch = useDispatch();

 const filteredData = pastes.filter((paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase()));
function handleDelete(pasteId){
           dispatch(removeFromPaste(pasteId));
}
  return (
    <div className='flex flex-col'> 
      <div className='w-full flex self-center items-center justify-center gap-4' >
      <input type='text' placeholder='search pastes' value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}}
      className='p-4 w-4/5 rounded-2xl  my-4'/>
      <button className='w-1/5 h-14 rounded-2xl' >
        search
      </button>
      </div>
      <div className='flex flex-col gap-4 mt-5' >
        {
          filteredData.length>0 && 
          filteredData.map((paste)=>{
                     return(
                      <div className='border-2 p-2 flex flex-col gap-4' key={paste?._id}>                 
                        <div className='flex justify-start font-black text-3xl'>{paste.title}</div>
                        <div>{paste.content}</div>
                        <div className='flex justify-evenly my-4'>
                          <button><NavLink to={`/?pasteId=${paste?._id}`}>edit</NavLink></button>
                          <button ><NavLink to={`/pastes/${paste?._id}`}>View</NavLink></button>
                          <button onClick={()=>handleDelete(paste?._id)}>delete</button>
                          <button onClick={()=>{ navigator.clipboard.writeText(url)
                            toast.success('link copied successfully')
                          }}>share</button>
                          <button onClick={()=>{navigator.clipboard.writeText(paste?.content)  
                            toast.success('copied to clipboard')
                          }}>copy</button>
                        </div>
                        <div className='mb-4'>
                          {paste.createdAt}
                        </div>
                       
                        </div>
                     )
          })
        }

      </div>
    </div>
  )
}

export default Paste