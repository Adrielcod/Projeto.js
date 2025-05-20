document.addEventListener('DOMContentLoaded', function() {
    // Botões "Assinar" dos planos
    const botoesAssinar = document.querySelectorAll('.card button');
    botoesAssinar.forEach(botao => {
        botao.addEventListener('click', function(e) {
            e.preventDefault(); // Impede comportamento padrão
            const plano = this.closest('.card').querySelector('h3').textContent;
            
            // Cria um modal personalizado
            const modal = document.createElement('div');
            modal.style.position = 'fixed';
            modal.style.top = '0';
            modal.style.left = '0';
            modal.style.width = '100%';
            modal.style.height = '100%';
            modal.style.backgroundColor = 'rgba(0,0,0,0.7)';
            modal.style.display = 'flex';
            modal.style.justifyContent = 'center';
            modal.style.alignItems = 'center';
            modal.style.zIndex = '1000';
            
            modal.innerHTML = `
                <div style="background: white; padding: 2rem; border-radius: 8px; max-width: 80%; text-align: center;">
                    <h3 style="color: #2c3e50; margin-bottom: 1rem;">Atenção!</h3>
                    <p style="margin-bottom: 1.5rem;">Clicou porque tá querendo alugar a moça do nosso amigo? 🤔<br><br>
                    <small>Lembre-se: Este é um site fictício para demonstração.</small></p>
                    <button style="background: #2c3e50; color: white; border: none; padding: 0.5rem 1.5rem; border-radius: 4px; cursor: pointer;">
                        Entendi
                    </button>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            // Fechar modal
            modal.querySelector('button').addEventListener('click', function() {
                document.body.removeChild(modal);
            });
        });
    });
});