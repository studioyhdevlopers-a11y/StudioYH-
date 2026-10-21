// Copy Code Function
function copyCode(id, btn) {
    const text = document.getElementById(id).innerText;
    navigator.clipboard.writeText(text).then(() => {
        btn.innerText = "Copied ✓";
        btn.style.backgroundColor = "#4ade80";
        setTimeout(() => {
            btn.innerText = "Copy";
            btn.style.backgroundColor = "#38bdf8";
        }, 2000);
    });
}

// Filter Categories and Form View
function filterCategory(cat) {
    const buttons = document.querySelectorAll('.cat-btn');
    buttons.forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');

    const formSection = document.getElementById('add-model-section');
    const grid = document.getElementById('modelsGrid');

    if (cat === 'add-model') {
        formSection.style.display = 'block';
        grid.style.display = 'none';
    } else {
        formSection.style.display = 'none';
        grid.style.display = 'grid';
    }
}

// Search Functionality
function searchScripts() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.getElementsByClassName('code-card');

    for (let i = 0; i < cards.length; i++) {
        const title = cards[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
        if (title.includes(query)) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}
