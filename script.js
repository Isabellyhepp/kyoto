function createSakura() {
    const container = document.getElementById('sakura-container');
    const petal = document.createElement('span');
    
    // Configurações aleatórias para cada pétala
    const size = Math.random() * 10 + 10 + 'px'; // Tamanho entre 10px e 20px
    const lateralPos = Math.random() * 100 + 'vw'; // Posição horizontal aleatória
    const duration = Math.random() * 5 + 5 + 's'; // Tempo de queda entre 5s e 10s
    const delay = Math.random() * 5 + 's'; // Atraso para começar
    
    petal.classList.add('sakura');
    petal.style.width = size;
    petal.style.height = size;
    petal.style.left = lateralPos;
    petal.style.animationDuration = duration;
    petal.style.animationDelay = delay;
    
    // Adiciona ao container
    container.appendChild(petal);

    // Remove a pétala depois que a animação terminar para não pesar o site
    setTimeout(() => {
        petal.remove();
    }, 10000);
}

// Cria uma nova pétala a cada 300 milissegundos
setInterval(createSakura, 300);
