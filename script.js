@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@300;700&family=Zen+Kurenaido&family=Shippori+Mincho&display=swap');

:root {
    --papel: #f4e1c1;
    --tinta: #2d2d2d;
    --sangue: #8b0000;
    --sakura: #ffb7c5;
}

body {
    background-color: #1a1a1a;
    font-family: 'Shippori Mincho', serif;
    color: var(--tinta);
    overflow-x: hidden;
}

.scroll-wrap {
    max-width: 850px;
    margin: 50px auto;
    background-color: var(--papel);
    background-image: url("https://www.transparenttextures.com/patterns/rice-paper-2.png");
    box-shadow: 0 0 100px rgba(0,0,0,0.8);
    padding: 60px;
    border-left: 15px solid #3d2b1f;
    border-right: 15px solid #3d2b1f;
}

header { text-align: center; padding: 60px 0; border-bottom: 2px solid var(--tinta); }
h1 { font-family: 'Zen Kurenaido', sans-serif; font-size: 3.5rem; letter-spacing: 5px; }
section { margin: 80px 0; }
h2 { font-family: 'Zen Kurenaido', sans-serif; color: var(--sangue); border-bottom: 1px solid #d4af37; margin-bottom: 20px; }
p { font-size: 1.2rem; line-height: 1.8; text-align: justify; }

#sakura-container { position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 999; }
.sakura { position: absolute; top: -10%; background-color: var(--sakura); border-radius: 100% 0 100% 0; opacity: 0.7; animation: fall linear forwards; }
@keyframes fall {
    0% { top: -10%; transform: rotate(0deg); }
    100% { top: 110%; transform: rotate(360deg) translateX(50px); }
}
