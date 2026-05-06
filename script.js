// Função de start do menu mobile //thiago_4644337
function initMenuMobile(){
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function(){
            nav.classList.toggle('open');
        });
        // Fechar menu ao clicar em um link
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', function(){
                nav.classList.remove('open');
            });
        });
    }
}


// Informações do cardapio de cada lanhonete //thiago4644337
const lanchonetes={
    'Salvador':[
        { nome: 'Acarajé', preco: 20.00, promocao: true, img: 'assets/acaraje.jpg' },
        { nome: 'Vatapá', preco: 35.00, promocao: false, img: 'assets/vatapa.jpg' },
        { nome: 'Moqueca Baiana', preco: 40.00, promocao: true, img: 'assets/moqueca-baiana.jpg' },
        { nome: 'Caruru', preco: 25.00, promocao: false, img: 'assets/caruru.jpg' },
        { nome: 'Abará', preco: 22.00, promocao: true, img: 'assets/abara.jpg' },
        { nome: 'Sarapatel', preco: 30.00, promocao: false, img: 'assets/sarapatel.jpg' },
        { nome: 'Mungunzá', preco: 15.00, promocao: true, img: 'assets/mungunza.jpg' },
        { nome: 'Efó', preco: 28.00, promocao: false, img: 'assets/efo.jpg' }
    ],
     'João Pessoa':[
        { nome: 'Galinhada Paraibana', preco: 30.00, promocao: true, img: 'assets/galinhada_paraibana.jpg' },
        { nome: 'Carne de Sol com Farofa', preco: 27.00, promocao: false, img: 'assets/farofa-de-carne-de-sol.jpg' },
        { nome: 'Tapioca Recheada', preco: 12.00, promocao: true, img: 'assets/tapioca_recheada.jpg' },
        { nome: 'Buchada de Cabrito', preco: 40.00, promocao: false, img: 'assets/buchada-de-cabrito.jpg' }
    ],
    'Fortaleza':[
        { nome: 'Peixada Cearense', preco: 32.00, promocao: true, img: 'assets/peixada_cearense.jpg' },
        { nome: 'Cuscuz com Charque', preco: 18.00, promocao: false, img: 'assets/cuscuz_com_charque.jpg' },
        { nome: 'Buchada', preco: 35.00, promocao: true, img: 'assets/buchada.jpg' },
        { nome: 'Carne de Sol com Macaxeira', preco: 28.00, promocao: false, img: 'assets/Carne_de_sol_com_macaxeira.jpg' }
    ],
    'Natal':[
        { nome: 'Camarão ao Molho', preco: 45.00, promocao: true, img: 'assets/camarao_ao_molho.jpg' },
        { nome: 'Baião de Dois Potiguar', preco: 22.00, promocao: false, img: 'assets/baiao_potiguar.jpg' },
        { nome: 'Siri com Coco', preco: 38.00, promocao: true, img: 'assets/siri-com-coco.jpg' },
        { nome: 'Feijão Verde com Carne de Sol', preco: 25.00, promocao: false, img: 'assets/feijao-verde-com-carne-de-sol.jpg' }
    ],
    'Aracaju':[
        { nome: 'Moqueca Sergipana', preco: 33.00, promocao: true, img: 'assets/moqueca-sergipana.jpg' },
        { nome: 'Carne de Sol com Abóbora', preco: 26.00, promocao: false, img: 'assets/carnesecacomabobora.jpg' },
        { nome: 'Arroz de Carreteiro', preco: 20.00, promocao: true, img: 'assets/arroz_carreteiro.jpg' },
        { nome: 'Sopa de Galinha', preco: 18.00, promocao: false, img: 'assets/sopa-de-galinhada.jpg' }
    ],
    'Recife':[
        { nome: 'Baião de Dois', preco: 25.00, promocao: true, img: 'assets/baião_de_dois.jpg' },
        { nome: 'Carne de Sol', preco: 30.00, promocao: false, img: 'assets/carne_de_sol.jpg' },
        { nome: 'Moqueca de Peixe', preco: 35.00, promocao: true, img: 'assets/moqueca_de_peixe.jpg' },
        { nome: 'Buchada de Bode', preco: 40.00, promocao: false, img: 'assets/buchada_de_bode.jpg' },
        { nome: 'Tapioca', preco: 15.00, promocao: true, img: 'assets/tapioca.jpg'},
        { nome: 'Cuscuz', preco: 20.00, promocao: false, img: 'assets/cuscuz.jpg' },
        { nome: 'Acarajé', preco: 18.00, promocao: true, img: 'assets/acaraje1.jpg' },
        { nome: 'Feijoada Nordestina', preco: 28.00, promocao: false, img: 'assets/feijoada_nordestina.jpg'}
    ]
};


