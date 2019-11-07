class EditableScene extends eui.Component implements  eui.UIComponent {

	private inputText = new eui.TextInput();
	private labelText = new eui.Label();

	private myGroup = new eui.Group();

	public constructor() {
		super();

		//標題
		var title:eui.Label = new eui.Label();
		title.x = 300;
    	title.y = 50;
		title.text = "Editable";
		this.addChild(title);

		this.inputText.x = 250;
		this.inputText.y = 200;
		this.inputText.skinName = "resource/eui_skins/TextInputSkin.exml";
		this.inputText.prompt = "请输入文字";
		this.addChild(this.inputText);

		var enter = new eui.Button;
		enter.x = 250;
		enter.y = 300;
		enter.label = "輸入";
		this.addChild(enter);
		enter.addEventListener(egret.TouchEvent.TOUCH_TAP,this.InputText,this);

		var clear = new eui.Button;
		clear.x = 450;
		clear.y = 300;
		clear.label = "清除";
		this.addChild(clear);
		clear.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ClearText,this);
	}

	private InputText(): void {

		if(this.getChildIndex(this.myGroup) < 0)
		{
			var myGroup = new eui.Group();
			myGroup.width = 0;
			myGroup.height = 0;
			this.myGroup = myGroup;
			this.addChild(myGroup);

			this.labelText.text = this.inputText.text;

			var showText = new eui.Label();
			showText.x = 300;
    		showText.y = 400;
			showText.text = this.labelText.text;
			this.myGroup.addChild(showText);
			console.log(showText.text);
		}
	}
	private ClearText(): void {
		if(this.getChildIndex(this.myGroup) > 0)
		{
			this.removeChild(this.myGroup);
		}
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