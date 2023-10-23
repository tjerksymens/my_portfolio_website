const currentYear = new Date().getFullYear();
document.getElementById("currentYear").innerHTML =` ${currentYear} `;

document.querySelector('#div_homeease').addEventListener('click', () => {
    window.open('https://homeease.azurewebsites.net/index.php', '_blank');
});
document.querySelector('#div_promptplaza').addEventListener('click', () => {
    window.open('https://promptplaza.azurewebsites.net/', '_blank');
});
document.querySelector('#div_reactnative').addEventListener('click', () => {
    window.open('https://github.com/tjerksymens/examen_mobile_development', '_blank');
});