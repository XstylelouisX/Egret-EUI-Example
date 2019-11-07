class SliderScene extends eui.Component implements  eui.UIComponent {
	public constructor() {
		super();

		//標題
		var title:eui.Label = new eui.Label();
		title.x = 300;
    	title.y = 50;
		title.text = "Slider";
		this.addChild(title);

		//水平滑塊
		var hSlider: eui.HSlider = new eui.HSlider();
    	hSlider.width = 200;
    	hSlider.x = 200;
    	hSlider.y = 100;
    	hSlider.minimum = 0; //定義最小值
    	hSlider.maximum = 100; //定義最大值
    	hSlider.value = 10; //定義默認值
    	hSlider.addEventListener(eui.UIEvent.CHANGE, this.changeHandler, this);
    	this.addChild(hSlider);

		//垂直滑塊
		var vSlider: eui.VSlider = new eui.VSlider();
    	vSlider.height = 200;
    	vSlider.x = 200;
    	vSlider.y = 200;
    	vSlider.minimum = 100;//定义最小值
    	vSlider.maximum = 200;//定义最大值
    	vSlider.value = 120;//定义默认值
    	vSlider.addEventListener(eui.UIEvent.CHANGE, this.changeHandler, this);
    	this.addChild(vSlider);
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}

	protected childrenCreated():void
	{
		super.childrenCreated();
	}
	
	//滑塊數值
	private changeHandler(evt: eui.UIEvent): void {
    	console.log(evt.target.value);
	}
}