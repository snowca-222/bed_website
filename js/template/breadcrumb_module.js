import { nav_lists, page_id } from "/bed_website/js/template/link_module.js";
// 麵包屑功能
export function breadcrumbTemp(){
    const main_product_url = location.href;
    let get_main_product_para = '';
    let main_product_id = '';
    if(main_product_url.indexOf('?') != -1){
        get_main_product_para = main_product_url.split('id=')[1]
        if(get_main_product_para.indexOf('&') != -1){
            main_product_id = get_main_product_para.split('&')[0]
            // console.log(`if:`,main_product_id)
        }else{
            main_product_id = get_main_product_para;
            // console.log(`else:`,main_product_id)
        }
    }
    const breadcrumb_temp = `
        <span>目前位置：</span>
        <ol>
            <li><a href="${nav_lists[page_id-1].link}?product_id=${main_product_id}">${nav_lists[page_id-1].name}</a></li>
        </ol>
    `;
    document.querySelector('#breadcrumb_nav').innerHTML = breadcrumb_temp;
}
breadcrumbTemp();