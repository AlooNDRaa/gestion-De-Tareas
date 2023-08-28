import React, { useState } from 'react';
import { AiOutlineMore, AiOutlineStar } from "react-icons/ai";
import { BiColor } from "react-icons/bi";

interface SubheaderProps {
  className?: string;
}


const Subheader: React.FC<SubheaderProps> = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [boardName, setBoardName] = useState('Tabler Name');

  const handleNameClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBoardName(e.target.value);
  };

  const handleInputBlur = () => {
    setIsEditing(false);
  };

  const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setIsEditing(false);
    }
  };

  return (
    <div className={`flex justify-between items-center bg-[#278EA5] bg-opacity-25 h-9 text-[#CAEDFF] sm:w-full pl-5 ${props.className}`}>
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
          {boardName}
        </h4>
      )}
      <div className="flex gap-3">
        <a href="" className="icon"><BiColor /></a>
        <a href="" className="icon"><AiOutlineStar /></a>
        <a href="" className="icon"><AiOutlineMore /></a>
      </div>
    </div>
  );
}

export default Subheader;
