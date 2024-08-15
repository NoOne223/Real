import React from 'react'
import { Enflag, Viflag } from '../images/Image';

interface LangProps {
    className?: string;
}
  
const Lang: React.FC<LangProps> = ({ className }) => {
    return (
      <div className="lang-change flex fixed top-3 right-36 justify-end gap-x-2">
        <img className='active' src={Enflag}></img>
        <img src={Viflag}></img>
      </div>
    );
};

export default Lang