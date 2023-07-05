const correctEmail = "malfoy@gmail.com";
const correctPassword = "pottah";

const messageContainer = document.getElementById("message-container");


function ceklogin(){
    const userEmail = document.getElementById('fEmail').
    value;
    const userPassword = document.getElementById('fPassword').
    value;

    if (userEmail != correctEmail || userPassword != 
        correctPassword) {
            messageContainer.innerHTML = "<p class='error-message'>Login Gagal, Email atau Password salah!!!</p>";
        } else {
            messageContainer.innerHTML = "<p class='success-message'>Berhasil Login . . .!</p>";
        }
    
}
