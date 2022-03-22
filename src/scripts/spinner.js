export const showSpinner = status => {
  const spinnerElem = document.querySelector('.spinner');

  if (status) {
    spinnerElem.classList.remove('spinner_hidden');
  } else {
    spinnerElem.classList.add('spinner_hidden');
  }
};
