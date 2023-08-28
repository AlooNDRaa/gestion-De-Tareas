import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { TiTickOutline } from 'react-icons/ti';
import { AiFillEdit } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import { BoardModal } from './board';
import { BoardHomeView } from './board';

function Workspace({title, deleteWorkspace, theme} ) {
    const [boards, setBoards] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    function addBoard(name, bgcolor) {
        setBoards([...boards, {name: name, bgcolor: bgcolor}])
    }

    return (
        <>
        {openModal ? <BoardModal closeModal={() => setOpenModal(!openModal)} addBoard={addBoard} theme={theme}/> : null}
        <div className='pl-4 py-3'>
            <div className='flex items-center'>
                <h2>{title.title}</h2>
                <span className='px-1 pl-2 cursor-pointer'><AiFillEdit className={`${theme ? 'text-darkmode-verdeagua1' : 'text-lightmode-azul'}`}/></span>
                <span className='px-1 cursor-pointer' onClick={() => deleteWorkspace(title.title)}> <MdDelete className={`${theme ? 'text-darkmode-verdeagua1' : 'text-lightmode-azul'}`}/></span>
            </div>
            <ul className={`flex py-3 w-100% ${theme ? 'text-darkmode-verdeagua2' : 'text-lightmode-azul'}`}>
                {boards.map((board, index) => <BoardHomeView name={board.name} bgcolor={board.bgcolor} key={index}/>)}
                <li className={`w-40 h-28 ${theme ? 'bg-darkmode-azul1' : 'bg-lightmode-azul'} rounded-md text-center flex items-center justify-center cursor-pointer`} onClick={() => setOpenModal(!openModal)}>
                  <FiPlus className={`text-xl text-center ${theme ? 'text-darkmode-verdeagua1' : 'text-lightmode-blanco'}`}/>
                </li>
            </ul>
        </div>
        </>
    )
}


function NameWorkspace({addWorkspace, show, close, theme}) {
    const [title, setTitle] = useState('');
    if (!show) {
        return null
    }
    
    function handleSubmit(e) {
        e.preventDefault()

        addWorkspace(title)

        setTitle('')

        close()
    }

    return (
        <form onSubmit={handleSubmit} className='flex items-center pt-3'>
            <label className='pr-2' htmlFor="string">Workspace title:</label>
            <input className={`${theme ? ('bg-darkmode-azul1' && 'text-darkmode-verdeagua1') : ('bg-lightmode-azul' && 'text-lightmode-verdeagua1' && 'border-lightmode-azul')}`} type="text" name='title' value={title} onChange={(e) => {
                setTitle(e.target.value)
            }} required/>
            <button className={ `${theme ? 'bg-darkmode-verdeagua1' : 'bg-lightmode-azul'} ${theme ? 'text-darkmode-azul2' : 'text-lightmode-verdeagua1'} rounded-sm ml-2 p-1`} type='submit'><TiTickOutline/></button>
        </form>
    )
}


export { Workspace, NameWorkspace }