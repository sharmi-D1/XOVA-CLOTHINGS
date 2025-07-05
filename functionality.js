// 3D Body Scanning and Custom Fit
document.getElementById('scan-button').addEventListener('click', function() {
    const fileInput = document.getElementById('body-scan-upload');
    const file = fileInput.files[0];
    
    if (file) {
        // Simulate a fit recommendation based on the uploaded file
        document.getElementById('fit-recommendations').innerHTML = `
            <h3>Fit Recommendations:</h3>
            <ul>
                <li>Size: M</li>
                <li>Recommended Styles: Casual, Sporty</li>
            </ul>
        `;
    } else {
        alert('Please upload a file for scanning.');
    }
});

// Outfit Builder Tool
const outfitBuilder = document.querySelector('.outfit-builder');
const selectedOutfit = document.getElementById('selected-outfit');

outfitBuilder.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', function() {
        const itemName = this.getAttribute('data-item');
        const outfitItem = document.createElement('div');
        outfitItem.textContent = itemName;
        selectedOutfit.appendChild(outfitItem);
    });
});

document.getElementById('purchase-button').addEventListener('click', function() {
    alert('Thank you for your purchase!');
});

// Live Fashion Shows and Events
document.getElementById('buy-now-button').addEventListener('click', function() {
    // Simulate adding the featured item to the cart
    alert('Item added to cart from the live show!');
});