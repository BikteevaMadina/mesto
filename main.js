(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,r(o.key),o)}}function n(e,t,n){return(t=r(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===e(n)?n:String(n)}var o=function(){function e(t,r,o,i){var u=this,a=i.handleCardClick,c=i.handleCardLike,l=i.handleCardDeleteBtn;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n(this,"_deletLike",(function(){u._likeCardBtn.classList.remove("element__like_active")})),n(this,"_setEventListeners",(function(){u._deleteCardBtn.addEventListener("click",(function(){u._handleCardDeleteBtn(u._cardId,u._newCard)})),u._likeCardBtn.addEventListener("click",(function(){u._handleCardLike(u._cardId),u.toggleLike()})),u._cardLink.addEventListener("click",(function(){u._handleCardClick(u._name,u._link)}))})),this._name=t.name,this._link=t.link,this._elementsTemplate=r,this._handleCardClick=a,this._newCard=this._getTemplate(),this._deleteCardBtn=this._newCard.querySelector(".elements__delete"),this._likeCardBtn=this._newCard.querySelector(".elements__like"),this._likesQuantity=this._newCard.querySelector(".elements__like-quantity"),this._cardName=this._newCard.querySelector(".elements__title"),this._cardLink=this._newCard.querySelector(".elements__image"),this._userId=o,this._cardId=t._id,this._ownerId=t.owner._id,this._likes=t.likes,this._handleCardLike=c,this._handleCardDeleteBtn=l}var r,o;return r=e,(o=[{key:"_getTemplate",value:function(){return document.querySelector(this._elementsTemplate).content.querySelector(".elements__element").cloneNode(!0)}},{key:"_addLike",value:function(){this._likeCardBtn.classList.add("elements__like_active")}},{key:"createCard",value:function(){return this._cardName.textContent=this._name,this._cardLink.src=this._link,this._newCard.alt=this._name,this._likesQuantity.textContent=this._likes.length,this._ownerId!==this._userId&&(this._deleteCardBtn.style.display="none"),this.setLikes(this._likes),this._addEventListener(),this._newCard}},{key:"testExistencelike",value:function(){var e=this;return this._likes.find((function(t){return t._id===e._userId}))}},{key:"toggleLike",value:function(){this.testExistencelike()?this._addLike():this._deletLike()}},{key:"setLikes",value:function(e){this._Likes=e,this._likesQuantity.textContent=this._likes.length,this.toggleLike()}},{key:"getIdCard",value:function(){return this._cardId}}])&&t(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),e}();function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,c(r.key),r)}}function a(e,t,n){return(t=c(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){var t=function(e,t){if("object"!==i(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===i(t)?t:String(t)}var l=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),a(this,"_hasInvalidInput",(function(){return r._inputList.some((function(e){return!e.validity.valid}))})),a(this,"resetValidation",(function(){r._toggleBtnSubmit(),r._inputList.forEach((function(e){r._hideInputError(e)}))})),a(this,"_hideInputError",(function(e){var t=r._formElement.querySelector(".".concat(e.id,"-error"));t.classList.remove(r._validationConfig.errorClass),t.textContent="",e.classList.remove(r._validationConfig.inputErrorClass)})),a(this,"_checkInputValidity",(function(e){e.validity.valid?r._hideInputError(e):r._showInputError(e,e.validationMessage)})),a(this,"_toggleBtnSubmit",(function(){r._hasInvalidInput(r._inputList)?r.toggleBtn():(r._buttonSubmit.classList.remove(r._validationConfig.inactiveButtonClass),r._buttonSubmit.disabled=!1)})),this._formElement=n,this._validationConfig=t,this._buttonSubmit=this._formElement.querySelector(this._validationConfig.submitButtonSelector),this._inputList=Array.from(this._formElement.querySelectorAll(this._validationConfig.inputSelector))}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector(".".concat(e.id,"-error"));n.classList.add(this._validationConfig.errorClass),n.textContent=t,e.classList.add(this._validationConfig.inputErrorClass)}},{key:"toggleBtn",value:function(){this._buttonSubmit.classList.add(this._validationConfig.inactiveButtonClass),this._buttonSubmit.disabled=!0}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleBtnSubmit()}))}))}},{key:"enableValidation",value:function(){this._toggleBtnSubmit(),this._setEventListeners()}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==s(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===s(o)?o:String(o)),r)}var o}var p=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"prependAddItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e){e.forEach(this._renderer)}},{key:"addItem",value:function(e){this._container.append(e)}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==y(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===y(o)?o:String(o)),r)}var o}var m=function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=n,this._headers=r}var t,n;return t=e,(n=[{key:"_checkResult",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(t){return e._checkResult(t)}))}},{key:"addNewCard",value:function(e,t){var n=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then((function(e){return n._checkResult(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._checkResult(e)}))}},{key:"addLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes/"),{method:"PUT",headers:this._headers}).then((function(e){return t._checkResult(e)}))}},{key:"deleteLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes/"),{method:"DELETE",headers:this._headers}).then((function(e){return t._checkResult(e)}))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(t){return e._checkResult(t)}))}},{key:"setInfo",value:function(e,t){var n=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then((function(e){return n._checkResult(e)}))}},{key:"setAvatar",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return t._checkResult(e)}))}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,b(r.key),r)}}function b(e){var t=function(e,t){if("object"!==h(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===h(t)?t:String(t)}var _=function(){function e(t){var n,r,o,i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,o=function(e){"Escape"===e.key&&i.close()},(r=b(r="_handleEscClose"))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this._popupElement=document.querySelector(t)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup")||t.target.classList.contains("popup__button-close"))&&e.close()}))}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==S(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===S(o)?o:String(o)),r)}var o}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},k.apply(this,arguments)}function w(e,t){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},w(e,t)}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(r);if(o){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImageLink=t._popupElement.querySelector(".popup__image"),t._popupImageName=t._popupElement.querySelector(".popup__image-caption"),t}return t=u,(n=[{key:"open",value:function(e,t){this._popupImageLink.src=t,this._popupImageLink.alt=e,this._popupImageName.textContent=e,k(E(u.prototype),"open",this).call(this)}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(_);function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==j(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==j(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===j(o)?o:String(o)),r)}var o}function L(){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=I(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},L.apply(this,arguments)}function P(e,t){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},P(e,t)}function I(e){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},I(e)}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&P(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=I(r);if(o){var n=I(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===j(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handelFormSubmit=t,n._formElement=n._popupElement.querySelector(".popup__form"),n._inputList=n._formElement.querySelectorAll(".popup__input"),n._submitBtn=n._formElement.querySelector(".popup__submit"),n}return t=u,(n=[{key:"submitingBtn",value:function(e){this._submitBtn.value=e}},{key:"setInputValues",value:function(e){this._inputList.forEach((function(t){t.value=e[t.name]}))}},{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;L(I(u.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._handelFormSubmit(e._getInputValues())}))}},{key:"close",value:function(){L(I(u.prototype),"close",this).call(this),this._formElement.reset()}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(_);function B(e){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(e)}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==B(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==B(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===B(o)?o:String(o)),r)}var o}var T=function(){function e(t){var n=t.userNameSelector,r=t.userInfoSelector,o=t.userAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n),this._userInfo=document.querySelector(r),this._userAvatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,info:this._userInfo.textContent}}},{key:"setUserInfo",value:function(e,t){this._userName.textContent=e,this._userInfo.textContent=t}},{key:"setUserAvatar",value:function(e){this._userAvatar.src=e}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),U=document.querySelector("#popup-profile-edit"),A=document.querySelector("#popup-card-add"),x=document.querySelector("#popup-image-zoom"),V=document.querySelector(".profile__button-edit"),D=document.querySelector(".profile__button-add"),N=(U.querySelector(".popup__button-close"),A.querySelector(".popup__button-close"),x.querySelector(".popup__button-close"),A.querySelector("#popup__submit-add"),document.querySelector(".elements__list"),document.querySelector("#elements-template"),document.querySelector(".name"),document.querySelector(".link"),document.querySelector(".profile__user"),document.querySelector(".profile__discription"),document.querySelector(".profile__avatar"),document.querySelector("#popup-delete-card"),document.querySelector("#popup-avatar-edit")),z=(document.querySelector(".popup__input_post_name"),document.querySelector(".popup__input_post_activity"),N.querySelector(".popup__input_link")),J=(document.querySelector(".popup__image"),document.querySelector(".popup__image-caption"),A.querySelector(".popup__form")),Q=U.querySelector(".popup__form"),F=N.querySelector("#form-avatar-edit"),H=document.querySelector(".profile__button-edit-avatar"),M={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function $(e){return $="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$(e)}function G(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==$(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==$(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===$(o)?o:String(o)),r)}var o}function K(){return K="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=X(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},K.apply(this,arguments)}function W(e,t){return W=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},W(e,t)}function X(e){return X=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},X(e)}var Y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&W(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=X(r);if(o){var n=X(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===$(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handelCardDelete=t,n._formElement=n._popupElement.querySelector(".popup__form"),n._submitBtn=n._formElement.querySelector(".popup__submit"),console.log(n._submitBtn),n}return t=u,(n=[{key:"open",value:function(e,t){K(X(u.prototype),"open",this).call(this),this._id=e,this._card=t}},{key:"setEventListeners",value:function(){var e=this;this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._handelCardDelete(e._id,e._card)})),K(X(u.prototype),"setEventListeners",this).call(this)}},{key:"deleteCard",value:function(){this._card.remove()}}])&&G(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(_);function Z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var ee=null,te=new m({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-60",headers:{autorization:"99ec2b63-21d0-4a18-afc1-bc28f717f199","Content-Type":"application/json"}}),ne=new p({renderer:function(e){var t=re(e);ne.addItem(t)}},".elements__list"),re=function(e){var t=new o(e,"#elements-template",ee,{handleCardClick:function(e,t){le.open(e,t)},handleCardLike:function(e){t.testExistencelike()?te.deleteLike(e).then((function(e){t.setLikes(e.likes)})).catch((function(e){console.log(e)})):te.addLike(e).then((function(e){t.setLikes(e.likes)})).catch((function(e){console.log(e)}))},handleCardDeleteBtn:function(e,t){oe.open(e,t)}});return t.createCard()};Promise.all([te.getUserInfo(),te.getInitialCards()]).then((function(e){var t,n,r,o=(r=2,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(n,r)||function(e,t){if(e){if("string"==typeof e)return Z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Z(e,t):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[0],u=o[1];ue.setUserInfo(i.name,i.about),ue.setUserAvatar(i.avatar),ee=i._id,t=u,ne.renderItems(t)})).catch((function(e){console.log(e)}));var oe=new Y("#popup-delete-card",(function(e,t){return function(e,t){te.deleteCard(e,t).then((function(e){oe.deleteCard(e.card),oe.close()})).catch((function(e){console.log(e)}))}(e,t)}));oe.setEventListeners();var ie=new q(N,(function(){ie.submitingBtn("Сохранение..."),te.setAvatar(z.value).then((function(e){ue.setUserAvatar(e.avatar),ie.close()})).catch((function(e){console.log(e)})).finally(ie.submitingBtn("Сохранить"))}));ie.setEventListeners();var ue=new T({userNameSelector:".profile__user",userInfoSelector:".profile__discription",userAvatarSelector:".profile__avatar"}),ae=new q("#popup-profile-edit",(function(e){ae.submitingBtn("Сохранение..."),te.setInfo(e.name,res.info).then((function(e){ue.setUserInfo(e.name,e.about),ae.close()})).catch((function(e){console.log(e)})).finally(ae.submitingBtn("Сохранить"))}));ae.setEventListeners();var ce=new q("#popup-card-add",(function(e){ce.submitingBtn("Сохранение..."),te.addNewCard(e.name,e.link).then((function(e){var t=re(e);ne.prependAddItem(t),ce.close()})).catch((function(e){console.log(e)})).finally(ce.submitingBtn("Создать"))}));ce.setEventListeners(),V.addEventListener("click",(function(){fe.resetValidation(),ae.setInputValues(ue.getUserInfo()),ae.open()})),D.addEventListener("click",(function(){se.resetValidation(),ce.open()})),H.addEventListener("click",(function(){pe.resetValidation(),ie.open()}));var le=new C("#popup-image-zoom");le.setEventListeners();var se=new l(M,J),fe=new l(M,Q),pe=new l(M,F);pe.enableValidation(),se.enableValidation(),fe.enableValidation()})();