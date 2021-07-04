export default class UserProfile {
  id = "";
  previousApiId = "";
  firstName = "";
  lastName = "";
  email = "";
  constructor() {
    if (!UserProfile._instance) {
      UserProfile._instance = this;
    }
    return UserProfile._instance;
  }
  static getInstance() {
    return this._instance;
  }
}
