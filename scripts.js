function enviarWatsapp(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("mensagem").value;
    const telefone = "5548998354402";
    const texto = `Olá, me chamo ${nome} e gostaria de falar sobre: ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto);
    const url = `https://api.whatsapp.com/send?phone=${telefone}&text=${msgFormatada}`;
    window.open(url, "_blank");
  }
