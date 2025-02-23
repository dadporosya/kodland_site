function handle() {
    let input_values = [];
    let inputs = document.querySelectorAll("input");
    let pass1 = document.querySelector(".pass_orig");
    let pass2 = document.querySelector(".pass_reenter");
    
    if (pass1.value != pass2.value) {
        alert("Пароли не совпадают!")
    }

    for (let i = 0; i < inputs.length; i++) {
        input_values.push(inputs[i].value)
    }
   
    console.log(input_values)

}

let button = document.querySelector('.btn');
button.addEventListener('click', handle);


