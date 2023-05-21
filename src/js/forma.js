const formBtn = document.forms.formaEmail;
const inputEmail = document.querySelector('.forma__input');
const form = document.querySelector('.forma__email');
const wrapper = document.querySelector('.wrapper');

const validateEmail = (str) => {
  const emailTest = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/iu;
  return emailTest.test(str);
};

const cheakValidateEmail = () => {
  if (inputEmail.value === '') {
    form.classList.remove('error')
    return false
  }
  if (!validateEmail(inputEmail.value)) {
    form.classList.add('error')
    return false;
  } else {
    form.classList.remove('error')
    return true;
  }
}

const funAJAX = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'url');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      popup('SUCCESS!')
    } else if (xhr.readyState === 4 && xhr.status !== 200) {
      popup('Error!', 'don\'t')
    }
    inputEmail.value = '';
  }
  xhr.send();
}

const sendForm = (e) => {
  e.preventDefault();
  if (cheakValidateEmail()) {
    funAJAX()
  }
}

const popup = (answer, part = '') => {
  wrapper.classList.add('bg');
  const popup = `
  <div class="popup">
  <div class="popup__body">
    <button class="popup__close close-popup"></button>
    <div class="popup__content content-popup">
      <h2 class="content-popup__title">${answer}</h2>
      <div class="content-popup__text">You ${part} have successfully subscribed to the email newsletter</div>
      <button class="content-popup__button btn btn_close close-popup">Close</button>
    </div>
  </div>
</div>`;
  wrapper.insertAdjacentHTML('beforeend', popup);
}

export const closePopup = (e) => {
  const closePopupBtns = document.querySelectorAll('.close-popup');
  const popup = document.querySelector('.popup');
  const bg = document.querySelector('.bg')
  for (let i = 0; i < closePopupBtns.length; i++) {
    if (e.target === closePopupBtns[i] || e.target === bg) {
      wrapper.classList.remove('bg');
      popup.remove();
    }
  }
}

inputEmail.addEventListener('input', cheakValidateEmail)
formBtn.addEventListener('submit', sendForm);
