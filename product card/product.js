 // Get all necessary elements
const categoryFilter = document.getElementById('category');
const priceFilter = document.getElementById('price');
const ratingFilter = document.getElementById('rating');
const productList = document.querySelectorAll('.product');

// Filter products by category
categoryFilter.addEventListener('change', filterProducts);
priceFilter.addEventListener('change', filterProducts);
ratingFilter.addEventListener('change', filterProducts);

function filterProducts() {
    const category = categoryFilter.value;
    const price = priceFilter.value;
    const rating = ratingFilter.value;

    productList.forEach(product => {
        const productCategory = product.getAttribute('data-category');
        const productPrice = parseFloat(product.getAttribute('data-price'));
        const productRating = parseInt(product.getAttribute('data-rating'));

        let isVisible = true;

        // Filter by category
        if (category !== 'all' && category !== productCategory) {
            isVisible = false;
        }

        // Filter by price
        if (price === 'low-to-high' && productPrice > 50) {
            isVisible = false;
        } else if (price === 'high-to-low' && productPrice < 50) {
            isVisible = false;
        }

        // Filter by rating
        if (rating === 'high-to-low' && productRating < 4) {
            isVisible = false;
        } else if (rating === 'low-to-high' && productRating > 3) {
            isVisible = false;
        }

        // Show or hide product based on filters
        product.style.display = isVisible ? 'block' : 'none';
    });
}
