class FilterScene extends eui.Component implements  eui.UIComponent {
	public constructor() {
		super();

		//標題
		var title:eui.Label = new eui.Label();
		title.x = 300;
    	title.y = 50;
		title.text = "Filter";
		this.addChild(title);

		var hero:egret.Bitmap = new egret.Bitmap();
		hero.x = 250;
		hero.y = 100;
		hero.texture = RES.getRes("egret_icon_png");
		this.addChild(hero);

		var hero:egret.Bitmap = new egret.Bitmap();
		hero.x = 450;
		hero.y = 100;
		hero.texture = RES.getRes("egret_icon_png");
		this.addChild(hero);
		//颜色矩阵数组
		var colorMatrix = [
    		0.3,0.6,0,0,0,
    		0.3,0.6,0,0,0,
    		0.3,0.6,0,0,0,
    		0,0,0,1,0
		];
		var colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
		hero.filters = [colorFlilter];

		var hero:egret.Bitmap = new egret.Bitmap();
		hero.x = 250;
		hero.y = 300;
		hero.texture = RES.getRes("egret_icon_png");
		this.addChild(hero);
		var blurFliter = new egret.BlurFilter(2 ,2);
		hero.filters = [blurFliter];

		var hero:egret.Bitmap = new egret.Bitmap();
		hero.x = 450;
		hero.y = 300;
		hero.texture = RES.getRes("egret_icon_png");
		this.addChild(hero);
		//颜色矩阵数组
		var colorMatrix = [
    		1,0,0,0,0,
    		0,2,0,0,0,
    		0,0,1,0,0,
    		0,0,0,1,0
		];
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