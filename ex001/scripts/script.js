const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('toggle');
})

document.addEventListener('DOMContentLoaded', () => {

    const cpfInput = document.getElementById('cpf');
    cpfInput.addEventListener('input', () => {
        let valor = cpfInput.value.replace(/\D/g, '');
        if (valor.length > 11) valor = valor.slice(0, 11);

        if (valor.length > 9) {
        cpfInput.value = valor.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
        } else if (valor.length > 6) {
        cpfInput.value = valor.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3');
        } else if (valor.length > 3) {
        cpfInput.value = valor.replace(/(\d{3})(\d{1,3})/, '$1.$2');
        } else {
        cpfInput.value = valor;
        }
    });

    const telInput = document.getElementById('telefone');

    telInput.addEventListener('input', () => {

        let valor = telInput.value.replace(/\D/g, '');

        if (valor.length > 11) valor = valor.slice(0, 11);

        if (valor.length <= 2) {
        telInput.value = valor;
        } else if (valor.length <= 6) {
        telInput.value = `(${valor.slice(0,2)}) ${valor.slice(2)}`;
        } else if (valor.length <= 10) {
        telInput.value = `(${valor.slice(0,2)}) ${valor.slice(2,6)}-${valor.slice(6)}`;
        } else {
        telInput.value = `(${valor.slice(0,2)}) ${valor.slice(2,7)}-${valor.slice(7,11)}`;
        }
    });

    const cepInput = document.getElementById('cep');
    cepInput.addEventListener('input', () => {
        let valor = cepInput.value.replace(/\D/g, '');
        if (valor.length > 8) valor = valor.slice(0, 8);

        if (valor.length > 5) {
        cepInput.value = valor.replace(/(\d{5})(\d{1,3})/, '$1-$2');
        } else {
        cepInput.value = valor;
        }
    });
});

