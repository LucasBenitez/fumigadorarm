const questionsSection = document.querySelector('#questions');
const btnBug = document.getElementById('btnBug');
const iElement = document.createElement('i');
const aElement = document.createElement('a');
const divElement = document.createElement('div');
//console.log(iElement, aElement)

questionsSection != null ? questionSectionFunc() : null;
btnBug != null ? btnBugFunc() : null;

function btnBugFunc() {
    btnBug.addEventListener('click', (e) => {
        let { target } = e;
        let icon, parent;
        switch (target.nodeName) {
            case iElement.nodeName: {
                icon = target;
                parent = target.parentNode.parentNode;
                icon.classList.contains('fa-chevron-down') ? icon.classList.replace('fa-chevron-down', 'fa-times') : icon.classList.replace('fa-times', 'fa-chevron-down');
                break;
            }
            case divElement.nodeName: {
                icon = target.childNodes[0];
                parent = target;
                icon.classList.contains('fa-chevron-down') ? icon.classList.replace('fa-chevron-down', 'fa-times') : icon.classList.replace('fa-times', 'fa-chevron-down');
                break;
            }
            default: {
                icon = target.childNodes[1].childNodes[0];
                parent = target;
                console.log(icon);
                icon.classList.contains('fa-chevron-down') ? icon.classList.replace('fa-chevron-down', 'fa-times') : icon.classList.replace('fa-times', 'fa-chevron-down');
                break;
            }
        }
    });
}

function questionSectionFunc() {
    questionsSection.addEventListener("click", (e) => {
        //console.log(e)
        let { target } = e;
        let icon;
        let parent;
        // console.log(icon)
        //console.log(target.nodeName === iElement.nodeName, target.nodeName == aElement.nodeName)
        if (target.nodeName == iElement.nodeName) {
            icon = target;
            parent = icon.parentNode.parentNode;
            //console.log(parent)
            parent.classList.contains('white-circle') ? parent.classList.replace("white-circle", "white-circle-active") : parent.classList.replace("white-circle-active", "white-circle");
            icon.classList.contains('white-circle') ? icon.classList.replace("white-circle", "red") : icon.classList.replace("red", "white-circle");
            icon.classList.contains('fa-chevron-down') ? icon.classList.replace("fa-chevron-down", "fa-times") : icon.classList.replace("fa-times", "fa-chevron-down");
            parent.classList.toggle("z-depth-1");
            // console.log("is i Element")
        }
        else if (target.nodeName === aElement.nodeName) {
            parent = target;
            icon = parent.childNodes[1].childNodes[0];
            //console.log(icon)
            parent.classList.contains('white-circle') ? parent.classList.replace("white-circle", "white-circle-active") : parent.classList.replace("white-circle-active", "white-circle");
            icon.classList.contains('white-circle') ? icon.classList.replace("white-circle", "red") : icon.classList.replace("red", "white-circle");
            icon.classList.contains('fa-chevron-down') ? icon.classList.replace("fa-chevron-down", "fa-times") : icon.classList.replace("fa-times", "fa-chevron-down");
            //icon.classList.toggle("icon-move");
            parent.classList.toggle("z-depth-1");
            //console.log("is a Element")
        }
        else if (target.nodeName === divElement.nodeName) {
            icon = target.childNodes[0];
            parent = target.parentNode;
            //console.log(icon)
            parent.classList.contains('white-circle') ? parent.classList.replace("white-circle", "white-circle-active") : parent.classList.replace("white-circle-active", "white-circle");
            icon.classList.contains('white-circle') ? icon.classList.replace("white-circle", "red") : icon.classList.replace("red", "white-circle");
            icon.classList.contains('fa-chevron-down') ? icon.classList.replace("fa-chevron-down", "fa-times") : icon.classList.replace("fa-times", "fa-chevron-down");
            //icon.classList.toggle("icon-move");
            parent.classList.toggle("z-depth-1");
            //console.log("is a Element")
        }
    });
}
