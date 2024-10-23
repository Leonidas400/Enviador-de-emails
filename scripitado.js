function enviarEmail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        telefone : document.getElementById("telefone").value,
        assunto : document.getElementById("assunto").value,
        mensagem : document.getElementById("mensagem").value,
    }

    emailjs.send("service_8wm4d77","template_pic4fio", parms).then(alert("E-mail enviado com sucesso!!!"));

    event.preventDefault();
}