require("launcher/native_require.js");

egret_native.egtMain = function () {
    egret_native.nativeType = "native";

    var wid = egret_native.EGTView.getFrameWidth();  //获取原生屏幕分辨率宽
    var hei = egret_native.EGTView.getFrameHeight();  //获取原生屏幕分辨率高

    egret_native.EGTView.setDesignSize(wid, hei);   //设置
    context.stage = new egret.Stage(wid, hei); //设置

    egret_native.egretInit();
    egret_native.egretStart();
};
