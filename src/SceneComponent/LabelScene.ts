class LabelScene extends eui.Component implements  eui.UIComponent {
	public constructor() {
		super();

		//標題
		var title:eui.Label = new eui.Label();
		title.x = 300;
    	title.y = 50;
		title.text = "Label";
		this.addChild(title);

		var label:eui.Label = new eui.Label();
		label.x = 200;
    	label.y = 100;
		label.text = "eui Label 测试";
		this.addChild(label);

		var label2:eui.Label = new eui.Label();
		label2.x = 200;
    	label2.y = 200;
		label2.text = "eui Label 测试";
		// label2.width = 400;//设置宽度
		// label2.height = 300;//设置高度
		label2.fontFamily = "Tahoma";//设置字体
		label2.textColor = 0xFF0000;//设置颜色
		label2.size = 35;//设置文本字号
		label2.bold = true;//设置是否加粗
		label2.italic = true;//设置是否斜体
		label2.textAlign = "right";//设置水平对齐方式
		label2.verticalAlign = "middle";//设置垂直对齐方式
		this.addChild(label2);
	}
}