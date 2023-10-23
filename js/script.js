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

document.querySelector('#div_homeease').addEventListener('click', () => {
    window.open('https://homeease.azurewebsites.net/index.php', '_blank');
});
document.querySelector('#div_promptplaza').addEventListener('click', () => {
    window.open('https://promptplaza.azurewebsites.net/', '_blank');
});
document.querySelector('#div_reactnative').addEventListener('click', () => {
    window.open('https://github.com/tjerksymens/examen_mobile_development', '_blank');
});