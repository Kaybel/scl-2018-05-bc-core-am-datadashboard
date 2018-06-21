const btnAlumnas = document.getElementById('btn-alumnas');
/*const btnStudents = document.getElementById('btn-alumnas'); */
const usersJSON = '../../../data/cohorts/lim-2018-03-pre-core-pw/users.json';

fetch(usersJSON)
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