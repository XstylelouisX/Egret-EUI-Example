class KeyboardScene extends eui.Component implements  eui.UIComponent {

	private myGroup:eui.Group;
	private textY:number = 0;

	private kb:KeyBoard;

    public constructor() {
        super();

		//標題
		var title:eui.Label = new eui.Label();
		title.x = 300;
    	title.y = 50;
		title.text = "KeyBoard";
		this.addChild(title);

		var description:eui.Label = new eui.Label();
		description.x = 200;
    	description.y = 100;
		description.size = 20;
		description.text = "(Click any KeyBoard,ESC reset)";
		this.addChild(description);

        var self = this;

       this.kb = new KeyBoard();
       //添加监听事件
       this.kb.addEventListener(KeyBoard.onkeydown,this.onkeydown,this);
       //移除事件监听
       //kb.removeEventListener(KeyBoard.onkeydown,this.onkeydown,this);
    }
    private onkeydown(event){

		if(this.getChildIndex(this.myGroup) < 0)
		{
			//创建一个 Group
        	var myGroup = new eui.Group();
        	myGroup.x = 250;
        	myGroup.y = 150;
			this.myGroup = myGroup;
			this.addChild(myGroup);
		}
		var testText = new eui.Label;
		this.textY += 25;
		testText.y = this.textY;
		this.myGroup.addChild(testText);
		testText.text = event.data;
		
    	//获取的按键数据为一个数组
        //console.log(event.data);

        //监听Esc键被按下事件
        if(this.kb.isContain(event.data,KeyBoard.Esc)){
            console.log(event.data);
			this.removeChild(this.myGroup);
			this.textY = 0;
        }

        // //监听F1键被按下事件
        // if(this.kb.isContain(event.data,KeyBoard.F1)){
        //     console.log(event.data);
        // }

        // //监听Esc和F1键同时被按下事件
        // if(this.kb.isContain(event.data,KeyBoard.Esc) && this.kb.isContain(event.data,KeyBoard.F1)){
        //     console.log(event.data);
        // }
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