// Verifica se usuário está logado ao carregar página //thiago_4644337
document.addEventListener('DOMContentLoaded', function(){
    verificarLogin();
    initMenuMobile();
    if (document.getElementById('cadastro-form')){
        initCadastro();
    }
    if (document.getElementById('login-form')){
        initLogin();
    }
    if (document.getElementById('carrinho-itens')){
        carregarCarrinho();
        inicializarBotaoPagamento();
    }
    if (document.querySelector('.pagamento-section')){
        initPagamento();
    }
    if (document.getElementById('status-display')){
        initStatus();
    }
});

// Função que verifica o loguin //thiago_4644337
function verificarLogin(){
    const usuarioLogado=localStorage.getItem('usuarioLogado');
    if (usuarioLogado) {
        const usuario=JSON.parse(usuarioLogado);
        mostrarUsuarioLogado(usuario);
    }
}

// Função que mostra os dados do usuário logado //thiago_4644337
function mostrarUsuarioLogado(usuario){
    const userIcon=document.getElementById('user-icon');
    const userName=document.getElementById('user-name');
    const userInfo=document.getElementById('user-info');
    if (userIcon && userName && userInfo){
        userIcon.style.display = 'block';
        const primeiroNome = usuario.nome.split(' ')[0];
        userName.textContent = primeiroNome;
        userName.style.fontWeight = 'bold';
        userName.style.color = '#F7931E';
        userInfo.textContent = `Nome: ${usuario.nome}\nCPF: ${usuario.cpf}\nEndereço: ${usuario.endereco}\nEmail: ${usuario.email}`;
        userIcon.addEventListener('click', function(){
            const userMenu = document.getElementById('user-menu');
            userMenu.style.display = userMenu.style.display === 'none' ? 'block' : 'none';
        });
        document.getElementById('logout-btn').addEventListener('click', logout);
    }
}

// Função para sair/logout //thiago_4644337
function logout(){
    localStorage.removeItem('usuarioLogado');
    location.reload();
}

// Função para inicializar o cadastro //thiago_4644337
function initCadastro(){
    const form=document.getElementById('cadastro-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const nome = document.getElementById('nome').value;
        const cpf = document.getElementById('cpf').value;
        const endereco = document.getElementById('endereco').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;
        const consentimento = document.getElementById('consentimento').checked;
        if (!consentimento){
            alert('Você deve concordar com o uso dos dados.');
            return;
        }
        const usuario = { nome, cpf, endereco, email, senha, pontos: 0 };
        localStorage.setItem('usuario_' + email, JSON.stringify(usuario));
        alert('Ótima notícia. Cadastro realizado com sucesso!');
        form.reset();
    });
}

// Função para inicializar o login //thiago_4644337
function initLogin(){
    const form = document.getElementById('login-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const senha = document.getElementById('login-senha').value;
        // Faz a verificação se é o administrador //thiago_4644337
        if(email === 'raizes@adm.com' && senha === '#Francisca2026'){
            const admin = { nome: 'D.Francisca', email: 'raizes@adm.com', isAdmin: true };
            localStorage.setItem('usuarioLogado', JSON.stringify(admin));
            window.location.href = 'admin-dashboard.html';
            return;
        }
        const usuario = JSON.parse(localStorage.getItem('usuario_' + email));
        if(usuario && usuario.senha === senha){
            localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
            alert('Bem-vindo ao seu perfil do Raizes do nordeste!');
            location.reload();
        } else{
            alert('Email ou senha incorretos. Por favor, tente novamente.');
        }
    });
}


