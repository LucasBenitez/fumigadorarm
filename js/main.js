const iconsContainer = document.querySelector("#iconContainer");

console.log(iconsContainer.childNodes)

const iconWsp = document.querySelector("#iconWsp");
const iconFace = document.querySelector("#iconFace");
const iconContact = document.querySelector("#iconContact");
const inputContainerWsp = document.querySelector("#inputContainerWsp");

//

const homeContent = document.querySelector("#homeContent");
const formContainer = document.querySelector("#formContainer");
const homeBotton = document.querySelector("#homeButton");

iconContact.addEventListener('click', () => {
    homeContent.classList.add('d-none', 'fadeOutLeft');
    formContainer.classList.toggle('d-none');
});

homeBotton.addEventListener('click', () => {
    formContainer.classList.toggle('d-none', 'fadeOutLeft');
    homeContent.classList.remove('d-none');
});



/*iconWsp.addEventListener('click', (e) => {
    console.log(e);
    iconWsp.classList.toggle('icon-translate');
    iconWsp.classList.toggle('active');
    inputContainerWsp.classList.toggle('d-none');
    iconFace.classList.toggle('mt-3');
    iconContact.classList.toggle('mt-3');
});

const buttonWsp = document.querySelector("#button-wsp");

buttonWsp.addEventListener('click', () => {
    let { value } = document.querySelector("#wspMessage");

    let url = `https://api.whatsapp.com/send?phone=1155011250&text=${value}`
    console.log(url);
});

function translateText(value) {
    let valueArr = value.split(" ")
    for (let i in valueArr) {
        console.log(valueArr[i])
    }
    console.log(valueArr)
}

translateText("Hola que tal");*/