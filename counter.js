//set initial count to zero

let count = 0;

//get button and value elements

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

//loop through each btn to change values accordingly using the forEach method and event parameter

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--;
        } else if (styles.contains("increase")) {
            count++;
        } else {
            count = 0;
        }

        //change color of text 

        if (count < 0) {
            value.style.color = "red";
        } else if (count > 0) {
            value.style.color = "green";
        } else {
            value.style.count = "blue"
        }

        value.textContent = count;
    })
})