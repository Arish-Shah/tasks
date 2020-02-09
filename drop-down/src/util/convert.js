import data from '../data/userFilters.json';

export function getRole() {
  const roles = [];
  data.Role.forEach(role => {
    roles.push({ value: role['Role_Id'], label: role['Role_Name'] });
  });
  return roles;
}

export function getApplication() {
  const applications = [];
  data.Application.forEach(app => {
    applications.push({ value: app['App_Id'], label: app['App_Name'] });
  });
  return applications;
}

export function getGroup() {
  const groups = [];
  data.Group.forEach(group => {
    groups.push({ value: group['Group_Id'], label: group['Group_Name'] });
  });
  return groups;
}

export function getEntity() {
  const entities = {};
  for (const el of data.Entity) {
    if (!entities[el.Group_Name]) {
      entities[el.Group_Name] = [];
    }
    entities[el.Group_Name].push({
      label: el.Entity_Name,
      value: el.Entity_Id
    });
  }
  return entities;
}
