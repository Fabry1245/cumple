function mostrarSorpresa() {
    const sorpresa = document.getElementById('sorpresa');
    sorpresa.innerHTML = '';
  
    for (let i = 0; i < 50; i++) {
      const corazon = document.createElement('div');
      corazon.textContent = '💖';
      corazon.style.position = 'absolute';
      corazon.style.left = Math.random() * 100 + 'vw';
      corazon.style.top = Math.random() * 100 + 'vh';
      corazon.style.fontSize = (Math.random() * 20 + 10) + 'px';
      corazon.style.animation = 'flotar 5s linear infinite';
      sorpresa.appendChild(corazon);
    }
  }
  
  document.body.insertAdjacentHTML('beforeend', `
    <style>
      @keyframes flotar {
        0% { transform: translateY(0); opacity: 1; }
        100% { transform: translateY(-100vh); opacity: 0; }
      }
      #sorpresa div {
        animation: flotar 5s linear infinite;
      }
    </style>
  `);