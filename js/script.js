// Botão para voltar ao topo
const btnVoltarTopo = document.querySelector('.btn-voltar-topo');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        btnVoltarTopo.style.display = 'block';
    } else {
        btnVoltarTopo.style.display = 'none';
    }
});

btnVoltarTopo.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Quiz

