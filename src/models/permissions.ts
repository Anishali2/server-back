import roles from "./../config/roles.json";
class Permissions {
  permissions: [];
  constructor() {
    this.permissions = [];
  }

  getPermissionsByRoleName(roleName: string) {
    const role = roles.roles.find((r) => r.name === roleName);
    return role ? role.permissions : [];
  }
}

export default Permissions;
