/* --- PROGRAMAÇÃO JAVASCRIPT --- */

// 1. Geração do Gráfico de Barras Acessível
const contexto = document.getElementById('graficoSustentavel').getContext('2d');
const meuGrafico = new Chart(contexto, {
    type: 'bar',
    data: {
        labels: ['Economia de Água', 'Saúde do Solo', 'Redução de Poluição'],
        datasets: [{
            label: 'Melhoria com Práticas Sustentáveis (em %)',
            data: [80, 90, 70],
            backgroundColor: [
                '#0056b3', // Azul escuro
                '#5d4037', // Marrom escuro
                '#1b5e20'  // Verde escuro
            ],
            borderColor: ['#001f4d', '#3e2723', '#003300'],
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    font: { size: 16, weight: 'bold' },
                    color: '#111111'
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                ticks: { font: { size: 15, weight: 'bold' }, color: '#111111' }
            },
            x: {
                ticks: { font: { size: 15, weight: 'bold' }, color: '#111111' }
            }
        }
    }
});

// 2. Função para abrir e fechar a Caixa de Perguntas (FAQ) atualizando as tags ARIA
function abrirFecharFaq(botao) {
    // Descobre se a resposta já está aberta na tela (true ou false)
    const estaAberto = botao.getAttribute('aria-expanded') === 'true';
    
    // Atualiza o estado para o leitor de tela saber o que mudou
    botao.setAttribute('aria-expanded', !estaAberto);
    
    // Seleciona o bloco de texto da resposta e o ícone de mais/menos
    const resposta = botao.nextElementSibling;
    const icone = botao.querySelector('span:last-child');
    
    if (!estaAberto) {
        resposta.style.display = 'block';
        resposta.setAttribute('aria-hidden', 'false');
        icone.textContent = '−'; // Muda o símbolo visual para menos
    } else {
        resposta.style.display = 'none';
        resposta.setAttribute('aria-hidden', 'true');
        icone.textContent = '+'; // Muda o símbolo visual para mais
    }
}
