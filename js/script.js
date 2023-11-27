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

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        } else {
            entry.target.classList.remove('in-view');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(element => {
    observer.observe(element);
});

document.querySelector("#arrow_down").addEventListener('click', () => {
    document.querySelector("#about_home_screen").scrollIntoView({behavior: "smooth"});
});

document.querySelector("#download-content").addEventListener('click', () => {
    document.querySelector("#download-content a").click();
});

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

const currentYear = new Date().getFullYear();
document.getElementById("copyright").innerHTML =`© ${currentYear}  Tjerk Symens`;