class SceneModel extends egret.DisplayObjectContainer {

	//場景儲存陣列
	private _scene = [];

	public constructor() {
		super();

		//公共UI框架
		let mainScene: SceneEui = new SceneEui();
		this.addChild(mainScene);

		// 加入場景
		this.addScene(new ButtonScene);
		this.addScene(new SliderScene);
		this.addScene(new ProgressScene);
		this.addScene(new PanelScene);
		this.addScene(new ListScene);
		this.addScene(new LabelScene);
		this.addScene(new EditableScene);
		this.addScene(new GroupScene);
		this.addScene(new FilterScene);
		this.addScene(new MouseScene);
		this.addScene(new KeyboardScene);
		this.addScene(new ScrollerScene);
	}

	//切換場景
	public changeScene(sceneId){
		
		var i:number = 0;
		//判斷顯示場景
		for(i = 0; this._scene.length > i;i++)
		{
			//如果符合場景編號
			if(i == sceneId)
			{
				//新增場景
				this.addChild(this._scene[i]);
			}
			else
			{
				//-1 = 無實例的索引位置，>0 = 有實例的索引位置(Array)
				//若有存在場景
				if(this.getChildIndex(this._scene[i]) > 0)
				{
					//移除場景
					this.removeChild(this._scene[i]);
				}
			}
		}
	}

	//載入初始場景
	public addScene(newScene : eui.UIComponent): void {
		
		//一般UI架構
		this._scene[this._scene.length] = newScene;
	}

	//按鈕場景(ID=0)
	public toButtonScene(): void {
		console.log("按鈕場景");
		this.changeScene(0);
	}
	//滑塊場景(ID=1)
	public toSliderScene(): void {
		console.log("滑塊場景");	
		this.changeScene(1);
	}
	//進度條場景(ID=2)
	public toProgressScene(): void {
		console.log("進度條場景");
		this.changeScene(2);
	}
	//面板場景(ID=3)
	public toPanelScene(): void {
		console.log("面板場景");
		this.changeScene(3);
	}
	//清單場景(ID=4)
	public toListScene(): void {
		console.log("清單場景");
		this.changeScene(4);
	}
	//文字場景(ID=5)
	public toLabelScene(): void {
		console.log("文字場景");
		this.changeScene(5);
	}
	//編輯場景(ID=6)
	public toEditableScene(): void {
		console.log("編輯場景");
		this.changeScene(6);
	}
	//容器場景(ID=7)
	public toGroupScene(): void {
		console.log("容器場景");
		this.changeScene(7);
	}
	//濾鏡場景(ID=8)
	public toFilterScene(): void {
		console.log("濾鏡場景");
		this.changeScene(8);
	}
	//滑鼠場景(ID=9)
	public toMouseScene(): void {
		console.log("滑鼠場景");
		this.changeScene(9);
	}
	//鍵盤場景(ID=10)
	public toKeyboardScene(): void {
		console.log("鍵盤場景");
		this.changeScene(10);
	}
	//滾動場景(ID=11)
	public toScrollerScene(): void {
		console.log("滾動場景");
		this.changeScene(11);
	}
}