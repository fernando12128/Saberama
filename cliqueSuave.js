document.querySelector('.matematica').addEventListener('click', function (event) {
    event.preventDefault(); // Previne o redirecionamento imediato
   
    const matematica = event.target;
   
    // Adiciona a classe "active" para ativar a transição
    matematica.classList.add('active');
   
    // Espera a duração da transição antes de redirecionar
    setTimeout(() => {
      window.location.href = matematica.href; // Redireciona para o destino
    }, 500); // Tempo em milissegundos (deve coincidir com o `transition` no CSS)
  });