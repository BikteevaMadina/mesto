export default class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _checkResult(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialCards() {
    // получение карточек методом GET
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    }).then((res) => this._checkResult(res));
  }

  addNewCard(name, link) {
    // добавление карточки методом POST
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    }).then((res) => this._checkResult(res));
  }

  deleteCard(cardId) {
    // удаление карточки
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => this._checkResult(res));
  }

  addLike(id) {
    // поставить лайк
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: "PUT",
      headers: this._headers,
    }).then((res) => this._checkResult(res));
  }

  deleteLike(id) {
    // удаление лайк
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => this._checkResult(res));
  }

  getUserInfo() {
    // получение информации пользователя
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then((res) => this._checkResult(res));
  }

  setInfo(name, info) {
    // изменение информации пользователя
    return fetch(`${this._baseUrl}/users/me`, {
      // методом PATCH
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: info,
      }),
    }).then((res) => this._checkResult(res));
  }

  setAvatar(url) {
    // изменение аватара пользователя
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      // методом PATCH
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: url,
      }),
    }).then((res) => this._checkResult(res));
  }
}
