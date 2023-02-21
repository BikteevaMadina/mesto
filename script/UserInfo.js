export class UserInfo {
  constructor({userNameSelector, userInfoSelector}) {
    this._userName = document.querySelector(userNameSelector);
    this._userInfo = document.querySelector(userInfoSelector);
  }

  getUserInfo() {
    this._userProfile = {
      name: this._userName.textContent,
      info: this._userInfo.textContent,
    }

    return this._userProfile;
  }

  setUserInfo(name, info) {
    this._userName.textContent = name;
    this._userInfo.textContent = info;
  }
}
