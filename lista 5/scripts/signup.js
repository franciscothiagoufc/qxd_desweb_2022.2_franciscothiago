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
    let limit;
    let y = year.options[year.selectedIndex].value;
    let m = mounth.selectedIndex;
    if(m == 2)
    {
        limit = y % 4 == 0 ? 29 : 28;
    }
    else if(m in [1,3,5,7,8,10,12])
    {
        limit = 31;
    }
    else
    {
        limit = 30;
    }

    let tmp = day.selectedIndex;

    day.innerHTML = "";
    for(let i = 1; i <= limit ;i++)
    {
        let d = document.createElement("option");
        d.text = i;
        d.value =  i;
        day.add(d);
    }
    let d = document.createElement("option");
    d.selected = true;
    d.value=0;
    day.add(d);
    
    day.selectedIndex = tmp;
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
    if(terms.checked)
        return true;
    return false;
}

function check(email,pass,checkpass,day,mounth,year,notify,terms)
{
    let btn = document.getElementById("btn-signup");
    let valid = [updateEmail(email),updatePass(pass,checkpass),checkDate(day,mounth,year),checkTerms(terms)]
    console.log(valid , [true,true,true,true])
    if(valid[0] && valid[1] && valid[2] && valid[3])
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

let day = document.getElementById("input-day");
let mounth = document.getElementById("input-mounth");
let year = document.getElementById("input-year");

let notify = document.getElementById("input-notify");
let terms = document.getElementById("radio-yes");

let form = document.getElementById("form-signup");


//email.addEventListener("input",(event) => updateEmail(email));
//pass.addEventListener("input",(event) => updatePass(pass,checkpass));
//checkpass.addEventListener("input",(event) => updatePass(pass,checkpass));

mounth.addEventListener("change",(event) => updateDate(day,mounth,year));
year.addEventListener("change",(event) => updateDate(day,mounth,year));

form.addEventListener("change",(event) => check(email,pass,checkpass,day,mounth,year,notify,terms));

updateEmail(email);
updatePass(pass,checkpass);
initDate(day,mounth,year)
