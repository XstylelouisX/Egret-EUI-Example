class ListScene extends eui.ItemRenderer {

    //列表
    private list:eui.List;
	
	public constructor() {
		super();

        //標題
		var title:eui.Label = new eui.Label();
		title.x = 300;
    	title.y = 50;
		title.text = "List";
		this.addChild(title);

        // //數據

		// //先创建一个数组
        // var sourceArr:any[] = [{name:"one",value:1},{name:"two",value:2}];
        // //用ArrayCollection包装
        // var myCollection:eui.ArrayCollection = new eui.ArrayCollection(sourceArr);

        // //当数据改变的时候，ArrayCollection会派发事件
        // myCollection.addEventListener(eui.CollectionEvent.COLLECTION_CHANGE,this.collectionChangeHandler,this);

        // var itemData:Object = {name:"three",value:3};
        // myCollection.addItem(itemData);//相当于push
        // myCollection.addItemAt({name:"zero",value:0},0);//添加的指定的索引位置

		// //替换某一项数据
        // myCollection.replaceItemAt({name:"zero",value:-1},0);

        // //获取
        // console.log(myCollection.getItemAt(0).name);//根据索引位置获取某一项数据
		// console.log(myCollection.getItemAt(0).value);//根据索引位置获取某一项数据
        // console.log(myCollection.getItemIndex(itemData));//获取某一项数据所在的索引值
        // console.log(myCollection.length);//获取数组长度

        // myCollection.removeItemAt(0);//删除某一个
        // myCollection.removeAll();//全部删除

        //列表

        var exml = `
        <e:Skin xmlns:e="http://ns.egret.com/eui" states="up,down" height="50"> <e:Label text="{data}" textColor.down="0xFFFFFF" textColor.up="0x666666" horizontalCenter="0" verticalCenter="0"/> </e:Skin>`;
        var list = new eui.List();
        list.x = 200;
        list.y = 200;
        list.dataProvider = new eui.ArrayCollection(["item1","item2","item3"]);
        list.itemRendererSkinName = exml;
        this.addChild(list);
        this.list = list;
        list.selectedIndex = 1;//设置默认选中项
        list.addEventListener(eui.ItemTapEvent.ITEM_TAP,this.onChange,this);
	}

	// private collectionChangeHandler(evt:eui.CollectionEvent):void {
    //     console.log("数据已改变:"+evt.kind+","+evt.target.length);
    // }

    private onChange(e:eui.PropertyEvent):void{
        //获取点击消息
        console.log(this.list.selectedItem,this.list.selectedIndex)
    }
}