// Função que mostra o cardápio //thiago_4644337
function mostrarCardapio(cidade){
    document.getElementById('cidade-titulo').textContent = `Cardápio - ${cidade}`;
    const grid = document.getElementById('pratos-grid');
    grid.innerHTML = '';
    const pratos = lanchonetes[cidade] || [];
    pratos.forEach(prato => {
        const card = document.createElement('div');
        card.className = 'prato-card';
        card.innerHTML = `
            <img src="${prato.img}" alt="${prato.nome}" width="200" height="auto">
            <!-- INSIRA A IMAGEM AQUI -->
            <h4>${prato.nome}</h4>
            <p>R$ ${prato.preco.toFixed(2)}</p>
            ${prato.promocao ? '<p class="promocao">Em promoção!</p>' : ''}
            <button class="adicionar-btn" data-prato='${JSON.stringify(prato)}'>Adicionar ao Carrinho</button>
        `;
        grid.appendChild(card);
    });
    // insere o evento ao clicar no botão //thiago_4644337
    document.querySelectorAll('.adicionar-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const prato = JSON.parse(this.dataset.prato);
            adicionarAoCarrinho(prato);
        });
    });
}

// Função que adiciona ao carrinho //thiago_4644337
function adicionarAoCarrinho(prato) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.push(prato);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    alert('Prato adicionado ao carrinho!');
    window.location.href = 'carrinho.html';
}

// Função que carrega o carrinho //thiago_4644337
function carregarCarrinho(){
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const itensDiv = document.getElementById('carrinho-itens');
    let total = 0;
    itensDiv.innerHTML = '';
    if(carrinho.length === 0){
        itensDiv.innerHTML = '<p>Seu carrinho está vazio.</p>';
    }else{
        carrinho.forEach((item, index) => {
            const div = document.createElement('div');
            div.className = 'item-carrinho';
            div.innerHTML = `
                <div class="item-detalhes">
                    <img src="${item.img}" alt="${item.nome}" class="item-imagem">
                    <div class="item-info">
                        <h4>${item.nome}</h4>
                        <p class="item-preco">R$ ${item.preco.toFixed(2)}</p>
                    </div>
                    <button class="remover-btn">Remover</button>
                </div>
            `;
            itensDiv.appendChild(div);
            total += item.preco;
            
            const removerBtn = div.querySelector('.remover-btn');
            removerBtn.addEventListener('click', function() {
                removerDoCarrinho(index);
            });
        });
    }
    
    document.getElementById('total').textContent = total.toFixed(2);
}

// Função para remover do carrinho //thiago_4644337
function removerDoCarrinho(index){
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.splice(index, 1);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    location.reload();
}

// Função do botão de pagamento do carrinho //thiago_4644337
function inicializarBotaoPagamento(){
    const btnPagamento = document.getElementById('btn-pagamento');
    if(btnPagamento){
        btnPagamento.addEventListener('click', function(){
            const usuarioLogado = localStorage.getItem('usuarioLogado');
            if(!usuarioLogado){
                alert('Você precisa estar logado para realizar uma compra.');
                window.location.href = 'login.html';
            }else{
                window.location.href = 'pagamento.html';
            }
        });
    }
}

