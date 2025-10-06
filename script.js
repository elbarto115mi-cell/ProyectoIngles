// Tabs
function tabs(navSelector) {
    const nav = document.querySelector(navSelector);
    const tabs = nav.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // Quitar "active" de todos los tabs
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            // Ocultar todos los contenidos
            contents.forEach(c => c.classList.remove("active"));

            // Mostrar solo el contenido que coincide con el id del tab
            const target = document.querySelector("." + tab.id);
            if (target) target.classList.add("active");
        });
    });

    // Inicial: mostrar el primero activo
    const activeTab = nav.querySelector(".tab.active");
    if (activeTab) {
        const target = document.querySelector("." + activeTab.id);
        if (target) target.classList.add("active");
    }
}

tabs(".menu-nav");


// ---- LOAD MORE ----
let loadMoreBtn1 = document.querySelector('#load-more-1');
let currentItem1 = 4;

loadMoreBtn1.onclick = () => {
    let boxes = [...document.querySelectorAll('.box-container-1 .box-1')];
    for (var i = currentItem1; i < currentItem1 + 4 && i < boxes.length; i++) {
        boxes[i].style.display = 'inline-block';
    }
    currentItem1 += 4;
    if (currentItem1 >= boxes.length) {
        loadMoreBtn1.style.display = 'none';
    }
}

let loadMoreBtn2 = document.querySelector('#load-more-2');
let currentItem2 = 4;

loadMoreBtn2.onclick = () => {
    let boxes = [...document.querySelectorAll('.box-container-2 .box-2')];
    for (var i = currentItem2; i < currentItem2 + 4 && i < boxes.length; i++) {
        boxes[i].style.display = 'inline-block';
    }
    currentItem2 += 4;
    if (currentItem2 >= boxes.length) {
        loadMoreBtn2.style.display = 'none';
    }
}

let loadMoreBtn3 = document.querySelector('#load-more-3');
let currentItem3 = 4;

loadMoreBtn3.onclick = () => {
    let boxes = [...document.querySelectorAll('.box-container-3 .box-3')];
    for (var i = currentItem3; i < currentItem3 + 4 && i < boxes.length; i++) {
        boxes[i].style.display = 'inline-block';
    }
    currentItem3 += 4;
    if (currentItem3 >= boxes.length) {
        loadMoreBtn3.style.display = 'none';
    }
}

document.getElementById("traducir").addEventListener("click", function() {
    const textoOriginal = document.getElementById("texto").innerText;

    

  });


