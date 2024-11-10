import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';




function viewPage() {
  const {id}=useParams();
const allPastes = useSelector((state)=>state.paste.pastes);
const paste= allPastes.filter((p)=> p._id === id)[0];
  return (
    < div className='flex align-middle justify-center rounded-3xl flex-col gap-4 h-screen' >
    <input type='text' placeholder='enter the title' value={paste.title} onChange={(e) => setTitle(e.target.value)}
        className='p-4 w-full rounded-2xl self-center' disabled />

    
<textarea value={paste.content} placeholder='enter your paste ' onChange={(e) => setValue(e.target.value)}
        className='w-full h-3/4 rounded-2xl  text-start flex p-4 resize-none align-top' disabled
      />

  </div>
  )
}

export default viewPage