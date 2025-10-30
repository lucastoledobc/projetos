// HEAD

let head = document.getElementsByTagName("head")[0];
head.innerHTML += `
    <link rel="shortcut icon" href="../../anexos/midias/favicon-32x32.png" type="image/x-icon">
`;
    


    //BOTOES

let botoes = document.getElementById('botoes')
botoes.innerHTML = `
    <button type="button" id="back" class="button">
        <img src="../../anexos/midias/icon-back.svg" id="iback" class="icon" alt="Voltar">
    </button>

    <div class="warn" id="warn"></div>

    <button type="button" id="dark" class="button" onclick="dark()">
        <img src="../../anexos/midias/icon-dark1.svg" id="idark" class="icon" alt="Modo escuro">
    </button>

    <button type="button" id="info" class="button" onclick="info()">
        <img src="../../anexos/midias/icon-info.svg" id="iinfo" class="icon" alt="Informação">
    </button>

    <button type="button" id="maxi" class="button">
        <img src="../../anexos/midias/icon-maxi.svg"id="imaxi" class="icon" onclick="maxi()" alt="Maximizar" >
    </button>
`;

    // BACK

document.getElementById("back").addEventListener("click", () => {
    history.back();
});

    // WARNING

let warn = document.getElementById("warn");
warn.innerHTML = `
    Caso esteja tendo problemas desative o adblock, pode ajudar.
    Para outros casos você pode me mandar uma mensagem descrevendo o problema abaixo.
    <form action="">
        <input type="text" value="" placeholder="Descreva o problema aqui...">
    </form>
    <button type="button" id="enviar">Enviar</button>
`;
warn.style.opacity = '0';
warn.style.right = '0%';
warn.style.visibility = 'collapse';

    // FUNÇÕES BOTÕES
        
// INFO

function info() {
    let info = document.getElementById('info');
    let dark = document.getElementById('dark');

    if (warn.style.opacity == '0') {
        warn.style.visibility = 'visible';
        warn.style.opacity = '100';
        warn.style.right = 'clamp(1rem, 12vw, 6vh)';
        warn.style.transition = '1s';

        info.innerHTML = `
        <img src="../../anexos/midias/icon-close.svg" id="iinfo" class="icon" alt="Fechar">
        `;
        
        dark.style.top = 'clamp(2rem,12vw,6vh)';
        dark.style.opacity = '100';
        dark.style.transition = '1s';

        let iinfo = document.getElementById('iinfo'); /* tem que ficar aqui dentro */
        if (vdark==1) {
            iinfo.style.filter = 'invert(100%)';
        } else {
            iinfo.style.filter = 'invert(0%)';
        }
    } else {
        warn.style.opacity = '0';
        warn.style.right = '0%';
        warn.style.transition = '1s';
        warn.style.visibility = 'collapse';
        
        info.innerHTML = `
        <img src="../../anexos/midias/icon-info.svg" id="iinfo" class="icon" alt="Informação">
        `;

        dark.style.top = '10px';
        dark.style.opacity = '0';
        dark.style.transition = '1s';
        if (vdark==1) {
            iinfo.style.filter = 'invert(100%)';
        } else {
            iinfo.style.filter = 'invert(0%)';
        }
    }
}

// MODO ESCURO

let root = document.querySelector(':root');
let icon = document.getElementsByClassName('icon');
let vdark = 1;

function dark() {
    if (getComputedStyle(root).getPropertyValue('--branco') == '#ffffff') {
        root.style.setProperty('--branco', '#000000');
        root.style.setProperty('--preto', '#ffffff');
        for (let i = 0; i < icon.length; i++) {
            console.dir(icon[i].style.filter = 'invert(0%)');
        }
        vdark = 0;
    } else {
        root.style.setProperty('--branco', '#ffffff');
        root.style.setProperty('--preto', '#000000');
        for (let i = 0; i < icon.length; i++) {
            console.dir(icon[i].style.filter = 'invert(100%)');
        }
        vdark = 1;
    }
}

// TELA CHEIA

function maxi() {
    let img = document.getElementById("maxi");
    let tela = document.documentElement;
    if (tela.requestFullscreen) {
        tela.requestFullscreen(), img.innerHTML = `
        <img src="../../anexos/midias/icon-mini.svg" id="imaxi" class="icon" alt="Minimizar" onclick="mini()">
        `;
        } else if (tela.webkitRequestFullscreen) { /* Safari */
        tela.webkitRequestFullscreen(), img.innerHTML = `
        <img src="../../anexos/midias/icon-mini.svg" id="imaxi" class="icon" alt="Minimizar" onclick="mini()">
        `;
        } else if (tela.msRequestFullscreen) { /* IE11 */
        tela.msRequestFullscreen(), img.innerHTML = `
        <img src="../../anexos/midias/icon-mini.svg" id="imaxi" class="icon" alt="Minimizar" onclick="mini()">
        `;
        }
}

function mini() {
    let img = document.getElementById("maxi");
    if (document.exitFullscreen) {
        document.exitFullscreen(), img.innerHTML = `
        <img src="../../anexos/midias/icon-maxi.svg" id="imaxi" class="icon" alt="Maximizar" onclick="maxi()">
        `;
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen(), img.innerHTML = `
        <img src="../../anexos/midias/icon-maxi.svg" id="imaxi" class="icon" alt="Maximizar" onclick="maxi()">
        `;
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen(), img.innerHTML = `
        <img src="../../anexos/midias/icon-maxi.svg" id="imaxi" class="icon" alt="Maximizar" onclick="maxi()">
        `;
    }
} 

