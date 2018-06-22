/*const btnAlumnas = document.getElementById('btn-alumnas');
const btnProgreso = document.getElementById('botonesDeDatosProgreso');*/

const usersJSON = '../../../data/cohorts/lim-2018-03-pre-core-pw/users.json';
const progressJSON = '../../../data/cohorts/lim-2018-03-pre-core-pw/progress.json';
const cohortsJSON = '../../../../data/cohorts/cohorts.json';

/* Variables que guardarán json */
let users = {};
let progress = {};
let cohorts = {};

/* Promesas (retorno de json) */
fetch(usersJSON)
  .then(response => response.json())
  .then(data => {
    users = data;
    console.log(users);
    renderUsers(users);
  });

fetch(progressJSON)
  .then(response => response.json())
  .then(data => {
    progress = data;
    console.log(progress);
    renderUsers(progress);
  });

fetch(cohortsJSON)
  .then(response => response.json())
  .then(data => {
    cohorts = data;
    console.log(cohorts);
    renderUsers(cohorts);
  });

/* Declaración de objetos (constructor) */

/* Construcción objeto Quizzes */
class Quizzes {
  constructor (total, completed, percent, scoreSum, scoreAvg) {
    this.total = total;
    this.completed = completed;
    this.percent = percent;
    this.scoreSum = scoreSum;
    this.scoreAvg = scoreAvg;
  }
}

/* Construcción objeto Reads */

/* Construcción objeto Exercises */

/* Construcción objeto Progress */


window.computeUsersStats = (user, progress, courses) => {
  
};
window.sortUsers = (users, orderBy, orderDirection) => {

};
window.filterUsers = (users, search) => {

};
window.processCohortData = (options) => {

};