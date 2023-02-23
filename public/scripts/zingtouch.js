const wheelContainer = $('#wheel-container')[0];
const wheelRegion = $('#wheel')[0];

const zt = new ZingTouch.Region(wheelContainer);

zt.bind(wheelRegion, 'rotate', function(e){
    console.log(Math.floor(e.detail.distanceFromOrigin));
});