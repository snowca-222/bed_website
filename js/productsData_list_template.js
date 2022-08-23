export function getProductData(){
    fetch('json/products_items.json')
    .then(res => {
        return res.json();
    })
    .then(productsData => 
        productList_temp(productsData)
        )
}
function productList_temp(getData){
    let list_template = ``;
    getData.forEach( item => {
        list_template += `<div class="products_box_item grid-col-mb-12 grid-col-m-4"><a href="products_content.html?${item.product_link}">${item.product_name}</a></div>`
    });
    $('#products_box').html(list_template)
}
getProductData();
