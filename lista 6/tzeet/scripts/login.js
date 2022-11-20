function updateEmail(email)
{
    const regex = "^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+).(\.[a-z]{2,3})$";
    if(email.value.match(regex))
    {
        email.classList.remove("is-invalid");
        email.classList.add("is-valid");
        return true;
    }
    else
    {
        email.classList.remove("is-valid");
        email.classList.add("is-invalid");  
        return false;
    }
}
function updatePass(pass)
{
    if(pass.value.length >= 6)
    {
        pass.classList.remove("is-invalid");
        pass.classList.add("is-valid");

        return true;
    }
    else
    {
        pass.classList.remove("is-valid");
        pass.classList.add("is-invalid");  

        return false;
    }
}

function check(email,pass)
{
    if(updateEmail(email) && updatePass(pass))
    {
        document.getElementById("btn-login").classList.remove("disabled");
    }
    else
    {
        document.getElementById("btn-login").classList.add("disabled");
    }
}

let modal = new bootstrap.Modal('#modal-login');
modal.show();

let email = document.getElementById("input-email");
let pass = document.getElementById("input-pass");

email.addEventListener("input",(event) => check(email,pass));
pass.addEventListener("input",(event) => check(email,pass));

check(email,pass) 
