(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}var n=function(){function e(t){var n=t.userNameSelector,r=t.userInfoSelector,o=t.userAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n),this._userInfo=document.querySelector(r),this._userAvatar=document.querySelector(o)}var n,r;return n=e,(r=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,info:this._userInfo.textContent}}},{key:"setUserInfo",value:function(e,t){this._userName.textContent=e,this._userInfo.textContent=t}},{key:"setUserAvatar",value:function(e){this._userAvatar.src=e}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,i(r.key),r)}}function i(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===r(t)?t:String(t)}var u=function(){function e(t,n,r,o){var u,a,c,l=this,s=o.handleCardClick,f=o.handleCardLike,p=o.handleCardDeleteBtn;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),u=this,c=function(){l._likeCardBtn.addEventListener("click",(function(){l._handleCardLike(l,l._cardId)})),l._cardLink.addEventListener("click",(function(){l._handleCardClick(l._name,l._link)})),l._deleteCardBtn.addEventListener("click",(function(){l._handleCardDeleteBtn(l._cardId,l)}))},(a=i(a="_setEventListeners"))in u?Object.defineProperty(u,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):u[a]=c,this._name=t.name,this._link=t.link,this._elementsTemplate=n,this._newCard=this._getTemplate(),this._deleteCardBtn=this._newCard.querySelector(".elements__delete"),this._likeCardBtn=this._newCard.querySelector(".elements__like"),this._likesQuantity=this._newCard.querySelector(".elements__like-quantity"),this._cardName=this._newCard.querySelector(".elements__title"),this._cardLink=this._newCard.querySelector(".elements__image"),this._userId=r,this._cardId=t._id,this._ownerId=t.owner._id,this._isLike=!1,this._likes=t.likes,this._handleCardLike=f,this._handleCardDeleteBtn=p,this._handleCardClick=s}var t,n;return t=e,(n=[{key:"_likeBtnOnClick",value:function(){this._likeCardBtn.classList.toggle("elements__like_active")}},{key:"isLike",get:function(){return this._isLike}},{key:"setLikes",value:function(e){this._likes=e,this._likesQuantity.textContent=this._likes.length}},{key:"toggleLike",value:function(){this._likeCardBtn.classList.toggle("elements__like_active")}},{key:"toggleIsLike",value:function(){this._isLike=!this._isLike}},{key:"deleteCard",value:function(){this._newCard.remove()}},{key:"createCard",value:function(){var e=this;return this._setEventListeners(),this._cardName.textContent=this._name,this._cardLink.src=this._link,this._cardLink.alt=this._name,this._likesQuantity.textContent=this._likes.length,this._userId!==this._ownerId&&(this._deleteCardBtn.style.display="none"),this._likes.some((function(t){return t._id===e._userId}))&&(this._likeCardBtn.classList.add("elements__like_active"),this._isLike=!0),this._newCard}},{key:"_getTemplate",value:function(){return document.querySelector(this._elementsTemplate).content.querySelector(".elements__element").cloneNode(!0)}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,s(r.key),r)}}function l(e,t,n){return(t=s(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===a(t)?t:String(t)}var f=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,"_hasInvalidInput",(function(){return r._inputList.some((function(e){return!e.validity.valid}))})),l(this,"resetValidation",(function(){r._toggleBtnSubmit(),r._inputList.forEach((function(e){r._hideInputError(e)}))})),l(this,"_hideInputError",(function(e){var t=r._formElement.querySelector("#".concat(e.id,"-error"));e.classList.remove(r._validationConfig.inputErrorClass),t.classList.remove(r._validationConfig.errorClass),t.textContent=""})),l(this,"_checkInputValidity",(function(e){e.validity.valid?r._hideInputError(e):r._showInputError(e,e.validationMessage)})),l(this,"_toggleBtnSubmit",(function(){r._hasInvalidInput(r._inputList)?(r._buttonSubmit.classList.add(r._validationConfig.inactiveButtonClass),r._buttonSubmit.disabled=!0):(r._buttonSubmit.classList.remove(r._validationConfig.inactiveButtonClass),r._buttonSubmit.disabled=!1)})),this._formElement=n,this._validationConfig=t,this._buttonSubmit=this._formElement.querySelector(this._validationConfig.submitButtonSelector),this._inputList=Array.from(this._formElement.querySelectorAll(this._validationConfig.inputSelector))}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector("#".concat(e.id,"-error"));n.classList.add(this._validationConfig.errorClass),n.textContent=t,e.classList.add(this._validationConfig.inputErrorClass)}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleBtnSubmit()}))}))}},{key:"enableValidation",value:function(){this._toggleBtnSubmit(),this._setEventListeners()}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==p(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===p(o)?o:String(o)),r)}var o}var d=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"prependAddItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e){e.forEach(this._renderer)}},{key:"addItem",value:function(e){this._container.append(e)}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==m(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===m(o)?o:String(o)),r)}var o}var b=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_checkResult",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(t){return e._checkResult(t)}))}},{key:"addNewCard",value:function(e,t){var n=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then((function(e){return n._checkResult(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._checkResult(e)}))}},{key:"addLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return t._checkResult(e)}))}},{key:"deleteLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return t._checkResult(e)}))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(t){return e._checkResult(t)}))}},{key:"setInfo",value:function(e,t){var n=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then((function(e){return n._checkResult(e)}))}},{key:"setAvatar",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return t._checkResult(e)}))}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,g(r.key),r)}}function g(e){var t=function(e,t){if("object"!==v(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===v(t)?t:String(t)}var S=function(){function e(t){var n,r,o,i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,o=function(e){"Escape"===e.key&&i.close()},(r=g(r="_handleEscClose"))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this._popupElement=document.querySelector(t)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup")||t.target.classList.contains("popup__button-close"))&&e.close()}))}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==k(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==k(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===k(o)?o:String(o)),r)}var o}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},E.apply(this,arguments)}function C(e,t){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},C(e,t)}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(r);if(o){var n=O(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===k(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImageLink=t._popupElement.querySelector(".popup__image"),t._popupImageName=t._popupElement.querySelector(".popup__image-caption"),console.log(),t}return t=u,(n=[{key:"open",value:function(e,t){this._popupImageLink.src=t,this._popupImageLink.alt=e,this._popupImageName.textContent=e,E(O(u.prototype),"open",this).call(this)}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(S);function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==L(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==L(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===L(o)?o:String(o)),r)}var o}function I(){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=T(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},I.apply(this,arguments)}function q(e,t){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},q(e,t)}function T(e){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},T(e)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&q(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=T(r);if(o){var n=T(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===L(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var n,r=t.handelFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handelFormSubmit=r,n._formElement=n._popupElement.querySelector(".popup__form"),n._inputList=n._formElement.querySelectorAll(".popup__input"),n._submitBtn=n._formElement.querySelector(".popup__submit"),n}return t=u,(n=[{key:"submitingBtn",value:function(e){this._submitBtn.value=e}},{key:"setInputValues",value:function(e){this._inputList.forEach((function(t){t.value=e[t.name]}))}},{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;I(T(u.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._handelFormSubmit(e._getInputValues())}))}},{key:"close",value:function(){I(T(u.prototype),"close",this).call(this),this._formElement.reset()}}])&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(S),R=document.querySelector("#popup-profile-edit"),U=document.querySelector("#popup-card-add"),A=document.querySelector(".profile__button-edit"),x=document.querySelector(".profile__button-add"),V=(U.querySelector("#popup__submit-add"),document.querySelector(".elements__list"),document.querySelector("#elements-template"),document.querySelector(".name"),document.querySelector(".link"),document.querySelector(".popup_delete-card"),"#popup-avatar-edit"),D=document.querySelector(V),N=D.querySelector("#form-avatar-edit"),F=(D.querySelector(".popup__input_link"),document.querySelector(".profile__button-edit-avatar")),J=(document.querySelector(".popup__input_post_name"),document.querySelector(".popup__input_post_activity"),document.querySelector(".popup__image"),document.querySelector(".popup__image-caption"),U.querySelector(".popup__form")),Q=R.querySelector(".popup__form"),z={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function H(e){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H(e)}function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==H(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==H(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===H(o)?o:String(o)),r)}var o}function $(){return $="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=K(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},$.apply(this,arguments)}function G(e,t){return G=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},G(e,t)}function K(e){return K=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},K(e)}var W=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&G(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=K(r);if(o){var n=K(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===H(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handleCardDelete=t,n._formElement=n._popupElement.querySelector(".popup__form"),n._submitBtn=n._formElement.querySelector(".popup__submit"),n}return t=u,(n=[{key:"open",value:function(e,t){$(K(u.prototype),"open",this).call(this),this._id=e,this._card=t}},{key:"setEventListeners",value:function(){var e=this;this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._handleCardDelete(e._id,e._card)})),$(K(u.prototype),"setEventListeners",this).call(this)}}])&&M(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(S);function X(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Y=new b({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-60",headers:{authorization:"99ec2b63-21d0-4a18-afc1-bc28f717f199","Content-Type":"application/json"}}),Z=null,ee=new d({renderer:function(e){var t=te(e);ee.addItem(t)}},".elements__list"),te=function(e){return new u(e,"#elements-template",Z,{handleCardClick:function(e,t){ae.open(e,t)},handleCardLike:function(e){e.isLike?Y.deleteLike(e._cardId).then((function(t){e.setLikes(t.likes),e.toggleIsLike(),e.toggleLike()})).catch((function(e){console.log(e)})):Y.addLike(e._cardId).then((function(t){e.setLikes(t.likes),e.toggleIsLike(),e.toggleLike()})).catch((function(e){console.log(e)}))},handleCardDeleteBtn:function(e,t){ne.open(e,t)}}).createCard()};Promise.all([Y.getUserInfo(),Y.getInitialCards()]).then((function(e){var t,n,r,o=(r=2,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(n,r)||function(e,t){if(e){if("string"==typeof e)return X(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?X(e,t):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[0],u=o[1];oe.setUserInfo(i.name,i.about),oe.setUserAvatar(i.avatar),Z=i._id,t=u,ee.renderItems(t)})).catch((function(e){console.log(e)}));var ne=new W("#popup-delete-card",(function(e,t){return function(e,t){Y.deleteCard(e,t).then((function(e){t.deleteCard(e.card),ne.close()})).catch((function(e){console.log(e),handelFormSubmit}))}(e,t)}));ne.setEventListeners();var re=new B(V,{handelFormSubmit:function(e){console.log(e),re.submitingBtn("Сохранение..."),Y.setAvatar(e.link).then((function(e){oe.setUserAvatar(e.avatar),re.close()})).catch((function(e){console.log(e)})).finally(setTimeout((function(){return re.submitingBtn("Сохранить")}),100))}});re.setEventListeners();var oe=new n({userNameSelector:".profile__user",userInfoSelector:".profile__discription",userAvatarSelector:".profile__avatar"}),ie=new B("#popup-profile-edit",(function(e){ie.submitingBtn("Сохранение..."),Y.setInfo(e.name,e.info).then((function(e){oe.setUserInfo(e.name,e.about),ie.close()})).catch((function(e){console.log(e)})).finally(setTimeout((function(){return ie.submitingBtn("Сохранить")}),100))}));ie.setEventListeners();var ue=new B("#popup-card-add",(function(e){ue.submitingBtn("Сохранение..."),Y.addNewCard(e.name,e.link).then((function(e){var t=te(e);ee.prependAddItem(t),ue.close()})).catch((function(e){console.log(e)})).finally(setTimeout((function(){return ue.submitingBtn("Создать")}),100))}));ue.setEventListeners();var ae=new j("#popup-image-zoom");ae.setEventListeners(),A.addEventListener("click",(function(){le.resetValidation(),ie.setInputValues(oe.getUserInfo()),ie.open()})),x.addEventListener("click",(function(){ce.resetValidation(),ue.open()})),F.addEventListener("click",(function(){se.resetValidation(),re.open()}));var ce=new f(z,J),le=new f(z,Q),se=new f(z,N);se.enableValidation(),ce.enableValidation(),le.enableValidation()})();