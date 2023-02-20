export class UserInfo {
  constructor({userNameSelector, userInfoSelector}) {
    this._userName = document.querySelector(userNameSelector);
    this._userInfo = document.querySelector(userInfoSelector);
  }

  getUserInfo() {
    return {
      name: this._userName.textcontent,
      info: this._userInfo.textcontent,
    }
  }

  setUserInfo(name, info) {
    this._userName.textcontent = name;
    this._userInfo.textcontent = info;
  }
}
