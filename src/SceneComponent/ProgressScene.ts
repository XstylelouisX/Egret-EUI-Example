class ProgressScene extends eui.Component implements  eui.UIComponent {

	//進度條
	//水平
	private pBar:eui.ProgressBar
	//垂直
	private vBar:eui.ProgressBar;

	public constructor() {
		super();

		//標題
		var title:eui.Label = new eui.Label();
		title.x = 300;
    	title.y = 50;
		title.text = "Progress";
		this.addChild(title);

		//水平進度條
		this.pBar = new eui.ProgressBar();
		this.pBar.x = 250;
		this.pBar.y = 100;
    	this.pBar.maximum = 100;//設置進度條的最大值
    	this.pBar.minimum = 0;//設置進度條的最小值
    	this.pBar.width = 200;
    	this.pBar.height = 30;
    	this.addChild(this.pBar);
    	this.pBar.value = 0;//設置進度條的初始值
    	//用timer來模擬加速進度
    	var timer:egret.Timer = new egret.Timer(10,0);
    	timer.addEventListener(egret.TimerEvent.TIMER,this.timerHandler,this);
    	timer.start();

		//垂直進度條
		this.vBar = new eui.ProgressBar();
		this.vBar.x = 250;
		this.vBar.y = 200;
    	this.vBar.direction = eui.Direction.BTT;//从下到上
    	this.vBar.maximum = 100;//設置進度條的最大值
    	this.vBar.minimum = 0;//設置進度條的最小值
    	this.vBar.width = 30;
    	this.vBar.height = 200;
    	this.addChild(this.vBar);
    	this.vBar.value = 0;//設置進度條的初始值
    	//用timer來模擬加速進度
    	var timer:egret.Timer = new egret.Timer(10,0);
    	timer.addEventListener(egret.TimerEvent.TIMER,this.timerVBarHandler,this);
    	timer.start();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}
	
	//水平進度條計算
	private timerHandler():void{
    	this.pBar.value += 1;
    	if(this.pBar.value>=100){this.pBar.value=0;}
	}

	//垂直進度條計算
	private timerVBarHandler():void{
    	this.vBar.value += 1;
    	if(this.vBar.value>=100){
        	this.vBar.value=0;
    	}
	}
}