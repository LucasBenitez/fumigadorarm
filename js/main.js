const iconsContainer = document.querySelector("#iconContainer");

console.log(iconsContainer.childNodes)

const iconWsp = document.querySelector("#iconWsp");
const iconFace = document.querySelector("#iconFace");
const iconContact = document.querySelector("#iconContact");
const inputContainerWsp = document.querySelector("#inputContainerWsp");

iconWsp.addEventListener('click', (e) => {
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
    console.log(value);
});