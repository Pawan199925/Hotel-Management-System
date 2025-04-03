let allUserInfo = [];
let regform = document.querySelector(".reg-form");
let allInput = regform.querySelectorAll("input");
console.log(allInput);
regform.onsubmit = (e) => {
    e.preventDefault();
    let data = {
        fullname : allInput[0].value,
        hotelName : allInput[1].value,
    }
    alert();
}