// Função que inicializa o pagamento //thiago_4644337
function initPagamento(){
    const usuarioLogado = localStorage.getItem('usuarioLogado');
    if(!usuarioLogado){
        document.querySelector('.pagamento-section').innerHTML = '<h2>Acesso Negado</h2><p>Você precisa estar logado para realizar uma compra.</p><a href="login.html" class="btn">Ir para Login</a>';
        return;
    }
    const usuario = JSON.parse(usuarioLogado);
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const listaItensDiv = document.getElementById('lista-itens');
    let total = 0;
    if(carrinho.length === 0){
        listaItensDiv.innerHTML = '<p>Carrinho vazio</p>';
    }else{
        listaItensDiv.innerHTML = '';
        carrinho.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'item-resumo';
            itemDiv.innerHTML = `
                <p><strong>${item.nome}</strong> - R$ ${item.preco.toFixed(2)}</p>
            `;
            listaItensDiv.appendChild(itemDiv);
            total += item.preco;
        });
    }
    // Preenche as informações do usuário //thiago_4644337
    const dadosUsuarioDiv = document.getElementById('dados-usuario');
    dadosUsuarioDiv.innerHTML = `
        <p><strong>Nome:</strong> ${usuario.nome}</p>
        <p><strong>Email:</strong> ${usuario.email}</p>
        <p><strong>Endereço:</strong> ${usuario.endereco}</p>
    `;
    document.getElementById('total-pedido').textContent = total.toFixed(2);
    // Evento do botão para o cliente confirmar o pagamento //thiago_4644337
    const btnConfirmar = document.getElementById('btn-confirmar-pagamento');
    if(btnConfirmar){
        btnConfirmar.addEventListener('click', function() {
            confirmarPagamento(usuario, carrinho, total);
        });
    }
}

// Função que confirma o pagamento //thiago_4644337
function confirmarPagamento(usuario, carrinho, total){
    const pagamentoConteudo = document.getElementById('pagamento-conteudo');
    const pagamentoResultado = document.getElementById('pagamento-resultado');
    pagamentoConteudo.style.display = 'none';
    pagamentoResultado.style.display = 'block';
    // Realiza o acúmulo de pontos do cliente //thiago_4644337
    if(usuario && !usuario.isAdmin){
        usuario.pontos = (usuario.pontos || 0) + 10;
        localStorage.setItem('usuario_' + usuario.email, JSON.stringify(usuario));
        localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
    }
    // Salva as informações do pedido do cliente //thiago_4644337
    if (carrinho.length > 0){
        const pedido = {
            id: Date.now(),
            usuario: usuario.nome,
            items: carrinho,
            total: total,
            data: new Date().toLocaleString('pt-BR'),
            status: 'Pedido recebido'
        };
        localStorage.setItem('pedido', JSON.stringify(pedido));
    }
    // Remover itens adicionados no carrinho //thiago_4644337
    localStorage.removeItem('carrinho');
}

// Função de atualização do status do pedido //thiago_4644337
function initStatus(){
    const statuses=['Pedido recebido', 'Em preparo', 'Saiu para entrega', 'Entregue'];
    let index = 0;
    const pontosSpan = document.getElementById('pontos');
    const statusDisplay = document.getElementById('status-display');
    const usuario = JSON.parse(localStorage.getItem('usuarioLogado'));
    const pedido = JSON.parse(localStorage.getItem('pedido'));
    if(usuario){
        pontosSpan.textContent = usuario.pontos || 0;
    }
    if(pedido){
        let pedidoHtml = `
            <div class="pedido-info">
                <p><strong>Número do Pedido:</strong> ${pedido.id}</p>
                <p><strong>Data:</strong> ${pedido.data}</p>
                <p><strong>Itens do Pedido:</strong></p>
                <ul>
        `;
        pedido.items.forEach(item => {
            pedidoHtml += `<li>${item.nome} - R$ ${item.preco.toFixed(2)}</li>`;
        });
        pedidoHtml += `</ul></div>`;
        statusDisplay.innerHTML = pedidoHtml + `<p id="status-text">Pedido recebido</p>`;
        
        const statusText = document.getElementById('status-text');
        const interval = setInterval(() => {
            statusText.textContent = statuses[index];
            index++;
            if(index >= statuses.length){
                clearInterval(interval);
            }
        }, 2000);
    }
}
// ATENÇÃO: Este código é apenas para apresentação de trabalho academico, não sendo aplicado para outros fins Att: Thiago_4644337