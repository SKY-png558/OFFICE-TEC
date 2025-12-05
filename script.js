// Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Validação simples do formulário
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  const nome = form.nome.value.trim();
  const email = form.email.value.trim();
  if (!nome || !email) {
    e.preventDefault();
    alert("Por favor, preencha nome e e-mail.");
  }
});

// Animação de entrada dos produtos
const produtos = document.querySelectorAll('.product');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
});
produtos.forEach(produto => observer.observe(produto));

