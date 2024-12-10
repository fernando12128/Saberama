document.addEventListener("DOMContentLoaded", () => {
    const novaSenha = document.getElementById("nova-senha");
    const confirmarSenha = document.getElementById("confirmar-senha");
    const form = document.getElementById("senha-form");

    // Requisitos
    const requisitos = {
        length: document.getElementById("length"),
        uppercase: document.getElementById("uppercase"),
        number: document.getElementById("number"),
        special: document.getElementById("special"),
        match: document.getElementById("match"),
    };

    // Atualiza o estado do requisito (ícone e classe)
    function atualizarRequisito(requisito, valido) {
        const icon = requisito.querySelector(".icon");
        if (valido) {
            requisito.classList.add("valid");
            icon.textContent = "✔️";
        } else {
            requisito.classList.remove("valid");
            icon.textContent = "❌";
        }
    }

    // Validação em tempo real
    novaSenha.addEventListener("input", () => {
      const valor = novaSenha.value;
  
      // Tamanho mínimo
      atualizarRequisito(requisitos.length, valor.length >= 5);
  
      // Letra maiúscula ou minúscula
      atualizarRequisito(requisitos.uppercase, /[a-zA-Z]/.test(valor)); // Valida qualquer letra (maiúscula ou minúscula)
  
      // Número
      atualizarRequisito(requisitos.number, /\d/.test(valor));
  
      // Caractere especial (somente caracteres especiais)
      atualizarRequisito(requisitos.special, /[^a-zA-Z0-9]/.test(valor)); // Valida qualquer caractere que não seja letra ou número
    });
  
    // Validação de correspondência
    confirmarSenha.addEventListener("input", () => {
        const coincidem = novaSenha.value === confirmarSenha.value;
        atualizarRequisito(requisitos.match, coincidem);
    });

    // Validação final no envio do formulário
    form.addEventListener("submit", (event) => {
        const senha = novaSenha.value;
        const senhaValida = senha.length >= 5 &&
                            /[a-zA-Z]/.test(senha) &&
                            /\d/.test(senha) &&
                            /[^a-zA-Z0-9]/.test(senha); // Caractere especial

        const coincidem = senha === confirmarSenha.value;

        if (!senhaValida || !coincidem) {
            event.preventDefault();
            alert("Por favor, corrija os erros antes de enviar.");
        }
    });

    // Alterar as imagens de mostrar/ocultar
    const toggleButtons = document.querySelectorAll(".toggle-visibility");
  
    toggleButtons.forEach(button => {
        button.addEventListener("click", function() {
            const targetInput = document.getElementById(this.getAttribute("data-target"));
            const inputType = targetInput.getAttribute("type");
            const eyeIcon = this.querySelector(".eye-icon");

            if (inputType === "password") {
                targetInput.setAttribute("type", "text"); // Exibe a senha
                eyeIcon.src = "img/mostrar.png"; // Altera para a imagem de mostrar
            } else {
                targetInput.setAttribute("type", "password"); // Oculta a senha
                eyeIcon.src = "img/ocultar.png"; // Altera para a imagem de ocultar
            }
        });
    });
});
