export function getProductData(){
    fetch('json/products_items.json')
    .then(res => {
        return res.json();
    })
    .then(productsData => console.log(productsData))
}
