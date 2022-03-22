const mainUrl = 'https://api.github.com/users';

export const getUserData = userName => {
  return fetch(`${mainUrl}/${userName}`).then(userData => userData.json());
};

export const getReposList = url => {
  return fetch(url).then(reposList => reposList.json());
};
