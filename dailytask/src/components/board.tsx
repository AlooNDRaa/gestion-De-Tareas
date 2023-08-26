import { IoMdClose } from 'react-icons/io';
import { BsPersonFillAdd } from 'react-icons/bs';
import { TiTick } from 'react-icons/ti';

function BoardModal({openModal, closeModal}) {
    
    if (!openModal) {
        return null;
    }
    
    return (
        <div className='flex flex-col justify-center align-center justify-items-center rounded-md px-auto dark:bg-darkmode-verdeagua2 w-60 h-100'>
            <button onClick={closeModal}><IoMdClose className='dark:text-[#fff]'/></button>
            <div className='flex justify-evenly'>
                <button><BsPersonFillAdd/></button>
                <button><TiTick/></button>
            </div>
        </div>
    )
}

function BoardHomeView({name, bgcolor, collaborators}) {

    return (
        <>
            <li className={`w-40 h-28 ${bgcolor}`}>
                <span>{name}</span>
                <span>{collaborators}</span>
            </li>
        </>
    )
}

export {BoardHomeView, BoardModal}
