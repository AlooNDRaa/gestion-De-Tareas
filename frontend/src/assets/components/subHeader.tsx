import React, { useState } from 'react';
import { AiOutlineMore, AiOutlineStar } from "react-icons/ai";
import { BiColor } from "react-icons/bi";

interface SubheaderProps {
  className?: string;
}

const Subheader: React.FC<SubheaderProps> = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [boardName, setBoardName] = useState('Tabler Name');
  const [errorMessage, setErrorMessage] = useState('');

  const handleNameClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBoardName(e.target.value);
    setErrorMessage('');
  };

  const handleInputBlur = () => {
    setIsEditing(false);
    if (boardName.trim() === '') {
      setErrorMessage('Campo Necesario!!');
      setBoardName(''); 
      setTimeout(() => {
        setErrorMessage('');
        setIsEditing(true);
      }, 2000);
    }
  };

  const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setIsEditing(false);
      if (boardName.trim() === '') {
        setErrorMessage('Campo Necesario!!');
        setBoardName(''); 
        setTimeout(() => {
          setErrorMessage('');
          setIsEditing(true); 
        }, 2000); 
      }
    }
  };

  return (
    <div className='w-full'>
      <div className={`flex w-full justify-between items-center bg-[#278EA5] bg-opacity-25 h-9 text-[#CAEDFF] sm:w-full pl-5 ${props.className}`}>
        {isEditing ? (
          <input
            type="text"
            value={boardName}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onKeyPress={handleInputKeyPress}
            autoFocus
          />
        ) : (
          <h4 className="flex" onClick={handleNameClick}>
            {errorMessage || boardName}
          </h4>
        )}
        <div className="flex gap-3">
          <span className="icon"><BiColor /></span>
          <span className="icon"><AiOutlineStar /></span>
          <span className="icon"><AiOutlineMore /></span>
        </div>
      </div>
    </div>
  );
}

export default Subheader;
