class PanelScene extends eui.Component implements  eui.UIComponent {

	private  myGroup:eui.Group;

	public constructor() {
		super();

    //標題
		var title:eui.Label = new eui.Label();
		title.x = 300;
    title.y = 50;
		title.text = "Panel";
		this.addChild(title);

		this.myGroup = new eui.Group();
		this.myGroup.x = 200;
		this.myGroup.y = 100;
    this.myGroup.width = 400;
    this.myGroup.height = 300;
    this.addChild( this.myGroup );

    this.myGroup.layout = new eui.BasicLayout();

    //錨點的操作 https://developer.egret.com/en/docs/page/107
    var outline:egret.Shape = new egret.Shape;
    outline.graphics.lineStyle(3,0x00ff00);
    outline.graphics.beginFill(0x000000,0);
    outline.graphics.drawRect(0,0,400,300);
    outline.graphics.endFill();

    this.myGroup.addChild( outline );

    for(var i:number=0;i<4;i++) {
        var btn:eui.Button = new eui.Button();
        btn.x = 25 +i*35;
        btn.y = 40+i*65;
        btn.label = "button "+i;
      //这里先注释掉，需要的时候再添加到显示对象里面     
      //this.myGroup.addChild(btn);
    }

    var btn:eui.Button = new eui.Button();
    btn.label = "我是一只小小的 egret 按钮";
    btn.horizontalCenter = 0;
    btn.verticalCenter = 0;
    //这里先注释掉，需要的时候再添加到显示对象里面 
    //this.myGroup.addChild( btn );

    var btn:eui.Button = new eui.Button();
    btn.label = "我是一只小小的 egret 按钮";
    btn.top = 20;
    btn.bottom = 20;
    btn.left = 20;
    btn.right = 20;
    //这里先注释掉，需要的时候再添加到显示对象里面 
    //this.myGroup.addChild( btn );

    var btn:eui.Button = new eui.Button();
    btn.label = "我是一只小小的 egret 按钮";
    btn.percentWidth = 60;
    btn.percentHeight = 80;
    this.myGroup.addChild( btn );

    btn.horizontalCenter = 0;
    btn.verticalCenter = 0;
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}
	
}