const iconsContainer = document.querySelector("#iconContainer");
//console.log(iconsContainer.childNodes)
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

let templateSuccess = `<div class="alert alert-success" role="alert">
<h4 class="alert-heading font-weight-bold">Muchas Gracias!</h4>
<p>Tu mensaje se a enviado correctamente y a la brevedad nos pondremos en contacto contigo</p>
<hr>
<p class="mb-0">Cualquier consulta que necesites realizar de forma inmediata podes enviarnos un correo electronico a contacto@fumigacionesrm.com.ar o enviarnos un <a href="https://wa.me/5491131039463?text=Hola%2C%20que%20tal%3F%2C%20vengo%20desde%20tu%20web%20y%20necesito%20que%20me%20asesores.." target="_blank" class="font-weight-bold text-success">Whatsapp</a></p>
</div>`;

$('#contact-form').submit(function(e) {
    e.preventDefault();
    const postValue = {
        name: $('#name').val(),
        email: $('#emailInput').val(),
        phone: $('#phone').val(),
        message: $('#message').val(),
        bugSelect: $('#bugSelect').val(),
        placeSelect: $('#placeSelect').val()
    };
    console.log(postValue)
        // $.post('php/addMessage.php', postValue, function(res) {
        //     console.log(res)
        //     if (res === '200') {
        //         $('#response').html(templateSuccess)
        //         //$('#formContact').addClass('d-none')
        //         //$('#successMessageContainer').removeClass('d-none').addClass('fadeInLeft');
        //     }

    //     $("formContact").trigger('reset');
    // });
});