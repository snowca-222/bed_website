//scroll 點擊效果
let clickStatus = 0;
let timer = 300;
export function srcollBoxTemp(){
    const scrollBoxes = $('.scrollItem').length;
    $('.scrollItem').css('transform','translate(0px)')
    for(let i = 0; i < scrollBoxes; i++){
        let list_width = parseInt($('.scrollItem').eq(i).find('li').css('width')) // 獲取各區塊內 li 寬度
        let list_height = parseInt($('.scrollItem').eq(i).find('li').css('height')) // 獲取各區塊內 li 寬度
        let scrollBoxes_listLength = $('.scrollItem').eq(i).find('.listItem').length // 獲取個區塊內 li 的數量
        for(let j = 0; j < scrollBoxes_listLength; j++){
            $('.scrollItem').eq(i).find('li').eq(j).css({'left': list_width * j,'width': list_width})
        }
        if($(window).width() < 768){
            $('.scrollItem').eq(i).find('li').eq(0).addClass('active').siblings('.active').removeClass('active');
        }else if($(window).width() < 993){
            $('.scrollItem').eq(i).find('li').eq(1).addClass('active').siblings('.active').removeClass('active');
        }else{
            $('.scrollItem').eq(i).find('li').eq(2).addClass('active').siblings('.active').removeClass('active');
        }
        $('.scrollItem').eq(i).css('height',list_height); // 給予外層計算過後的高度回饋
    }
    $('.btn_right').on('click',function(){
        go_next($(this));
    })
    $('.btn_left').on('click',function(){
        go_prev($(this));
    })
}
srcollBoxTemp();

function go_prev(getThis){
    const this_order = getThis.parent().prev('.scrollBox_order').children('.scrollItem') // 滾動區塊
    const this_item = getThis.parent().prev('.scrollBox_order').children('.scrollItem').children('.listItem'); // 找到需要滾動的 listItem 內容區塊
    const list_length = this_item.length; //計算總共張數
    const listItemWidth = parseInt(this_item.css('width'));

    // 記憶目前圖片的位置
    let item_position = [];
    for( var i = 0; i < list_length; i++){
        if( i < 5){
            item_position.push(parseInt(this_item.eq(i).css('left')))
        }
    }

    if(clickStatus == 0){
        clickStatus = 1;
        // 計算既有張數+1 = 總長度
        let totalLength = listItemWidth * (list_length + 1) ;
        const last_item_data = this_item.eq(list_length - 1).attr('data-item');
        this_order.css({'width':totalLength,'transform':`translate(${parseInt(this_item.eq(1).css('left'))}px)`,'transition': 'transform .2s linear'});

        if(this_item.eq(0).hasClass('active')){
            this_item.eq(0).removeClass('active')
            this_item.eq(list_length - 1).addClass('active')
        }else{
            getThis.parent().prev('.scrollBox_order').children('.scrollItem').find('.active').removeClass('active').prev().addClass('active')
        }
        // 執行滾動法則
        const first_item = this_item.eq(0);
        const last_item = this_item.eq(list_length - 1);
        const first_item_position = first_item.css('left');
        const append_position = `${parseInt(first_item_position) + listItemWidth}px`;

        let appendBox_first = `<li class="listItem delete-only" style="left: -${append_position}; width: ${this_item.css('width')};" data-item="${last_item_data}">${last_item.html()}</li>`;
        this_order.prepend(appendBox_first);
        setTimeout(()=>{
            this_item.eq(list_length - 1).remove();
            // 計算修正後初始張數 = 總長度
            totalLength = listItemWidth * list_length;
            this_order.css({'width':totalLength,'transform':`translate(0px)`,'transition':'none'});

            for(let i = 0; i <= list_length; i++){
                this_item.eq(i).css('left',item_position[i+1])
            }

            let appendBox_first2 = `<li class="listItem" style="left: 0px; width: ${this_item.css('width')};" data-item="${last_item_data}">${last_item.html()}</li>`;
            this_order.prepend(appendBox_first2);
            $('.delete-only').remove();

            clickStatus = 0
        },timer);
    }
}
function go_next(getThis){
    // 執行滾動法則
    const this_order = getThis.parent().prev('.scrollBox_order').children('.scrollItem') // 滾動區塊
    const this_item = getThis.parent().prev('.scrollBox_order').children('.scrollItem').children('.listItem'); // 找到需要滾動的 listItem 內容區塊
    const list_length = this_item.length; //計算總共張數
    const listItemWidth = parseInt(this_item.css('width'));

    // 記憶目前圖片的位置
    let item_position = [];
    for( var i = 0; i < list_length; i++){
        if( i < 5){
            item_position.push(parseInt(this_item.eq(i).css('left')))
        }
    }

    if(clickStatus == 0){
        clickStatus = 1;
        // 計算既有張數+1 = 總長度
        let totalLength = listItemWidth * (list_length + 1);
        const first_item_data = this_item.eq(0).attr('data-item');
        this_order.css({'width':totalLength,'transform': `translate(${-1 * (parseInt(this_item.eq(1).css('width')))}px)`,'transition': 'transform .2s linear'});

        if(this_item.eq(list_length - 1).hasClass('active')){
            this_item.eq(list_length - 1).removeClass('active')
            this_item.eq(0).addClass('active')
        }else{
            getThis.parent().prev('.scrollBox_order').children('.scrollItem').find('.active').removeClass('active').next().addClass('active')
        }
        // 執行滾動法則
        const first_item = this_item.eq(0);
        const last_item = this_item.eq(list_length - 1);
        const last_item_position = last_item.css('left');
        const append_position = `${parseInt(last_item_position) + listItemWidth}px`;

        let appendBox_last = `<li class="listItem delete-only" style="left: ${append_position}; width: ${this_item.css('width')};">${first_item.html()}</li>`;
        this_order.append(appendBox_last);
        
        setTimeout(function(){
            this_item.eq(0).remove();
            // 計算修正後初始張數 = 總長度
            totalLength = listItemWidth * list_length;
            this_order.css({'width':totalLength,'transform':'translate(0)','transition':'none'});

            for(let i = 0; i <= list_length; i++){
                this_item.eq(i+1).css('left',item_position[i])
            }
            let appendBox_last2 = `<li class="listItem" style="left: ${item_position[list_length - 1]}px; width: ${this_item.css('width')};" data-item="${first_item_data}">${first_item.html()}</li>`;
            this_order.append(appendBox_last2);
            $('.delete-only').remove();
            clickStatus = 0;
        },timer);
    }
}
window.onresize = () => {
    srcollBoxTemp();
}