const templates = {
    home: `<section class="home">
            <h1>Mudando vidas através do código.</h1>
            <picture class="img-home">
                <source srcset="imagens/index-foto-principal.webp" type="image/webp">
                <img src="imagens/index-foto-principal.jpg" alt="Estudos">
            </picture>
        </section>
        <section class="sobre">
            <h2>Sobre Nós</h2>
                <div class="p-padrao">
                    <p>Em um mundo cada vez mais digital, a exclusão social também ganhou novas formas. Jovens talentosos, criativos e cheios de potencial acabam sendo deixados de fora das oportunidades que a tecnologia oferece — não por falta de capacidade, mas por falta de acesso. Foi para mudar essa realidade que nasceu a Bit por Bit.</p>
                    <p>Somos uma organização sem fins lucrativos que acredita no poder transformador da educação tecnológica. Nosso propósito é capacitar jovens em situação de vulnerabilidade por meio do ensino da programação, promovendo não apenas o aprendizado técnico, mas também o desenvolvimento pessoal, a autonomia e a construção de novas perspectivas de futuro.</p>
                    <p>Acreditamos que programar é mais do que escrever código — é aprender a resolver problemas, pensar de forma criativa e trabalhar em equipe. Por isso, nossos projetos unem formação profissional, mentoria e acolhimento social, criando um ambiente em que cada jovem pode descobrir seu valor e se preparar para o mercado de trabalho com dignidade e propósito.</p>
                    <p>Desde o nosso início, já impactamos diversas comunidades, formando jovens que hoje atuam como desenvolvedores, analistas e até empreendedores. Cada história é um lembrete de que, quando oferecemos as ferramentas certas, a transformação acontece.</p>
                    <p>Mais do que ensinar tecnologia, queremos formar agentes de mudança. Nosso sonho é que cada aluno que passa por aqui leve consigo não só conhecimento, mas também a coragem de construir um futuro diferente — para si, para sua comunidade e para o mundo.</p>
                </div>
                <p style="text-align: center;"><strong>Juntos, acreditamos que a programação pode quebrar ciclos e abrir caminhos.<br>Juntos, estamos codando oportunidades.</strong>
                </p>
        </section>`,

    projetos: `<section class="sobre">
                <h1>Conheça nossos projetos</h1>
                <div class="p-padrao">
                    <p>Na Bit por Bit, acreditamos que o conhecimento só tem valor quando é compartilhado. Cada projeto que criamos nasce com o propósito de abrir portas e ampliar horizontes para jovens que, muitas vezes, nunca imaginaram fazer parte do mundo da tecnologia. Mais do que ensinar programação, buscamos transformar realidades, desenvolvendo habilidades, confiança e oportunidades de futuro.</p>
                    <p>Se você também acredita no poder da educação e quer fazer parte dessa mudança, há muitas formas de contribuir. Você pode se tornar voluntário, compartilhando seu tempo e conhecimento em nossas aulas, mentorias e oficinas ou realizar uma doação, ajudando a manter nossos cursos gratuitos e acessíveis a quem mais precisa.</p>
                    <p>Cada gesto conta. Seja ensinando, doando ou divulgando nossa causa, você ajuda a programar um futuro mais justo e cheio de oportunidades.</p>
                </div>
            </section>
            <section class="projetos">
            <article class="tipo-projeto">
                <h2>Programa Jovem Dev</h2>
                <p>O Jovem Dev é um curso gratuito de introdução à programação voltado para jovens de comunidades em situação de vulnerabilidade social. Através de aulas teóricas e práticas, eles aprendem lógica de programação, desenvolvimento web e pensamento computacional. Mas o aprendizado vai além do código aqui, cada aluno descobre seu potencial e aprende a acreditar em si mesmo.</p>
                <picture>
                    <source srcset="imagens/projetos-jovem-dev.webp" type="image/webp">
                    <img src="imagens/projetos-jovem-dev.jpg" alt="Programa Jovem Dev">
                </picture>
                <button class="doacao-projeto">Quero Ajudar</button>
            </article>
            <article class="tipo-projeto">
                <h2>Trilha Profissional Bit</h2>
                <p>Após a formação inicial, nossos alunos podem ingressar na Trilha Profissional Bit, um programa de capacitação voltado para o mercado de trabalho. Com apoio de mentores voluntários e profissionais da área de tecnologia, os participantes desenvolvem projetos reais, constroem portfólios e são encaminhados para oportunidades de estágio e emprego em empresas parceiras.</p>
                <picture>
                    <source srcset="imagens/projetos-trilha-profissional.webp" type="image/webp">
                    <img src="imagens/projetos-trilha-profissional.jpg" alt="Trilha Profissional Bit">
                </picture>
                <button class="doacao-projeto">Quero Ajudar</button>
            </article>
            <article class="tipo-projeto">
                <h2>Tech Solidário</h2>
                <p>No Tech Solidário, nossos alunos aplicam seus conhecimentos em projetos sociais, criando sites, aplicativos e sistemas para ONGs e iniciativas comunitárias. É uma forma de devolver à sociedade o que aprenderam e de perceber que o código também pode gerar empatia, inclusão e impacto social.</p>
                <picture>
                    <source srcset="imagens/projetos-tech-solidario.webp" type="image/webp">
                    <img src="imagens/projetos-tech-solidario.jpg" alt="Tech Solidário">
                </picture>
                <button class="doacao-projeto">Quero Ajudar</button>
            </article>
        </section>`,

    cadastro: `<section class="sobre">
            <h1>Cadastre-se para fazer parte da Bit por Bit</h1>
            <p style="text-align: center;">Preencha o formulário ao lado para participar de nossos projetos ou se voluntariar.</p>
        </section>
        <section class="formulario">
            <picture>
                <source srcset="imagens/cadastro-form.webp" type="image/webp">
                <img src="imagens/cadastro-form.jpg" alt="Ilustração do Formulário">
            </picture>
            <form action="#" method="post">
            <fieldset>
                <legend>Informações Pessoais</legend>
                <label for="nome">Nome Completo:</label>
                <input type="text" name="nome" id="nome" placeholder="Digite seu nome completo" required minlength="3">
                <label for="email">E-mail:</label>
                <input type="email" name="email" id="email" placeholder="exemplo@email.com" required>
            
                <label for="cpf">CPF:</label>
                <input type="text" name="cpf" id="cpf" placeholder="000.000.000-00" required pattern="\d{3}\.\d{3}\.\d{3}-\d{2}">
                <label for="telefone">Telefone:</label>
                <input type="tel" name="telefone" id="telefone" placeholder="(00) 00000-0000" required pattern="\(\d{2}\)\s?\d{5}-\d{4}">
                <label for="nasc">Data de Nascimento:</label>
                <input type="date" name="nasc" id="nasc">
            </fieldset>
            <fieldset>
                <legend>Endereço</legend>
            
                <label for="endereco">Endereço:</label>
                <input type="text" name="endereco" id="endereco" placeholder="Rua, número" required>
                <label for="cep">CEP:</label>
                <input type="text" name="cep" id="cep" placeholder="00000-000" required pattern="\d{5}-\d{3}">
                <label for="cidade">Cidade:</label>
                <input type="text" name="cidade" id="cidade" required>
                <label for="uf">Estado:</label>
                <input type="text" name="uf" id="uf" required>
            </fieldset>
            <input type="submit" value="Cadastrar">
            </form>
        </section>`
};

function carregarRota() {
  const hash = window.location.hash.substring(1) || 'home';
  const main = document.querySelector('main');
  main.innerHTML = templates[hash] || `<h2>Página não encontrada</h2>`;
}

window.addEventListener('hashchange', carregarRota);

window.addEventListener('load', carregarRota);