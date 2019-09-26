const initFreshChat = () => {
    window.initFreshChat = function () {
        window.fcWidget.init({
          token: "4920d168-0574-404a-ab4c-b1ca00ca2fa2",
          host: "https://wchat.freshchat.com"
        });
    }
    window.fsInitialize = function (i,t){var e;i.getElementById(t)?window.initFreshChat():((e=i.createElement("script")).id=t,e.async=!0,e.src="https://wchat.freshchat.com/js/widget.js",e.onload=window.initFreshChat,i.head.appendChild(e))}
    
    window.fsInitialize(document,"freshchat-js-sdk");
};
  
export default initFreshChat;
  