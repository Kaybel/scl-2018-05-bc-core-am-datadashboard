const btnAlumnas = document.getElementById('btn-alumnas');
const btnProgreso = document.getElementById('botonesDeDatosProgreso');
const usersJSON = '../../../data/cohorts/lim-2018-03-pre-core-pw/users.json';
const progressJSON = '../../../data/cohorts/lim-2018-03-pre-core-pw/progress.json';
const cohortsJSON = '../../../../data/cohorts/cohorts.json';
let cohorts = Object.entries(cohortsJSON);
let data = Object.entries(usersJSON);
let progress = Object.entries(progressJSON).find(element => element[0] == progress.id)[1];
let resultPercent = '';

let coh = (cohort, (elementJSON)  => {

/*  forEach( in cohortsJSON); {
    return cohorts[0]};
});
*/  
fetch(usersJSON)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    renderUsers(data);
  });

fetch(progressJSON)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    renderUsers(data);
  });

fetch(cohortsJSON)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    renderUsers(data);
  });

const renderUsers = data => {
  btnAlumnas.addEventListener('click', () => {
    // forIn recorre objetos y accede a las propiedades
    // for y forEach recorre arrays
    const render = data.forEach(element => {
      return containerStudents.innerHTML += `<p>${element.name.toUpperCase()}</p>`;
    });
    return render;
  });
}; 


window.computeUsersStats = (user, progress, courses) => {

};

window.sortUsers = (users, orderBy, orderDirection) => {

};
window.filterUsers = (users, search) => {
  
};
window.processCohortData = (options) => {

};