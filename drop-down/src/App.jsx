import React from 'react';
import { useSelector } from './store/StoreProvider';
import MultiSelect from './components/MultiSelect';

function App() {
  const disabledAdd = useSelector(state => state.disabledAdd);
  const options = [
    { label: 'A thing', value: 'a_thing' },
    { label: 'A second thing', value: 'b_thing' },
    { label: 'A third thing', value: 'c_thing' },
    { label: 'A fourth thing', value: 'd_thing' },
    { label: 'A fifth thing', value: 'e_thing' }
  ];

  const handleChange = e => {
    console.log(e);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="mt-3">
          <button className="btn btn-primary" disabled={disabledAdd}>
            Add Users
          </button>
          <MultiSelect
            placeholder="Role"
            options={options}
            onChange={handleChange}
            disabled={false}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
