//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class Main extends eui.UILayer {

    //(SceneEui腳本)的監聽對象
    public static gameHall: SceneModel;

    public contentScaleFullWidth: number = 0; //内容全屏缩放后的宽
    public contentScaleFullHeight: number = 0; //内容全屏缩放后的高

    public contentScale: number = 1; //内容等比缩放
    public contentScaleFull: number = 1; //内容全屏缩放

    public static contentWidth: number = 1280; //內容的寬
    public static contentHeight: number = 620; //內容的高（這個高度是故意設置成620的，正常情況應該是720）

    protected createChildren(): void {
        super.createChildren();

        GameCenter.rootScene = this;

        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        //inject the custom material parser
        //注入自定义的素材解析器
        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());


        this.runGame().catch(e => {
            console.log(e);
        })
    }

    private async runGame() {
        await this.loadResource()
        await platform.login();
        const userInfo = await platform.getUserInfo();
        console.log(userInfo);
        this.createSceneModel()
    }

    private async loadResource() {
        try {
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            await RES.loadConfig("resource/default.res.json", "resource/");
            await this.loadTheme();
            await RES.loadGroup("preload", 0, loadingView);
            this.stage.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }

    //新增場景
    private createSceneModel(): void {

        let mainScene: SceneModel = new SceneModel();
        Main.gameHall = mainScene;
        this.addChild(mainScene);
        
        // https://blog.csdn.net/wulong710/article/details/94561709
        // console.log(this.stage.stageWidth);
        // console.log(this.stage.stageHeight);
        //按照宽缩放，perW 为内容缩放比例   StageInfo.WIDTH = stage.stageWidth   StageInfo.HEIGHT = stage.stageHeight
        var perW = this.stage.stageWidth / mainScene.stage.stageWidth;
        var tempH = mainScene.stage.stageHeight * perW;

        //如果缩放后的高是在分辨率中的
        if (tempH <= this.stage.stageHeight) {

            //内容全屏缩放的宽 等于 内容的宽
            this.contentScaleFullWidth = mainScene.stage.stageWidth;
            //内容全屏缩放的高 等于 舞台的高 / 除以缩放比例 ，这么做是为了，当设置缩放比例为 preW 的时候，能保证全屏
            this.contentScaleFullHeight = this.stage.stageHeight / perW;
            //设置缩放比例
            this.contentScale = this.contentScaleFull = perW;

        } else {

            //按照高缩放，perH 为内容缩放比例
            var perH = this.stage.stageHeight / mainScene.stage.stageHeight;
            var tempW = mainScene.stage.stageWidth * perH;
            //如果缩放后的宽是在分辨率中
            if (tempW <= this.stage.stageWidth) {
                //内容全屏缩放的高 等于 内容的高
                this.contentScaleFullHeight = mainScene.stage.stageHeight;
                //内容全屏缩放的宽 等于 舞台的宽 / 除以缩放比例 ，这么做是为了，当设置缩放比例为 preH 的时候，能保证全屏
                this.contentScaleFullWidth = this.stage.stageWidth / perH;
                //设置缩放比例
                this.contentScale = this.contentScaleFull = perH;
            }
        }
        console.log(this.contentScaleFullWidth);
        console.log(this.contentScaleFullHeight);
    }

    private loadTheme() {
        return new Promise((resolve, reject) => {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            let theme = new eui.Theme("resource/default.thm.json", this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, () => {
                resolve();
            }, this);

        })
    }
}