//import { renderer } from './src/scripts/renderer.js';
import { showSpinner } from './src/scripts/spinner.js';
import { getReposList, getUserData } from './src/scripts/workWithServer.js';

// use DOMContentLoaded => show default avatar (https://avatars3.githubusercontent.com/u10001)
// func showSpinner() before requests
// get userData from github => fetch(https://api.github.com/users/USERNAME) => data => {avatar_url, name, location, repos_url} =>
// fetch(repos_url) => data => {name} => .repo-list.append(repo-list__item)
// error => alert('Failed to load data')

const userAvatarElem = document.querySelector('.user__avatar');
userAvatarElem.src = 'https://avatars3.githubusercontent.com/u10001';

const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');
const nameFormInputElem = document.querySelector('.name-form__input');
const repoListElem = document.querySelector('.repo-list');

const onShowBtnHandler = () => {
  showSpinner(true);

  getUserData(nameFormInputElem.value)
    .then(userData => {
      const { avatar_url, name, location, repos_url } = userData;
      userAvatarElem.src = avatar_url;
      userNameElem.textContent = name;
      userLocationElem.textContent = `from ${location}`;

      return repos_url;
    })
    .then(url => getReposList(url))
    .then(reposlist => {
      const reposElems = [...reposlist].map(({ name }) => {
        const repoElem = document.createElement('li');
        repoElem.classList.add('repo-list__item');
        repoElem.textContent = name;
        return repoElem;
      });
      repoListElem.replaceChildren(...reposElems);
    })
    .then(() => {
      showSpinner(false);
      nameFormInputElem.value = '';
    })
    .catch(() => {
      alert('Failed to load data');
      showSpinner(false);
    });
};

const showBtn = document.querySelector('.name-form__btn');
showBtn.addEventListener('click', () => onShowBtnHandler());
//const showBtn = document.querySelector('.name-form__btn');
//showBtn.addEventListener('click', () => renderer());
