const birthdate = "2002-05-25";

function calculateAge(birthdate) {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function updateAge() {
    document.getElementById("age").innerHTML = calculateAge(birthdate);
}

updateAge();

setInterval(updateAge, 365*24*60*60*1000);

const currentYear = new Date().getFullYear();
document.getElementById("copyright").innerHTML =`© ${currentYear}  Tjerk Symens`;

document.querySelector('#liveHome').addEventListener('click', () => {
    window.open('https://homeease.azurewebsites.net/index.php', '_blank');
});
document.querySelector('#gitHome').addEventListener('click', () => {
    window.open('https://github.com/tjerksymens/HomeEase', '_blank');
});
document.querySelector('#livePrompt').addEventListener('click', () => {
    window.open('https://promptplaza.azurewebsites.net/', '_blank');
});
document.querySelector('#gitPrompt').addEventListener('click', () => {
    window.open('https://github.com/tjerksymens/xd_aiai_group_DEV4', '_blank');
});
document.querySelector('#gitReact').addEventListener('click', () => {
    window.open('https://github.com/tjerksymens/examen_mobile_development', '_blank');
});