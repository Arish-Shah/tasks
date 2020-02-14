import React, { useState, useRef, useEffect } from 'react';

import MultiSelect from './MultiSelect';
import GroupedMultiSelect from './GroupedMultiSelect';

function AddUser({ data, existingUsers, onAdd }) {
  // The options that will be shown
  const [options, setOptions] = useState({
    role: data.role,
    application: data.application,
    group: data.group,
    entity: data.entity
  });

  // Keeping the values of inputs
  const defaultValues = {
    id: '',
    role: '',
    application: [],
    group: [],
    entity: {}
  };
  const [values, setValues] = useState(defaultValues);

  // Disabling the inputs when previous one isn't filled
  const [disabled, setDisabled] = useState({
    role: false,
    application: false,
    group: false,
    entity: false
  });

  // Focus Id input and disable Button
  const idRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    idRef.current.focus();
    buttonRef.current.disabled = true;
  }, []);

  useEffect(() => {
    setValues({ ...values, group: [], entity: {} });
    setDisabled({ ...disabled, entity: true });
    setOptions({ ...options, entity: data.entity });

    if (existingUsers.length) {
      let updatedRole = [...data.role];
      // let updatedEntity = { ...data.entity };

      existingUsers.forEach(existingUser => {
        if (existingUser.id === values.id) {
          updatedRole = updatedRole.filter(
            role => role.label !== existingUser.role
          );
        }
      });
      setOptions({ ...options, role: updatedRole });
    }

    // eslint-disable-next-line
  }, [values.id]);

  useEffect(() => {
    const updatedEntity = {};

    if (values.group.length) {
      values.group.forEach(group => {
        if (data.entity[group.label]) {
          updatedEntity[group.label] = data.entity[group.label];
        }
      });
    }

    if (existingUsers.length) {
      existingUsers.forEach(existingUser => {
        if (existingUser.id === values.id) {
          existingUser.group.forEach(group => {
            if (
              updatedEntity[group.label] &&
              existingUser.entity[group.label]
            ) {
              existingUser.entity[group.label].forEach(existingEntity => {
                updatedEntity[group.label] = updatedEntity[group.label].filter(
                  en => en.label !== existingEntity.label
                );
              });
            }
          });
        }
      });
    }

    setOptions({ ...options, entity: updatedEntity });

    // eslint-disable-next-line
  }, [values.group]);

  // Checks everything if role selected is Manager
  useEffect(() => {
    if (values.role === 'Admin') {
      setValues({
        ...values,
        application: data.application,
        group: data.group,
        entity: data.entity
      });
      setDisabled({
        ...disabled,
        application: true,
        group: true,
        entity: true
      });
    } else {
      setValues({ ...values, application: [], group: [], entity: {} });
    }
    // eslint-disable-next-line
  }, [values.role]);

  useEffect(() => {
    if (
      values.id.trim() !== '' &&
      values.role &&
      values.application.length &&
      values.group.length &&
      JSON.stringify(values.entity) !== '{}'
    ) {
      buttonRef.current.disabled = false;
    } else {
      buttonRef.current.disabled = true;
    }
  }, [values]);

  const handleIdChange = e => {
    setValues({ ...values, id: e.target.value });
    e.target.value
      ? setDisabled({ ...disabled, role: false })
      : setDisabled({ ...disabled, role: true });
  };

  const handleRoleChange = e => {
    setValues({ ...values, role: e.target.value });
    setDisabled({ ...disabled, application: false });
  };

  const handleAppChange = application => {
    setValues({ ...values, application });
    application.length
      ? setDisabled({ ...disabled, group: false })
      : setDisabled({ ...disabled, group: true });
  };

  const handleGroupChange = group => {
    setValues({ ...values, group });
    group.length
      ? setDisabled({ ...disabled, entity: false })
      : setDisabled({ ...disabled, entity: true });
  };

  const handleEntityChange = entity => {
    setValues({ ...values, entity });
  };

  const handleAddButton = () => {
    onAdd(values);
    setValues(defaultValues);
    setDisabled({ role: true, application: true, group: true, entity: true });
    idRef.current.focus();
  };

  return (
    <div className="form-row">
      {/* Id Input */}
      <div className="form-group col">
        <input
          className="form-control"
          placeholder="User Id"
          ref={idRef}
          value={values.id}
          onChange={handleIdChange}
        />
      </div>

      {/* Role DropDown */}
      <div className="form-group col">
        <select
          className="form-control"
          disabled={disabled.role}
          value={values.role}
          onChange={handleRoleChange}
        >
          <option hidden value>
            Role
          </option>
          {options.role.map((val, i) => (
            <option key={i} value={val.label} id={val.id}>
              {val.label}
            </option>
          ))}
        </select>
      </div>

      {/* Application MultiSelect dropdown */}
      <div className="form-group col">
        <MultiSelect
          placeholder="Application"
          options={options.application}
          value={values.application}
          onChange={handleAppChange}
          isDisabled={disabled.application}
        />
      </div>

      {/* Group MultiSelect dropdown */}
      <div className="form-group col">
        <MultiSelect
          placeholder="Group"
          options={options.group}
          value={values.group}
          onChange={handleGroupChange}
          isDisabled={disabled.group}
        />
      </div>

      {/* Entity MultiSelect dropdown */}
      <div className="form-group col">
        <GroupedMultiSelect
          placeholder="Entity"
          options={options.entity}
          value={values.entity}
          onChange={handleEntityChange}
          isDisabled={disabled.entity}
        />
      </div>

      {/* Add Button */}
      <div className="form-group col">
        <button
          className="btn btn-primary"
          onClick={handleAddButton}
          ref={buttonRef}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default AddUser;
