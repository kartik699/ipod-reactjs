const wheelRegion = $('#wheel')[0];
const menuItems = $('.menu-item');

const zt = new ZingTouch.Region(wheelRegion);

zt.bind(wheelRegion, 'rotate', function(e){

    if((!(Math.floor(e.detail.distanceFromOrigin) % 45)) && (Math.floor(e.detail.distanceFromOrigin) + 1 > Math.floor(e.detail.distanceFromOrigin))){
        let currActiveId = parseInt($('.active')[0].dataset.itemid);
        currActiveId = (++currActiveId) % menuItems.length;
        $('.active').removeClass('active');
        $(`li[data-itemid=${currActiveId}]`).addClass('active');
    }

});