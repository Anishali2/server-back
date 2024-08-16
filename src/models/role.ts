import roles from "./../config/roles.json";
interface RolesInterface {
  name: string;
}
class Roles {
  roles: RolesInterface[];
  constructor() {
    this.roles = roles.roles;
  }
  getRoles() {
    return this.roles;
  }
  getRoleName(name: string) {
    return this.roles.find((role) => role["name"] === name);
  }
}

export default Roles;
