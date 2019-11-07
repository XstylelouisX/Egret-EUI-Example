class ScrollerScene extends eui.Component implements  eui.UIComponent {

	private scroller: eui.Scroller;
	
	constructor() {
        super();

        //標題
		var title:eui.Label = new eui.Label();
		title.x = 300;
    	title.y = 50;
		title.text = "Scroller";
		this.addChild(title);

		//创建一个容器，里面包含一张图片
        var group = new eui.Group();
        var img = new eui.Image("resource/assets/bg.jpg");
        group.addChild(img);
        //创建一个Scroller
        var myScroller = new eui.Scroller();
		myScroller.x = 250;
		myScroller.y = 150;
        //注意位置和尺寸的设置是在Scroller上面，而不是容器上面
        myScroller.width = 200;
        myScroller.height = 200;
        //设置viewport
        myScroller.viewport = group;
        this.addChild(myScroller);

		//创建一个列表
        var list = new eui.List();
        list.dataProvider = new eui.ArrayCollection([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        //创建一个 Scroller
        var scroller = new eui.Scroller();
		scroller.x = 250;
		scroller.y = 400;
        scroller.height = 160;
        scroller.viewport = list;
        this.addChild(scroller);
        this.scroller = scroller;
        //创建一个按钮，点击后改变 Scroller 滚动的位置
        var btnDown = new eui.Button();
        btnDown.x = 400;
		btnDown.y = 450;
		btnDown.label = "down";
        this.addChild(btnDown);
        btnDown.addEventListener(egret.TouchEvent.TOUCH_TAP,this.moveScrollerDown,this);

		var btnUp = new eui.Button();
        btnUp.x = 400;
		btnUp.y = 400;
		btnUp.label = "up";
        this.addChild(btnUp);
        btnUp.addEventListener(egret.TouchEvent.TOUCH_TAP,this.moveScrollerUp,this);
    }
    protected createChildren() {
        super.createChildren();
        //初始化后改变滚动的位置
        this.scroller.viewport.validateNow();
        this.scroller.viewport.scrollV = 50;
    }

	private moveScrollerDown():void{
        //点击按钮后改变滚动的位置	
        var sc = this.scroller;
        if ((sc.viewport.scrollV + sc.height) >= sc.viewport.contentHeight) {
          console.log("滚动到底部了");
		  return;
        }
		sc.viewport.scrollV += 50;
		console.log(sc.viewport.scrollV);
    }
	private moveScrollerUp():void{
        //点击按钮后改变滚动的位置
        var sc = this.scroller;
        if (sc.viewport.scrollV <= 0) {
          console.log("滚动到頂部了");
		  return;
        }
		sc.viewport.scrollV -= 50;
		console.log(sc.viewport.scrollV);
    }
}