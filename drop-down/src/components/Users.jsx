import React from 'react';

function Users({ users, onRemove }) {
  return (
    <>
      {users.map((user, i) => (
        <User
          key={i}
          index={i}
          id={user.id}
          role={user.role}
          application={user.application}
          group={user.group}
          entity={user.entity}
          onRemove={onRemove}
        />
      ))}
    </>
  );
}

function User({ index, id, role, application, group, entity, onRemove }) {
  let count = 0;
  Object.keys(entity).forEach(name => {
    count += entity[name].length;
  });
  let entityText = `${count} Entitie(s) selected`;

  return (
    <div className="form-row">
      <div className="form-group col">
        <input
          className="form-control"
          placeholder="User Id"
          value={id}
          disabled={true}
        />
      </div>
      <div className="form-group col">
        <select className="form-control" disabled={true}>
          <option>{role}</option>
        </select>
      </div>
      <div className="form-group col">
        <button
          className="btn btn-light border dropdown-toggle"
          disabled={true}
        >
          {`${application.length} Application(s) selected`}
        </button>
      </div>
      <div className="form-group col">
        <button
          className="btn btn-light border dropdown-toggle"
          disabled={true}
        >
          {`${group.length} Group(s) selected`}
        </button>
      </div>
      <div className="form-group col">
        <button
          className="btn btn-light border dropdown-toggle"
          disabled={true}
        >
          {entityText}
        </button>
      </div>
      <div className="form-group col">
        <button
          className="btn text-danger btn-link btn-sm"
          onClick={() => onRemove(index)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default Users;
