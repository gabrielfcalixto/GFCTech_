document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// 1. Efeito de transição e animação nos cards de serviços
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'scale(1.05)';
      card.style.transition = 'transform 0.3s ease-in-out';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'scale(1)';
    });
  });
  
  // 2. Validação de formulário
  document.querySelector('form').addEventListener('submit', function (event) {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let mensagem = document.getElementById('mensagem').value;
  
    if (!nome || !email || !telefone || !mensagem) {
      alert('Por favor, preencha todos os campos!');
      event.preventDefault(); // Impede o envio se estiver incompleto
    }
  });
  
  // 3. Slider de imagens com Swiper
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  
  // 4. Menu responsivo para dispositivos móveis
  const navbar = document.querySelector('.navbar');
  const toggleMenu = document.createElement('div'); // Cria um botão de menu para mobile
  toggleMenu.classList.add('toggle-menu');
  toggleMenu.innerHTML = '☰'; // Ícone simples de menu
  document.body.insertBefore(toggleMenu, navbar); // Insere o botão de menu no body
  
  toggleMenu.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });
  
  // 5. Scroll suave para links âncora
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  