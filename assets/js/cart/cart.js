// 전역 장바구니 저장소
window.healyCart = window.healyCart || [];

// 상품 추가
function addCartItem(name, qty, price) {
    const existing = window.healyCart.find(i => i.name === name);
    if (existing) {
        existing.qty += qty;
        existing.total = existing.qty * existing.price;
    } else {
        window.healyCart.push({
            name,
            qty,
            price,
            total: qty * price
        });
    }
}

// 장바구니 가져오기
function getCartItems() {
    return window.healyCart;
}

// 초기화
function clearCart() {
    window.healyCart = [];
}
