const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
    const cards = document.querySelectorAll('.w3-card');
    cards.forEach(card => {
        card.classList.toggle('dark');
    });
});
