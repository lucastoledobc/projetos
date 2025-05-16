// Head

const head = document.getElementsByTagName("head")[0];
head.innerHTML += `
    <meta name="description" content="Site de Física para ensino básico, ensino médio e ensino superior.">
    <link rel="shortcut icon" href="anexos/midias/favicon-32x32.png" type="image/x-icon">
    `;

// Header
const body = document.getElementsByTagName("body");
const header = document.getElementsByTagName("header")[0];
header.innerHTML += `        
        <section id="cabe">
            <div class="space">
                <button type="submit" onclick="dark()" id="dark" class="dark">
                    <img  id="idark" class="icon" src="anexos/midias/icon-dark1.svg" alt="Modo escuro">
                </button>
            </div>
            <h1>Lumi Física</h1>
            <div id="space" class="space">
                <button id="lupa" onclick="lupa()" class="lupa">
                    <img id="ilupa" class="icon" src="anexos/midias/icon-search-2.svg" alt="procurar">
                </button>
            </div>
        </section>
        <div id="search">
            <form action="/php/search.php">
                <input type="text" placeholder="Procurar.." name="search">
                <button type="submit" id="lupa2" class="lupa">
                    <img  id="ilupa" class="icon" src="anexos/midias/icon-search-2.svg" alt="procurar">
                </button>
            </form>
        </div>
        <nav id="nav1" class="nav1"></nav>
        <div id="barra"></div>
`;

const nav1 = document.getElementById('nav1');
nav1.innerHTML = `
<a href="#" id="nav01">Home</a>
<a href="#" id="nav02">Conteúdo</a>
<a href="#" id="nav03">Jogos</a>
<a href="#" id="nav04">Projetos</a>
<a href="#" id="nav05">Sobre</a>
`;
    
// Footer (criar ad aqui)
let footer = document.getElementsByTagName("footer")[0];
footer.innerHTML = `Site criado por Lucas Toledo.`;

/* MODO ESCURO */

let root = document.querySelector(':root');
root.style.setProperty('--branco', '#ffffff');

function dark() {
    if (getComputedStyle(root).getPropertyValue('--branco') == '#ffffff') {
        root.style.setProperty('--branco', '#000000');
        root.style.setProperty('--preto', '#ffffff');
        root.style.setProperty('--fundo', '#01202D');
        root.style.setProperty('--shadow', '#ffffff45');

        root.style.setProperty('--cor5', '#14546F');
        root.style.setProperty('--cor4', '#04415B');
        root.style.setProperty('--cor3', '#023145');
        root.style.setProperty('--cor2', '#01202D');
        root.style.setProperty('--cor1', '#000F15');

        // root.style.setProperty('filter', 'invert(100%)');
    } else {
        root.style.setProperty('--branco', '#ffffff');
        root.style.setProperty('--preto', '#000000');
        root.style.setProperty('--fundo', '#ffffff');
        root.style.setProperty('--shadow', '#00000050');

        root.style.setProperty('--cor1', '#B7E8FD');
        root.style.setProperty('--cor2', '#5DCBFA');
        root.style.setProperty('--cor3', '#07ADF5');
        root.style.setProperty('--cor4', '#056F9C');
        root.style.setProperty('--cor5', '#023145');

        // root.style.setProperty('filter', 'invert(0%)');
    }
}

// Lupa
let caixa = document.getElementById('search');
let space = document.getElementById('space');

function lupa() {
    if (caixa.style.opacity == '1') {
        caixa.style.top = '-10%';
        caixa.style.opacity = '0';
        caixa.style.transition = '0.5s';
        space.innerHTML =`
        <button id="lupa" onclick="lupa()" class="lupa">
            <img id="ilupa" class="icon" src="anexos/midias/icon-search-2.svg" alt="procurar">
        </button>
        `;
    }
    else {
        caixa.style.top = '0%';
        caixa.style.opacity = '1';
        caixa.style.transition = '0.5s';
        space.innerHTML =`
        <button id="lupa" onclick="lupa()" class="lupa">
            <img id="ilupa" class="icon" src="anexos/midias/icon-close-2.svg" alt="procurar">
        </button>
        `;
    }
}

/*  */

// Caixa de Dicas
function tip1() {
    box1.style.display = 'block';
}
function fechar() {
    box1.style.display = 'none';
}