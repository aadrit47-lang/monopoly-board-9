// =====================================
// Make the property cards draggable
// =====================================

const cards = document.querySelectorAll(".property");

cards.forEach(card => {

    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    card.addEventListener("mousedown", function (e) {

        isDragging = true;

        const rect = card.getBoundingClientRect();

        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;

        card.style.zIndex = 1000;
    });


    document.addEventListener("mousemove", function (e) {

        if (!isDragging) return;

        const board = document.querySelector(".board");
        const boardRect = board.getBoundingClientRect();

        let x = e.clientX - boardRect.left - offsetX;
        let y = e.clientY - boardRect.top - offsetY;

        // Keep card inside board

        x = Math.max(
            0,
            Math.min(x, boardRect.width - card.offsetWidth)
        );

        y = Math.max(
            0,
            Math.min(y, boardRect.height - card.offsetHeight)
        );

        card.style.left = x + "px";
        card.style.top = y + "px";
    });


    document.addEventListener("mouseup", function () {

        if (isDragging) {
            isDragging = false;
        }

    });

});