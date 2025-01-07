    // HEAD

let head = document.getElementsByTagName("head")[0];
head.innerHTML += `
    <link rel="shortcut icon" href="/anexos/midias/favicon-32x32.png" type="image/x-icon">
`;
    


    //BOTOES

let botoes = document.getElementById('icones')
botoes.innerHTML = `      
    <button type="button" id="back" class="button">
        <img src="/anexos/midias/icon-back.svg" id="iback" class="icon" alt="Voltar">
    </button>
    <button type="button" onclick="info()" id="info" class="button">
        <img src="/anexos/midias/icon-info.svg" id="iinfo" class="icon" alt="Informação" >
    </button>
    <div class="warn" id="warn">
    </div>
    <button type="button" onclick="dark()" id="dark" class="button">
        <img src="/anexos/midias/icon-dark1.svg" id="idark" class="icon" alt="Modo escuro">
    </button>
    <button type="button" id="maxi" class="button">
        <img src="/anexos/midias/icon-maxi.svg"id="imaxi" class="icon" onclick="maxi()" alt="Maximizar" >
    </button>
`;

    // WARNING

let war = document.getElementById("warn");
war.innerHTML = `
    Caso esteja tendo problemas desative o adblock, pode ajudar.
    Para outros casos você pode me mandar uma mensagem descrevendo o problema abaixo.
    <form action="">
        <label for="msg">Mensagem:</label><br>
        <input type="text" value="" placeholder="Descreva o problema aqui...">
    </form>
`;



    // FUNÇÕES BOTÕES

// BACK

document.getElementById("back").addEventListener("click", () => {
    history.back();
});
      
// INFO

function info() {
    let img = document.getElementById("info");
    if (warn.style.display != 'block') {
        warn.style.display = 'block';
        img.innerHTML = `
        <img src="/anexos/midias/icon-close.svg" id="iinfo" class="icon" alt="Informação">
        `;
    } else {
        warn.style.display = 'none';
        img.innerHTML = `
        <img src="/anexos/midias/icon-info.svg" id="iinfo" class="icon" alt="Informação">
        `;
    }
}

// TELA CHEIA

function maxi() {
    let img = document.getElementById("maxi");
    let tela = document.documentElement;
    if (tela.requestFullscreen) {
        tela.requestFullscreen(), img.innerHTML = `
        <img src="/anexos/midias/icon-mini.svg" id="imaxi" class="icon" alt="Minimizar" onclick="mini()">
        `;
      } else if (tela.webkitRequestFullscreen) { /* Safari */
        tela.webkitRequestFullscreen(), img.innerHTML = `
        <img src="/anexos/midias/icon-mini.svg" id="imaxi" class="icon" alt="Minimizar" onclick="mini()">
        `;
      } else if (tela.msRequestFullscreen) { /* IE11 */
        tela.msRequestFullscreen(), img.innerHTML = `
        <img src="/anexos/midias/icon-mini.svg" id="imaxi" class="icon" alt="Minimizar" onclick="mini()">
        `;
      }
}

function mini() {
    let img = document.getElementById("maxi");
    if (document.exitFullscreen) {
        document.exitFullscreen(), img.innerHTML = `
        <img src="/anexos/midias/icon-maxi.svg" id="imaxi" class="icon" alt="Maximizar" onclick="maxi()">
        `;
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen(), img.innerHTML = `
        <img src="/anexos/midias/icon-maxi.svg" id="imaxi" class="icon" alt="Maximizar" onclick="maxi()">
        `;
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen(), img.innerHTML = `
        <img src="/anexos/midias/icon-maxi.svg" id="imaxi" class="icon" alt="Maximizar" onclick="maxi()">
        `;
    }
} 

// MODO ESCURO

let root = document.querySelector(':root');
let icon = document.getElementsByClassName('icon');
for (let i = 0; i < icon.length; i++) {
    console.dir(icon[i].style.filter = 'invert(100%)');
}

function dark() {
    if (getComputedStyle(root).getPropertyValue('--branco') == '#ffffff') {
        root.style.setProperty('--branco', '#000000');
        root.style.setProperty('--preto', '#ffffff');
        for (let i = 0; i < icon.length; i++) {
            console.dir(icon[i].style.filter = 'invert(0%)');
        }
    } else {
        root.style.setProperty('--branco', '#ffffff');
        root.style.setProperty('--preto', '#000000');
        for (let i = 0; i < icon.length; i++) {
            console.dir(icon[i].style.filter = 'invert(100%)');
        }
    }
}

