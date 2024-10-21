document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah pengiriman form secara default

    // Ambil nilai dari form
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const gender = document.getElementById("gender").value;
    const message = document.getElementById("message").value;

    // Format pesan yang akan ditampilkan
    const responseMessage = `Thank you, ${name}! We've received your message:
    <br>Email: ${email}
    <br>Phone: ${phone}
    <br>Gender: ${gender === "male" ? "Laki-Laki" : "Perempuan"}
    <br>Message: ${message}`;

    // Tampilkan pesan respons di sebelah form
    document.getElementById("responseMessage").innerHTML = responseMessage;

    // Reset form setelah submit
    document.getElementById("contactForm").reset();
});

