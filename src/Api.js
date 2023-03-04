export default class Api {
  constructor(сomponents) {
    this._baseUrl = сomponents._baseUrl;
    this._headers = сomponents._headers;
  }

  _checkResult(res) {
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  }

  getInitialCards() {                           // получение карточек методом GET
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    }).then((res) =>this._checkResult(res))
  }

  addNewCard(name, link) {                      // добавление карточки методом POST
    return fetch(`${this._baseUrl}`,{
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link
      })
    }).then((res) =>this._checkResult(res))
  }

  likeCard(cardId) {                              // поставить лайк
    return  fetch(`${this._baseUrl}/card/${cardId}/likes`,{
      method: 'PUT',
      headers: this._headers,
  }).then((res) =>this._checkResult(res))
  }

  deletLikeCard(cardId) {                        // удаление лайк
  return  fetch(`${this._baseUrl}/card/${cardId}/likes`, {
    method: 'DELETE',
    headers: this._headers,
  }).then((res) =>this._checkResult(res))
}

  deleteCard(cardId) {                           // удаление карточки
    return  fetch(`${this._baseUrl}/card/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
  }).then((res) =>this._checkResult(res))
}

  getUserInfo() {                               // получение информации пользователя
    return fetch(`${this._baseUrl}/users/me`, { //   методом GET
      headers: this._headers,
    }).then((res) =>this._checkResult(res))
  }

  setInfo(name, info) {                   // изменение информации пользователя
    return fetch(`${this._baseUrl}/users/me`,{ // методом PATCH
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: info
      }),
    }).then((res) =>this._checkResult(res))
  }

  setAvatar(newImgLink) {                            // изменение аватара пользователя
    return fetch(`${this._baseUrl}/users/me/avatar`,{ // методом PATCH
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: newImgLink
      }),
    }).then((res) =>this._checkResult(res))
  }
 }

