import { nav_lists, page_id } from "../js/template/link_module.js";
// 麵包屑功能
export function breadcrumbTemp(){
    const breadcrumb_temp = `
        <span>目前位置：</span>
        <ol>
            <li><a href="${nav_lists[page_id-1].link}">${nav_lists[page_id-1].name}</a></li>
        </ol>
    `;
    document.querySelector('#breadcrumb_nav').innerHTML = breadcrumb_temp;
}
breadcrumbTemp();