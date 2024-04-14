const contentDiv = document.querySelector(".content");
const signup = document.getElementById("signup");
const login = document.getElementById("login");
const nav = document.getElementById("nav-index");

let user = true;

if (user) {
    contentDiv.innerHTML = `<p>Content only for logged people</p>`;

    login.remove();
    signup.remove(); 
    
    nav.innerHTML += `<a href="#" class="a-img">User info<img src="assets/userimage.png" alt="user" width="40"></a>`

}
