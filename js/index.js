let allUserInfo = [];
let regForm = document.querySelector(".reg-form");
let allInput = regForm.querySelectorAll("input");

if(localStorage.getItem("allUserInfo") != null)
{
    allUserInfo = JSON.parse(localStorage.getItem("allUserInfo"))
}
console.log(allUserInfo);


    regForm.onsubmit = (e) =>{
    e.preventDefault()
    let checkEmail = allUserInfo.find((data)=>{
        return data.email == allInput[4].value
    })
    if(checkEmail == undefined)
    {
        let data = {};
    for(let el of allInput)
    {
        let key = el.name;
        data[key] = el.value
    }
    allUserInfo.push(data);
    localStorage.setItem("allUserInfo",JSON.stringify(allUserInfo));
    swal("Good Job !", 'Registration Success !','Success');
    }
    else
    {
        swal("Failed !",'Email already register !','warning');
    }
}