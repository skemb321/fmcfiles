import { Accounts } from 'meteor/accounts-base'
import { Roles } from 'meteor/alanning:roles';

import { Users } from '../../collections';
import { STAFF_ROLES, MANAGER_ROLES } from '../../constants';

const staffExists = Users.findOne({ username: process.env.STAFF_USERNAME });
if (!staffExists) {
  const staffUserId = Accounts.createUser({
    username: process.env.STAFF_USERNAME,
    email: process.env.STAFF_EMAIL,
    password: process.env.STAFF_PASSWORD,
    profile: {
      name: process.env.STAFF_NAME,
    },
  });
  Roles.addUsersToRoles(staffUserId, STAFF_ROLES);
}

const managerExists = Users.findOne({ username: process.env.MANAGER_USERNAME });
if (!managerExists) {
  const managerUserId = Accounts.createUser({
    username: process.env.MANAGER_USERNAME,
    email: process.env.MANAGER_EMAIL,
    password: process.env.MANAGER_PASSWORD,
    profile: {
      name: process.env.MANAGER_NAME,
    },
  });
  Roles.addUsersToRoles(managerUserId, MANAGER_ROLES);
}
