import React, { useState, useEffect, useRef } from 'react';

function MultiSelect({ options, placeholder, value, onChange, isDisabled }) {
  const [showClass, setShowClass] = useState('');
  const [selected, setSelected] = useState([]);
  const containerRef = useRef();

  useEffect(() => {
    document.addEventListener('mousedown', handleDocumentClick);
    return () => document.removeEventListener('mousedown', handleDocumentClick);
  }, []);

  useEffect(() => {
    setSelected(value);
  }, [value]);

  const handleShow = () => setShowClass(showClass === '' ? 'show' : '');

  const handleDocumentClick = e => {
    if (!containerRef.current.contains(e.target)) setShowClass('');
  };

  const handleOptionClick = (option, index) => {
    const updatedSelected = [...selected];
    index >= 0
      ? updatedSelected.splice(index, 1)
      : updatedSelected.push(option);

    setSelected(updatedSelected);
    onChange(updatedSelected);
  };

  const handleSelectAll = () => {
    setSelected(options);
    onChange(options);
  };

  const handleDeselectAll = () => {
    setSelected([]);
    onChange([]);
  };

  const buttonText = selected.length
    ? `${placeholder}: ${selected.length} selected`
    : placeholder;

  return (
    <div className={`dropdown ${showClass}`} ref={containerRef}>
      <button
        onMouseDown={handleShow}
        className="btn btn-white btn-block border dropdown-toggle"
        disabled={isDisabled}
      >
        {buttonText}
      </button>
      <div className={`dropdown-menu ${showClass} pre-scrollable`}>
        <button onClick={handleSelectAll} className="dropdown-item">
          ✔ Select All
        </button>
        <button onClick={handleDeselectAll} className="dropdown-item">
          ✖ Unselect All
        </button>

        {options.map((option, i) => {
          const index = selected.findIndex(item => item.value === option.value);
          const className =
            index >= 0 ? 'dropdown-item active' : 'dropdown-item';

          return (
            <button
              key={i}
              onClick={() => handleOptionClick(option, index)}
              className={className}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default MultiSelect;
