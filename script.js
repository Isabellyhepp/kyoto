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
/* Container das pétalas */
#sakura-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none; /* Deixa clicar nos links por baixo das pétalas */
    z-index: 9999;
    overflow: hidden;
}

/* Estilo da pétala */
.sakura {
    position: absolute;
    top: -10%;
    background-color: #ffb7c5;
    border-radius: 100% 0 100% 0; /* Formato de pétala */
    opacity: 0.7;
    box-shadow: 0 0 5px rgba(255, 183, 197, 0.5);
    animation: fall linear forwards;
}

/* Animação de queda e rotação */
@keyframes fall {
    0% {
        top: -10%;
        transform: translateX(0) rotate(0deg);
    }
    100% {
        top: 110%;
        transform: translateX(100px) rotate(360deg);
    }
}
