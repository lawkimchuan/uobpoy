(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 360,
	height: 360,
	fps: 15,
	color: "#FFFFFF",
	manifest: [
		{src:"images/logo_1.png", id:"logo_1"},
		{src:"images/logo_2.png", id:"logo_2"},
		{src:"images/logo_BG.png", id:"logo_BG"},
		{src:"images/logo_text.png", id:"logo_text"}
	]
};

// stage content:
(lib.uobpoylogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.instance = new lib.logo_text();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(301));

	// red
	this.instance_1 = new lib.red("synched",0);
	this.instance_1.setTransform(300,300,1,1,0,0,0,300,300);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(119).to({_off:false},0).to({alpha:1},60).wait(60).to({startPosition:0},0).to({alpha:0},61).wait(1));

	// blue
	this.instance_2 = new lib.blue("synched",0);
	this.instance_2.setTransform(300,300,1,1,0,0,0,300,300);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},59).wait(105).to({startPosition:0},0).to({alpha:0},15).wait(122));

	// logo
	this.instance_3 = new lib.orig("synched",0);
	this.instance_3.setTransform(300,300,1,1,0,0,0,300,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(44).to({startPosition:0},0).to({alpha:0},15).to({_off:true},1).wait(164).to({_off:false},0).to({alpha:1},15).wait(62));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(180,180,360,360);


// symbols:
(lib.logo_1 = function() {
	this.initialize(img.logo_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.logo_2 = function() {
	this.initialize(img.logo_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,600);


(lib.logo_BG = function() {
	this.initialize(img.logo_BG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,360,360);


(lib.logo_text = function() {
	this.initialize(img.logo_text);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,360,360);


(lib.red = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.logo_1();
	this.instance.setTransform(0,0,0.6,0.6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,360,360);


(lib.orig = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.logo_BG();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,360,360);


(lib.blue = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.logo_2();
	this.instance.setTransform(0,0,0.6,0.6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,360,360);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;