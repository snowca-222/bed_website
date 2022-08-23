import { nav_lists , page_id } from "/../js/template/link_module.js";
// 頁首
export function headerTemp(){
    let header_temp = `
        <div class="container">
            <div class="logo"><a href="index.html"><img src="images/top_logo.png"></a></div>
            <div id="nav_hamberger">
                <div class="ham_bar"></div>
            </div>
            <nav>
                <ul>
                    ${nav_lists.map((list) => {
                        return `
                            <li style="display: ${list.show};">
                                ${(list.lists != '') ? 
                                `<div class="second_lists">
                                    ${list.name}
                                    <ul class="secList_box">
                                    ${list.lists.map((sec_list) => {
                                        return `
                                                <li><a href="${sec_list.listLink}">${sec_list.listName}</a></li>
                                                `
                                            }).join('')}
                                            
                                    </ul>
                                </div>`:
                                `<a href="${list.link}">${list.name}</a>`}
                            </li>
                        `
                    }).join('')}
                </ul>
            </nav>
            <div class="blackBoard"></div>
        </div>
    `;
    document.querySelector('header').innerHTML = header_temp;
    
    // 判斷目前頁面
    if(page_id != 0){
        document.querySelector(`header nav > ul > li:nth-child(${page_id})`).classList.add('active');
    }
    $('#nav_hamberger ,.blackBoard').on('click',function(){
        $('.ham_bar, header nav, .blackBoard').toggleClass('active');
    })
}
// 頁尾
export function footerTemp(){
    let footer_temp = `
    <div class="container clearfix">
        <div class="logo"><img src="images/straight_logo.png"></div>
        <div id="footer_information">
            <div id="company_list">
                <ul>
                    <li class="company_name">製床所御品</li>
                    <li>台中市北區忠明路234號</li>
                    <li>E-mail&nbsp;:&nbsp;<a href="mailto:">xxx@gmail.com</a></li>
                    <li>連絡電話&nbsp;:&nbsp;<a href="TEL:04-23201861">04-23201861</a></li>
                    <li>FB粉絲頁&nbsp;:&nbsp;<a href="https://www.facebook.com/wonderfulMattres" target="_blank">04-23201861</a></li>
                </ul>
            </div>
            <div id="social_contact_us">
                <ul class="clearfix">
                    <li><div><img src="images/icon/fb_icon.png" title="製床所 FB" alt="製床所 FB"></div></li>
                    <li><div><img src="images/icon/line_icon.png" title="製床所 line" alt="製床所 line"></div></li>
                    <li><div><img src="images/icon/ig_icon.png" title="製床所 ig" alt="製床所 ig"></div></li>
                </ul>
            </div>
        </div>
    </div>
    `;
    document.querySelector('footer').innerHTML = footer_temp;
}
// 監聽螢幕尺寸
$(window).resize(function(){
    if($(window).width() > 768){
        $('.ham_bar, header nav, .blackBoard').removeClass('active');
    }
})
// 右下角浮動icon