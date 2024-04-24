const list = document.getElementById("list");
let draggingItem = null;

list.addEventListener("dragstart", (event) => {
    draggingItem = event.target;
    draggingItem.classList.add("dragging");
});

list.addEventListener("dragover", (event) => {
    event.preventDefault();
    const draggingRect = draggingItem.getBoundingClientRect();
    const draggingCenter = draggingRect.top + draggingRect.height / 2;

    const targetItem = event.target.closest("li");
    if (!targetItem) return;

    const targetRect = targetItem.getBoundingClientRect();
    const isAfter = draggingCenter > targetRect.top + targetRect.height / 2;

    if (isAfter) {
        list.insertBefore(draggingItem, targetItem.nextElementSibling);
    } else {
        list.insertBefore(draggingItem, targetItem);
    }
});

list.addEventListener("dragend", () => {
    draggingItem.classList.remove("dragging");
    draggingItem = null;
});