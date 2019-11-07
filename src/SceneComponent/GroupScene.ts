class GroupScene extends eui.Component implements  eui.UIComponent {

	//疊層容器
	private viewStack:eui.ViewStack;
	
	public constructor() {
		super();

        //標題
		var title:eui.Label = new eui.Label();
		title.x = 300;
    	title.y = 50;
		title.text = "Group";
		this.addChild(title);
	}

	protected createChildren():void {
        super.createChildren();
        this.layContents();
    }

    private myGroup:eui.Group;

    private layContents():void {

        //一般容器

        //设置默认主题
        var theme = new eui.Theme(`resource/default.thm.json`, this.stage);
        //创建一个 Group
        var myGroup = new eui.Group();
        myGroup.x = 200;
        myGroup.y = 100;
        // myGroup.width = 300;
        // myGroup.height = 300;
        this.myGroup = myGroup;
        this.addChild(myGroup);
        // 绘制矩形用于显示 myGroup 的轮廓
        var outline:egret.Shape = new egret.Shape;
        outline.graphics.lineStyle(3,0x00ff00);
        outline.graphics.beginFill(0x1122cc,0);
        outline.graphics.drawRect(0, 0, 300, 300);
        outline.graphics.endFill();
        myGroup.addChild(outline);
        //在 myGroup 中创建4个按钮
        for (var i:number = 0; i < 4; i++) {
            var btn:eui.Button = new eui.Button();
            btn.label = "button" + i;
            btn.x = 10 + i * 30;
            btn.y = 10 + i * 30;
            myGroup.addChild(btn);
        }
        //使用绝对布局，会忽略 myGroup 中按钮的自定义坐标
        myGroup.layout = new eui.VerticalLayout();
		
        //疊層容器

		this.viewStack = new eui.ViewStack();
        this.viewStack.x = 200;
        this.viewStack.y = 450;
        var btnA:eui.Button = new eui.Button();
		btnA.x = 0;
        btnA.label = "Button A";
        this.viewStack.addChild( btnA );
        var btnB:eui.Button = new eui.Button();
		btnB.x = 200;
        btnB.label = "Button B";
        this.viewStack.addChild( btnB );
        //设置默认选项
        this.viewStack.selectedIndex = 1;
        //timer控制选项切换
        var timer:egret.Timer = new egret.Timer( 500 );
        timer.addEventListener( egret.TimerEvent.TIMER, this.changeIndexByTimer, this );
        timer.start();

        //show
        this.addChild( this.viewStack );

        //面板容器(有問題)//https://developer.egret.com/cn/article/index/id/610

        // var theme = new eui.Theme(`resource/default.thm.json`, this.stage);
        // var myPannel = new eui.Panel();
        // myPannel.title = "titleHello";
        // this.addChild(myPannel)
    }

	private changeIndexByTimer( evt:egret.TimerEvent ):void {
        this.viewStack.selectedIndex = this.viewStack.selectedIndex == 0 ? 1 : 0 ;
    }
}