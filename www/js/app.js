
//Inicializa todos os componentes do template.
$(function () {
    $(".dropdown-button").dropdown();
    $(".button-collapse").sideNav();
    $('ul.tabs').tabs();

    $('#loading').modal({
        dismissible: false
    });

    Materialize.updateTextFields();
});


function showLoader() {
    $('#loading').modal("open");
}

function hideLoader() {
    $('#loading').modal("close");
}

$('#formmensagem').on('submit', function () {
    let mensagem = montarMensagem();
    console.log(mensagem)
    // alert('A mensagem é: ' + mensagem);
    // console.log(montarMensagem());
    return false;
});

function montarMensagem() {
    return {
        "mensagem": $('#mensagem').val(),
        "autor": {
            "login": "lucasft",
            "senha": "lcs281210"
        },
        "dataCriacao": new Date(),
        "local": null
    }
}

