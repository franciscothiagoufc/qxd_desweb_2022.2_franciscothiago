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

function updatePass(pass,checkpass)
{
    let result = true;
    if(pass.value.length >= 6)
    {
        pass.classList.remove("is-invalid");
        pass.classList.add("is-valid");
    }
    else
    {
        pass.classList.remove("is-valid");
        pass.classList.add("is-invalid");
        result = false;  
    }
    if(pass.value == checkpass.value)
    {
        checkpass.classList.remove("is-invalid");
        checkpass.classList.add("is-valid");
    }
    else
    {
        checkpass.classList.remove("is-valid");
        checkpass.classList.add("is-invalid"); 
        result = false;   
    }
    return result;
}

function initDate(day,mounth,year)
{
    let currentTime = new Date();
    let y = document.createElement("option");
    y.selectedIndex =  0;
    y.value =  0;
    year.add(y);
    for(let i=1900; i <= currentTime.getFullYear(); i++)
    {
        let y = document.createElement("option");
        y.text = i;
        y.value =  i;
        year.add(y);
    }
    updateDate(day,mounth,year);
}

function updateDate(day,mounth,year)
{
    //Atualizando dia
    let tmp = day.selectedIndex;
    day.innerHTML = ""; 
    let d = document.createElement("option");
    d.value=0;
    day.add(d);
    let m = mounth.selectedIndex;
    let limit = m == 2 ? 29 : 31;
    for(let i = 1; i <= limit ;i++)
    {
        let d = document.createElement("option");
        d.text = i;
        d.value =  i;
        day.add(d);
    }
    day.selectedIndex=tmp;
    //Atualizando ano
    tmp = year.selectedIndex;
    year.innerHTML="";
    let y = document.createElement("option");
    y.value =  0;
    year.add(y);
    let date = new Date();
    console.log(day.selectedIndex);
    for(let i=1900; i <= date.getFullYear(); i++)
    {  
        if(m == 2 && day.selectedIndex == 29)
        {
            if(i % 4 == 0)
            {
                let y = document.createElement("option");
                y.text = i;
                y.value =  i;
                year.add(y);
            }
        }
        else
        {
            let y = document.createElement("option");
            y.text = i;
            y.value =  i;
            year.add(y);
        }
    }
    year.selectedIndex=tmp;
}

function checkDate(day,mounth,year)
{
    let valid = true;
    if(mounth.selectedIndex > 0)
    {
        mounth.classList.remove("is-invalid");
        mounth.classList.add("is-valid");
    }
    else
    {
        mounth.classList.remove("is-valid");
        mounth.classList.add("is-invalid");
        valid = false;
    }
    if(day.selectedIndex > 0)
    {
        day.classList.remove("is-invalid");
        day.classList.add("is-valid");
    }
    else
    {
        day.classList.remove("is-valid");
        day.classList.add("is-invalid");
        valid = false;
    }
    if(year.selectedIndex > 0)
    {
        year.classList.remove("is-invalid");
        year.classList.add("is-valid");
    }
    else
    {
        year.classList.remove("is-valid");
        year.classList.add("is-invalid");
        valid = false;
    }
    console.log(year.selectedIndex);
    return valid;
}

function checkTerms(terms)
{
    let result = terms.checked
    return result;

}

function checkName(name)
{
    let result = false;
    if(name.value.length>0)
        result = true;
    if(result)
    {
        name.classList.remove("is-invalid");
        name.classList.add("is-valid");
    }
    else
    {
        name.classList.remove("is-valid");
        name.classList.add("is-invalid");
    }
    return result;
}

function check(email,pass,checkpass,day,mounth,year,notify,terms,name)
{
    let btn = document.getElementById("btn-signup");
    let valid = [updateEmail(email),updatePass(pass,checkpass),checkDate(day,mounth,year),checkTerms(terms),checkName(name)]
    console.log(valid , [true,true,true,true,true])
    if(valid[0] && valid[1] && valid[2] && valid[3] && valid[4])
    {
        btn.className = "btn btn-primary w-100";
    }
    else
    {
        btn.className = "btn btn-primary w-100 disabled";
    }
}

let modal = new bootstrap.Modal('#modal-login');
modal.show();

let email = document.getElementById("input-email");
let pass = document.getElementById("input-pass");
let checkpass = document.getElementById("check-pass");
let name = document.getElementById("input-nome");

let day = document.getElementById("input-day");
let mounth = document.getElementById("input-mounth");
let year = document.getElementById("input-year");

let notify = document.getElementById("input-notify");
let terms = document.getElementById("radio-yes");

let form = document.getElementById("form-signup");


//email.addEventListener("input",(event) => updateEmail(email));
//pass.addEventListener("input",(event) => updatePass(pass,checkpass));
//checkpass.addEventListener("input",(event) => updatePass(pass,checkpass));

day.addEventListener("change",(event) => updateDate(day,mounth,year));
mounth.addEventListener("change",(event) => updateDate(day,mounth,year));
year.addEventListener("change",(event) => updateDate(day,mounth,year));

form.addEventListener("change",(event) => check(email,pass,checkpass,day,mounth,year,notify,terms,name));

updateEmail(email);
updatePass(pass,checkpass);
updateDate(day,mounth,year);
checkName(name);
checkDate(day,mounth,year);
