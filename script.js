let userName = prompt("Enter your name:");
if (userName != null && userName != "") {
    document.getElementById("welcome").innerHTML = "Hi, " + userName + " 👋";
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let birthdate = document.getElementById("birthdate").value;
    let message = document.getElementById("message").value;
    let gender = document.querySelector('input[name="gender"]:checked');

    if (name === "" || birthdate === "" || message === "" || !gender) {
        alert("Semua field harus diisi!");
        return;
    }

    // Format tanggal 
    let dateObj = new Date(birthdate);
    let day = String(dateObj.getDate()).padStart(2, '0');
    let month = String(dateObj.getMonth() + 1).padStart(2, '0');
    let year = dateObj.getFullYear();
    let formattedDate = `${day}-${month}-${year}`;

    let currentTime = new Date().toString();

    document.getElementById("result").innerHTML = `
        <p><strong>Current time:</strong> ${currentTime}</p>
        <br>
        <p><strong>Nama :</strong> ${name}</p>
        <p><strong>Tanggal Lahir :</strong> ${formattedDate}</p>
        <p><strong>Jenis Kelamin :</strong> ${gender.value}</p>
        <p><strong>Pesan :</strong> ${message}</p>
    `;
});