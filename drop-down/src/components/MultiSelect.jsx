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

  return (
    <div className={`dropdown ${showClass}`} ref={containerRef}>
      <button
        onMouseDown={handleShow}
        className="btn btn-white border dropdown-toggle"
        disabled={isDisabled}
      >
        {`${selected.length} ${placeholder}(s) selected`}
      </button>
      <div className={`dropdown-menu ${showClass} pre-scrollable`}>
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
