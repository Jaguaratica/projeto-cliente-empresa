document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    const emailInput = document.getElementById("email-input");
    const passwordInput = document.getElementById("password-input");
    const errorMessage = document.getElementById("error-message");
    const loginBtn = document.getElementById("loginBtn");
    const loginSection = document.querySelector('.login-section');
    const heroTextH2 = document.querySelector('.hero-text h2');

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Checagem temporária
        if (email === "email@hotmail.com" && password === "123") {
            // Limpa erro
            errorMessage.textContent = "";

            // Substitui o botão de login pelo avatar
            loginBtn.outerHTML = `
                <div class="header-profile">
                    <div class="header-avatar">
                        <i class='bx bx-user'></i>
                    </div>
                </div>
            `;

            // Esconde a seção de login
            if (loginSection) {
                loginSection.style.display = 'none';
            }

            // Volta para o topo da página
            window.scrollTo({ top: 0, behavior: 'smooth' });

            // Altera o texto do hero
            if (heroTextH2) {
                heroTextH2.textContent = `Seja bem-vindo ${email.split('@')[0]}`;
            }

        } else {
            errorMessage.textContent = "Email ou senha incorretos!";
        }
    });
});