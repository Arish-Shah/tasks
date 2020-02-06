import React, { useState, useEffect, useRef } from 'react';

function MultiSelect({ options, disabled, onChange, placeholder }) {
  const [selected, setSelected] = useState([]);
  const [show, setShow] = useState('');
  const containerRef = useRef();

  useEffect(() => {
    document.addEventListener('click', handleWindowClick);
    return () => {
      document.removeEventListener('click', handleWindowClick);
    };
  }, []);

  const handleWindowClick = e => {
    if (!containerRef.current.contains(e.target)) {
      setShow('');
    }
  };

  const handleClick = () => {
    setShow(show === '' ? 'show' : '');
  };

  const handleOption = (index, i) => {
    const updatedSelected = [...selected];

    i === -1
      ? updatedSelected.push(options[index])
      : updatedSelected.splice(i, 1);

    setSelected(updatedSelected);
    onChange(updatedSelected); // Passing Changed Value back
  };

  const buttonText =
    selected.length === 0
      ? placeholder
      : `${selected.length} ${placeholder}(s) selected`;

  return (
    <div className={`dropdown ${show}`} ref={containerRef}>
      <button
        disabled={disabled}
        className="btn btn-light dropdown-toggle"
        onMouseDown={handleClick}
      >
        {buttonText}
      </button>
      <div className={`dropdown-menu ${show}`}>
        {options.map((option, index) => {
          const i = selected.findIndex(sel => sel.value === option.value);
          let classNames = i >= 0 ? 'dropdown-item active' : 'dropdown-item';

          return (
            <button
              className={classNames}
              key={option.value}
              onClick={() => handleOption(index, i)}
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

// const options = [
//   { label: 'A thing', value: 'a_thing' },
//   { label: 'A second thing', value: 'b_thing' },
//   { label: 'A third thing', value: 'c_thing' },
//   { label: 'A fourth thing', value: 'd_thing' },
//   { label: 'A fifth thing', value: 'e_thing' }
// ];

// <MultiSelect
//             placeholder="Role"
//             options={options}
//             onChange={handleChange}
//             disabled={false}
//           />
