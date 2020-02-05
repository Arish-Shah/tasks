import React, { useState } from 'react';

function MultiSelect({ options, disabled, onChange, placeholder }) {
  const [selected, setSelected] = useState([]);
  const [cName, setCName] = useState('');

  const handleClick = () => setCName(cName === '' ? 'show' : '');
  const buttonText =
    selected.length === 0 ? placeholder : `${selected.length} options selected`;

  return (
    <div className={`dropdown ${cName}`}>
      <button
        disabled={disabled}
        className="btn btn-light dropdown-toggle"
        onClick={handleClick}
      >
        {buttonText}
      </button>
      <div className={`dropdown-menu ${cName}`}></div>
    </div>
  );
}

export default MultiSelect;
