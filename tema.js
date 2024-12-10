// Seleciona o dropdown e adiciona o evento de mudança
const themeSelector = document.getElementById('themeSelector');

// Função para aplicar o tema
function applyTheme(theme) {
  // Aplica o fundo e a cor do texto para o tema escuro ou claro
  if (theme === 'dark') {
    document.body.style.backgroundColor = '#2D2D2D';
    document.body.style.color = '#FFFFFF'; // Ajuste o texto para ficar visível
  } else {
    document.body.style.backgroundColor = '#FFFFFF';
    document.body.style.color = '#000000'; // Ajuste o texto para o modo claro
  }
}

// Verifica o tema salvo no LocalStorage ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light'; // Padrão: modo claro
  if (themeSelector) {
    themeSelector.value = savedTheme; // Atualiza o seletor de tema, se houver
  }
  applyTheme(savedTheme); // Aplica o tema na página atual
});

// Salva o tema selecionado e aplica as mudanças
if (themeSelector) {
  themeSelector.addEventListener('change', () => {
    const selectedTheme = themeSelector.value;
    localStorage.setItem('theme', selectedTheme); // Salva a escolha do usuário no localStorage
    applyTheme(selectedTheme); // Aplica o tema imediatamente
  });
}
