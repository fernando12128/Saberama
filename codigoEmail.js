const inputs = document.querySelectorAll('.codigo-input');

    inputs.forEach((input, index) => {
        input.addEventListener('input', (e) => {
            const value = e.target.value;
            
            // Permitir apenas números
            if (!/^\d$/.test(value)) {
                e.target.value = ''; // Limpa o valor se não for um número
                return;
            }
            // Move para o próximo input, se existir
            if (value && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });

        // Permitir que o backspace volte ao input anterior
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && !input.value && index > 0) {
                inputs[index - 1].focus();
            }
        });
    });