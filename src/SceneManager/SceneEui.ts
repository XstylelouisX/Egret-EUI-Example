class SceneEui extends eui.Component implements eui.UIComponent {

	//公共架構UI按鈕
	public ButtonPage:eui.Button;
	public SliderPage:eui.Button;
	public ProgressPage:eui.Button;
	public PanelPage:eui.Button;
	public ListPage:eui.Button;
	public LabelPage:eui.Button;
	public EditablePage:eui.Button;
	public GroupPage:eui.Button;
	public FilterPage:eui.Button;
	public MousePage:eui.Button;
	public KeyboardPage:eui.Button;
	public ScrollerPage:eui.Button;

	public MainUI : egret.tween.TweenGroup;

	public constructor() {
		super();

		// 等待UI事件加載完成
		this.addEventListener(eui.UIEvent.COMPLETE,this.addEvent,this);
		
	}

	// 加入事件
	private addEvent() : void {
		this.ButtonPage.addEventListener(egret.TouchEvent.TOUCH_TAP,Main.gameHall.toButtonScene,Main.gameHall);
		this.SliderPage.addEventListener(egret.TouchEvent.TOUCH_TAP,Main.gameHall.toSliderScene,Main.gameHall);
		this.ProgressPage.addEventListener(egret.TouchEvent.TOUCH_TAP,Main.gameHall.toProgressScene,Main.gameHall);
		this.PanelPage.addEventListener(egret.TouchEvent.TOUCH_TAP,Main.gameHall.toPanelScene,Main.gameHall);
		this.ListPage.addEventListener(egret.TouchEvent.TOUCH_TAP,Main.gameHall.toListScene,Main.gameHall);
		this.LabelPage.addEventListener(egret.TouchEvent.TOUCH_TAP,Main.gameHall.toLabelScene,Main.gameHall);
		this.EditablePage.addEventListener(egret.TouchEvent.TOUCH_TAP,Main.gameHall.toEditableScene,Main.gameHall);
		this.GroupPage.addEventListener(egret.TouchEvent.TOUCH_TAP,Main.gameHall.toGroupScene,Main.gameHall);
		this.FilterPage.addEventListener(egret.TouchEvent.TOUCH_TAP,Main.gameHall.toFilterScene,Main.gameHall);
		this.MousePage.addEventListener(egret.TouchEvent.TOUCH_TAP,Main.gameHall.toMouseScene,Main.gameHall);
		this.KeyboardPage.addEventListener(egret.TouchEvent.TOUCH_TAP,Main.gameHall.toKeyboardScene,Main.gameHall);
		this.ScrollerPage.addEventListener(egret.TouchEvent.TOUCH_TAP,Main.gameHall.toScrollerScene,Main.gameHall);

		this.MainUI.play(0);
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