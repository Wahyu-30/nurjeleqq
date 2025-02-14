setInterval(() => {
    let loves = document.querySelectorAll('.love');
    loves.forEach(love => {
        let randomTop = Math.floor(Math.random() * 20) + 10;  // Acak posisi vertikal
        let randomLeft = Math.floor(Math.random() * 80) + 10;  // Acak posisi horizontal
        love.style.top = `${randomTop}%`;
        love.style.left = `${randomLeft}%`;
    });
}, 2000);