class Button extends eui.Component{
    public constructor(){
        super();

        //按鈕按下瞬間
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchEventHandler, this);
        //按鈕放開瞬間
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.touchEventHandler, this);
    }

    //判斷是否按下
    private touchDown:boolean = false;
    //按鈕事件處理程序
    private touchEventHandler(event:egret.TouchEvent):void{
        //按下類型
        switch (event.type){
            //按下瞬間
            case egret.TouchEvent.TOUCH_BEGIN:{
                this.touchDown = true;
                break;
            }
            //放開瞬間
            case egret.TouchEvent.TOUCH_END:{
                this.touchDown = false;
                break;
            }
        }
        //標記視圖狀態失效
        this.invalidateState();
    }

    //定義視圖狀態名稱的地方
    protected getCurrentState():string{
        if (!this.enabled)
        {
            return "disabled";
        }
        if (this.touchDown)
        {
            return "down";
        }
        else
        {
            return "up";
        }
    }
}