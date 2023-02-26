const wheelRegion = $('#wheel')[0];
const menuItems = $('.menu-item');

// creating a region for rotate event
const zt = new ZingTouch.Region(wheelRegion);

// binding the rotate event to that region
zt.bind(wheelRegion, 'rotate', function(e){

    // if angle change is 45deg and in clockwise direction, change items in top to bottom manner
    if((!(Math.floor(e.detail.distanceFromOrigin + 1) % 45)) && (e.detail.distanceFromLast > 0)){

        let currActiveId = parseInt($('.active')[0].dataset.itemid);   // getting active list item id from data-itemid attribute
        currActiveId = (++currActiveId) % menuItems.length;     // keeping currActiveId in the range of 0-3
        $('.active').removeClass('active');
        $(`li[data-itemid=${currActiveId}]`).addClass('active');   // adding active class to next menu item

    // if angle change is 45deg and in counter-clockwise direction, change items in bottom to top manner
    }else if((!(Math.floor(e.detail.distanceFromOrigin + 1) % 45)) && (e.detail.distanceFromLast < 0)){

        let currActiveId = parseInt($('.active')[0].dataset.itemid);
        currActiveId = (--currActiveId) % menuItems.length;

        // when currActiveId becomes -1 set it to the last menu item's id
        if(currActiveId < 0)
            currActiveId = 3;

        $('.active').removeClass('active');
        $(`li[data-itemid=${currActiveId}]`).addClass('active');

    }

});