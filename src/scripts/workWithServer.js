const mainUrl = 'https://api.github.com/users';

export const getUserData = userName => {
  return fetch(`${mainUrl}/${userName}`).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Failed to load data');
  });
};

export const getReposList = url => {
  return fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Failed to load data');
  });
};
