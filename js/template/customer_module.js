// 職人客製化
export function customerTemp(){
    let customer_temp = `
        <div class="container clearfix">
            <div class="title_left">
                <div class="title">職人客製化</div>
                <div class="slogan_second">您想要的，製床所都能為您客製</div>
            </div>
            <!-- <div id="customerBox" class="content_right"><img src="images/customer_design.png" alt="職人客製化"></div>-->
            <div id="customerBox" class="content_right">
                <div class="the_dog"><img src="images/customer_design_dog.png"></div>
                <div class="the_bed_style_box">
                    <div class="bed_style_item"><div class="bed_img"><img src="images/customer_design1.png"></div><div class="customer_text">尺寸</div></div>
                    <div class="bed_style_item"><div class="bed_img"><img src="images/customer_design2.png"></div><div class="customer_text">軟硬度</div></div>
                    <div class="bed_style_item"><div class="bed_img"><img src="images/customer_design3.png"></div><div class="customer_text">造型</div></div>
                </div>
            </div>
        </div>
    `;
    document.querySelector('#customized').innerHTML = customer_temp;
}
customerTemp();