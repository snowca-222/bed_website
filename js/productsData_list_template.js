export function getProductData(){
    // 好眠商品資料獲取
    fetch('json/products_items.json')
    .then(res => {
        return res.json();
    })
    .then(productsData => 
        productList_temp(productsData)
    );

    // 限時商品資料獲取
    fetch('json/products_limited_items.json')
    .then(res => {
        return res.json();
    })
    .then(limitedData => 
        limitedList_temp(limitedData)
    );
    
};
const main_product_url = location.href;
let main_product_id;
if(main_product_url.indexOf('?') != -1){
    main_product_id = main_product_url.split('id=')[1]
}

function productList_temp(getData){
    let list_template = ``;
    getData.forEach( item => {
        list_template += `
            <div class="products_box_item grid-col-mb-12 grid-col-m-4">
                <a href="products_content.html?product_id=${main_product_id}&${item.product_link}">
                    <span class="product_img"><img src="https://source.unsplash.com/random/200x200?sig=1"></span>
                    <span class="product_name">${item.product_name}</span>
                </a>
            </div>
        `
    });
    $('#products_box').html(list_template)
}

function limitedList_temp(getData){
    let list_template= ``;
    getData.forEach( item => {
        list_template += `
        <div class="products_box_item grid-col-mb-12 grid-col-m-4">
            <a href="products_content.html?product_id=${main_product_id}&${item.product_link}">
                <span class="product_img"><img src="https://source.unsplash.com/random/200x200?sig=1"></span>
                <span class="product_name">${item.product_name}</span>
            </a>
        </div>
        `
    });
    $('.limited_products').html(list_template)
}
getProductData();
