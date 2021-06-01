let firstName, lastName, pic, email, phone;
window.onload = function () {
    refresh();
    document.getElementById("refresh").onclick = refresh;

}
function refresh() {
    getUser("https://randomuser.me/api/").then(() => {
        document.getElementById("name").innerHTML = firstName + " " + lastName
        document.getElementById("image").src = pic;
        document.getElementById("phone").innerHTML = phone;
        document.getElementById("email").innerHTML = email;
    });
    getUser("https://randomuser.me/api/").then(() => {
        document.getElementById("name2").innerHTML = firstName + " " + lastName
        document.getElementById("image2").src = pic;
        document.getElementById("phone2").innerHTML = phone;
        document.getElementById("email2").innerHTML = email;
    });
    getUser("https://randomuser.me/api/").then(() => {
        document.getElementById("name3").innerHTML = firstName + " " + lastName
        document.getElementById("image3").src = pic;
        document.getElementById("phone3").innerHTML = phone;
        document.getElementById("email3").innerHTML = email;
    });
    getUser("https://randomuser.me/api/").then(() => {
        document.getElementById("name4").innerHTML = firstName + " " + lastName
        document.getElementById("image4").src = pic;
        document.getElementById("phone4").innerHTML = phone;
        document.getElementById("email4").innerHTML = email;
    });
    getUser("https://randomuser.me/api/").then(() => {
        document.getElementById("name5").innerHTML = firstName + " " + lastName
        document.getElementById("image5").src = pic;
        document.getElementById("phone5").innerHTML = phone;
        document.getElementById("email5").innerHTML = email;
    });
}
async function getUser(url) {
    const res = await fetch(url);
    const obj = await res.json();
    firstName = obj.results[0].name.first;
    lastName = obj.results[0].name.last;
    pic = obj.results[0].picture.large;
    email = obj.results[0].email;
    phone = obj.results[0].phone;


}