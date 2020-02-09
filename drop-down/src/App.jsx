import React, { useState } from 'react';

import { getRole, getApplication, getGroup, getEntity } from './util/convert';
import AddUser from './components/AddUser';
import Users from './components/Users';

function App() {
  const data = {
    role: getRole(),
    application: getApplication(),
    group: getGroup(),
    entity: getEntity()
  };

  const [users, setUsers] = useState([
    {
      id: '121',
      role: 'Read-only',
      application: [
        { value: 'CAL', label: 'Calendar' },
        { value: 'DTAX', label: 'Discrete Tax Tracking' }
      ],
      group: [
        { value: 'LDLP', label: 'Laternal Data, LP' },
        { value: 'XC', label: 'XC' }
      ],
      entity: {
        'Laternal Data, LP': [
          { label: 'Syan Holdings Limited', value: 'LL11834' }
        ],
        XBS: [
          { label: 'Patient Accounting Service Center LLC', value: 'LL11731' }
        ]
      }
    }
  ]);

  const handleAdd = user => {
    const updatedUsers = [...users];
    updatedUsers.unshift(user);
    setUsers(updatedUsers);
  };

  const handleRemove = index => {
    const yes = window.confirm(
      `Are you sure you want to delete User #${users[index].id}?`
    );

    if (yes) {
      const updatedUsers = [...users];
      updatedUsers.splice(index, 1);
      setUsers(updatedUsers);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="mt-4 mx-auto">
          <AddUser data={data} existingUsers={users} onAdd={handleAdd} />
          <hr />
          <Users users={users} onRemove={handleRemove} />
        </div>
      </div>
    </div>
  );
}

export default App;
