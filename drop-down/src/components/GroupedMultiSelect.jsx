import React, { useState, useEffect, useRef } from 'react';

function GroupedMultiSelect({
  options,
  placeholder,
  value,
  onChange,
  isDisabled
}) {
  const [showClass, setShowClass] = useState('');
  const [selected, setSelected] = useState({});
  const containerRef = useRef();

  useEffect(() => {
    document.addEventListener('mousedown', handleDocumentClick);
    return () => document.removeEventListener('mousedown', handleDocumentClick);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const updatedSelected = {};
    Object.keys(options).forEach(name => {
      updatedSelected[name] = value[name] || [];
    });
    setSelected(updatedSelected);
  }, [options, value]);

  const handleShow = () => setShowClass(showClass === '' ? 'show' : '');

  const handleDocumentClick = e => {
    if (!containerRef.current.contains(e.target)) setShowClass('');
  };

  const handleOptionClick = (name, obj, index) => {
    const updatedSelected = { ...selected };

    index >= 0
      ? updatedSelected[name].splice(index, 1)
      : updatedSelected[name].push(obj);

    setSelected(updatedSelected);
    checkAndReturn(updatedSelected);
  };

  const checkAndReturn = obj => {
    const tempObj = {};
    Object.keys(obj).forEach(name => {
      if (obj[name].length > 0) tempObj[name] = obj[name];
    });
    onChange(tempObj);
  };

  // Set Button Text
  let count = 0;
  Object.keys(selected).forEach(name => {
    count += selected[name].length || 0;
  });
  let buttonText = `${count} ${placeholder}(s) selected`;

  return (
    <div className={`dropdown ${showClass}`} ref={containerRef}>
      <button
        onMouseDown={handleShow}
        className="btn btn-white border dropdown-toggle"
        disabled={isDisabled}
      >
        {buttonText}
      </button>
      <div className={`dropdown-menu ${showClass} pre-scrollable`}>
        {Object.keys(options).map((option, i) => {
          return (
            <React.Fragment key={i}>
              <h6 className="dropdown-header">{option}</h6>
              {options[option].map((item, j) => {
                const index =
                  selected[option] &&
                  selected[option].findIndex(sel => sel.value === item.value);
                const classNames =
                  index >= 0 ? 'dropdown-item active' : 'dropdown-item';

                return (
                  <button
                    className={classNames}
                    key={j}
                    onClick={() => handleOptionClick(option, item, index)}
                  >
                    {item.label}
                  </button>
                );
              })}
              <div className="dropdown-divider"></div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default GroupedMultiSelect;
