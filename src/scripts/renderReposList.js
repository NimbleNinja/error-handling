const repoListElem = document.querySelector('.repo-list');

export const renderReposList = reposList => {
  const reposElems = reposList.map(({ name }) => {
    const repoElem = document.createElement('li');
    repoElem.classList.add('repo-list__item');
    repoElem.textContent = name;
    return repoElem;
  });
  repoListElem.replaceChildren(...reposElems);
};
