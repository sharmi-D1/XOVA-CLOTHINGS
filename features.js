document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".clothing-items .item");
    const selectedOutfit = document.getElementById("selected-outfit");

    let selectedItems = []; // Store selected item names

    items.forEach((item) => {
        item.addEventListener("click", function () {
            const itemText = this.querySelector("p").textContent; // Get the actual product name
            
            // Avoid duplicates
            if (!selectedItems.includes(itemText)) {
                selectedItems.push(itemText);
            }

            updateSelectedOutfit();
        });
    });

    function updateSelectedOutfit() {
        selectedOutfit.innerHTML = ""; // Clear previous selection
        selectedItems.forEach(item => {
            const p = document.createElement("p");
            p.textContent = item; // Only show product name
            selectedOutfit.appendChild(p);
        });
    }
});
