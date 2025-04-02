let allUserInfo = []
let regform = document.querySelector (".reg-form");
let allInput = regform.querySelectorAll ("input");
console.log ("allInput");
regfrom.onsubmit = ("e") = > {
    e.preventDefault()
    let data = {
        Fullname : allInput[ 0 ]. value,
        hotelName : allInput[ 1 ] .value,
    }
    alert();

}