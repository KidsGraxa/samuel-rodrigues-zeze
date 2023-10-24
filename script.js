const contactForm = document.getElementById('contact-form');
    const inputName = document.getElementById('inputName');
    const inputEmail = document.getElementById('inputEmail');
    const inputPhone = document.getElementById('inputPhone');
    const textareaOpinion = document.getElementById('exampleFormControlTextarea1');
    const mensagemErro = document.getElementById('mensagemErro');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        if (!validarNome(inputName.value)) {
            exibirErro('Nome inválido.');
            return;
        }

        if (!validarEmail(inputEmail.value)) {
            exibirErro('Email inválido.');
            return;
        }

        if (!validarCelular(inputPhone.value)) {
            exibirErro('Número de celular inválido.');
            return;
        }

        mensagemErro.textContent = 'Formulário enviado com sucesso!';
        mensagemErro.style.color = 'green';
    });

    function exibirErro(mensagem) {
        mensagemErro.textContent = mensagem;
        mensagemErro.style.color = 'red';
    }

    function validarNome(nome) {
        return nome.length > 0;
    }

    function validarEmail(email) {
        const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return regexEmail.test(email);
    }

    function validarCelular(celular) {
        const regexCelular = /^\d{10,}$/;
        return regexCelular.test(celular);
    }