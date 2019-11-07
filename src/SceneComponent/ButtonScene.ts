class ButtonScene extends eui.Component implements  eui.UIComponent {
	
	private toggleBtns:Array<eui.ToggleButton> = [];

	public constructor() {
		super();

		//參考 https://developer.egret.com/cn/article/index/id/510
		var button = new eui.Button();
		button.x = 400;
		button.y = 200;
		button.skinName="resource/eui_skins/ButtonSkin.exml" //皮膚路徑
		this.addChild(button);

		//標題
		var title:eui.Label = new eui.Label();
		title.x = 300;
    	title.y = 50;
		title.text = "Button";
		this.addChild(title);

		//一般按鈕
		var normalBtn = new eui.Button(); 
		normalBtn.x = 200;
		normalBtn.y = 100;
		normalBtn.width = 100;
		normalBtn.height = 40;
		normalBtn.label = "可用";
		this.addChild(normalBtn);
		//禁用按鈕
		var disableBtn = new eui.Button();
		disableBtn.x = 400;
		disableBtn.y = 100;
		disableBtn.width = 100;
		disableBtn.height = 40;
		disableBtn.label = "禁用";
		disableBtn.enabled = false;
		this.addChild(disableBtn);
		
		//複選框
		
		//一般複選框
		var cbx = new eui.CheckBox();
		cbx.x = 200;
		cbx.y = 170;
		cbx.label = "選擇1";
		this.addChild(cbx);
		//勾選狀態
		cbx.addEventListener(
    		eui.UIEvent.CHANGE,
    		(evt:eui.UIEvent)=>{egret.log(evt.target.selected);
    		},this
		);
		//一般複選框
		var cbx2 = new eui.CheckBox();
		cbx2.x = 200;
		cbx2.y = 200;
		cbx2.label = "選擇2";		
		this.addChild(cbx2);
		//禁用複選框
		var cbx3 = new eui.CheckBox();
		cbx3.x = 200;
		cbx3.y = 230;
		cbx3.label = "選擇3";		
		cbx3.enabled = false;
		this.addChild(cbx3);

		//單選按鈕V1

		var rdb: eui.RadioButton = new eui.RadioButton();
		rdb.x = 200;
		rdb.y = 300;
    	rdb.label = "選擇我1";
    	rdb.value = 145;
    	rdb.groupName = "G1"; //群組
    	rdb.addEventListener(eui.UIEvent.CHANGE,
        	this.radioChangeHandler,
        	this);
    	this.addChild(rdb);
    	var rdb2: eui.RadioButton = new eui.RadioButton();
		rdb2.x = 200;
    	rdb2.y = 330;
    	rdb2.label = "選擇我2";
    	rdb2.value = 272;
    	rdb2.selected = true; //默認選項
    	rdb2.groupName = "G1"; //群組
    	rdb2.addEventListener(eui.UIEvent.CHANGE,
        	this.radioChangeHandler,
        	this);
    	this.addChild(rdb2);

		//單選按鈕V2

		var radioGroup: eui.RadioButtonGroup = new eui.RadioButtonGroup();
    	radioGroup.addEventListener(eui.UIEvent.CHANGE, this.radioChangeHandler, this);
    	var rdb: eui.RadioButton = new eui.RadioButton();
		rdb.x = 400;
    	rdb.y = 300;
    	rdb.label = "選擇我1";
    	rdb.value = 145;
    	rdb.group = radioGroup; //群組
    	this.addChild(rdb);
    	var rdb2: eui.RadioButton = new eui.RadioButton();
		rdb2.x = 400;
    	rdb2.y = 330;
    	rdb2.label = "選擇我2";
    	rdb2.value = 272;
    	rdb2.selected = true; //默認選項
    	rdb2.group = radioGroup; //群組
    	this.addChild(rdb2);

		//狀態切換按鈕V1

		var btn: eui.ToggleSwitch = new eui.ToggleSwitch();
		btn.x = 200;
    	btn.y = 400;
    	btn.label = "我是ToggleButton";
    	btn.addEventListener(eui.UIEvent.CHANGE, this.changeHandler, this);
    	this.addChild(btn);

		//狀態切換按鈕V2

		for (var i: number = 0; i < 4; i++) {
        	var btn: eui.ToggleButton = new eui.ToggleButton();
        	btn.label = i + 1 + "";
        	btn.y = 450;
        	btn.width = 80;
        	btn.height = 60;
        	btn.x = 200 + i * 80;
        	btn.addEventListener(eui.UIEvent.CHANGE, this.toggleChangeHandler, this);
        	this.toggleBtns.push(btn);
        	this.addChild(btn);
    	}
	}

	//加入監聽事件(按鈕)
	private addButtonListener(): void {

	}

	//單選按鈕數值
	private radioChangeHandler(evt:eui.UIEvent):void {
    	//V1
		egret.log(evt.target.value);
		//V2
		var radioGroup: eui.RadioButtonGroup = evt.target;
    	console.log(radioGroup.selectedValue);
	}

	//狀態切換按鈕數值V1
	private changeHandler(evt:eui.UIEvent) {
    	egret.log(evt.target.selected);
	}

	//狀態切換按鈕數值V2
	private toggleChangeHandler(evt: eui.UIEvent) {
    	for (var i: number = 0; i < this.toggleBtns.length; i++) {
        	var btn: eui.ToggleButton = this.toggleBtns[i];
        	btn.selected = (btn == evt.target);
    	}
	}
}