import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { TiTickOutline } from 'react-icons/ti';

function Workspace({title}) {
    
    return (
        <div className='pl-4 py-3'>
          <h2>{title.title}</h2>
          <ul className='flex py-3 w-100%'>
            <li className='w-40 h-40 bg-darkmode-azul2 rounded-m text-center flex items-center justify-center cursor-pointer'>
              <FiPlus className='text-xl text-center'/>
            </li>
        </ul>
        </div>
    )
}


function NameWorkspace({addWorkspace, show}) {
    const [title, setTitle] = useState('');
    
    if (!show) {

        return null
    }
    
    function handleSubmit(e) {
        e.preventDefault()

        addWorkspace(title)

        setTitle('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="string">Workspace title:</label>
            <input type="text" name='title' value={title} onChange={(e) => {
                setTitle(e.target.value)
            }} required/>
            <button type='submit'><TiTickOutline/></button>
        </form>
    )
}


export { Workspace, NameWorkspace }