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

  const handleSelectAll = () => {
    setSelected(options);
    checkAndReturn(options);
  };

  const handleDeselectAll = () => {
    setSelected({});
    checkAndReturn({});
  };

  // Set Button Text
  let count = 0;
  Object.keys(selected).forEach(name => {
    count += selected[name].length || 0;
  });
  const buttonText = count ? `${placeholder}: ${count} selected` : placeholder;

  return (
    <div className={`dropdown ${showClass}`} ref={containerRef}>
      <button
        onMouseDown={handleShow}
        style={{ width: '100%' }}
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
        {Object.keys(options).map((option, i) => {
          return options[option].length ? (
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
          ) : null;
        })}
      </div>
    </div>
  );
}

export default GroupedMultiSelect;
