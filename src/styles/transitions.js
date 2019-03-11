export default `
body {
  display: block;
  margin: 0;
  padding: 0;
  overflow-y: scroll;
  overflow-x: hidden;
  font-family: 'Karla', sans-serif;
  font-display: swap;
}

.page-transition-enter {
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ffffff; }
  .page-transition-enter .app-body {
    opacity: 0; }
  @media (max-width: 992px) {
    .page-transition-enter {
      top: 78px; } }

.page-transition-enter-active .app-body {
  opacity: 1;
  transition: all 500ms ease-in-out; }

.page-transition-exit {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20; }
  .page-transition-exit .tbox {
    height: 100%;
    width: 100%;
    display: flex;
    background-color: #ffffff; }
    .page-transition-exit .tbox .t-child {
      height: 100%;
      background: #EFEEF5;
      flex-grow: 0;
      flex-shrink: 0; }
      .page-transition-exit .tbox .t-child:nth-child(1) {
        width: 25%; }
      .page-transition-exit .tbox .t-child:nth-child(2) {
        width: 25%; }
      .page-transition-exit .tbox .t-child:nth-child(3) {
        width: 25%;
        align-self: flex-end; }
      .page-transition-exit .tbox .t-child:nth-child(4) {
        width: 25%; }

.page-transition-exit-active .t-child:nth-child(1) {
  height: 0;
  transition: all 400ms ease-out; }

.page-transition-exit-active .t-child:nth-child(2) {
  height: 0;
  transition: all 300ms ease-out; }

.page-transition-exit-active .t-child:nth-child(3) {
  height: 0;
  transition: all 150ms ease-out; }

.page-transition-exit-active .t-child:nth-child(4) {
  height: 0;
  transition: all 500ms ease-out; }

.aws-sld__box,.aws-sld__container figure,.aws-sld__content{display:block;position:absolute;width:100%;height:100%;top:0;left:0}.aws-sld__bullets button,.aws-sld__controls button{outline-color:0;outline-style:none;outline-width:0}.aws-sld{--organic-arrow-thickness:4px;--organic-arrow-height:40px;--slider-height-percentage:60%;--loader-bar-color:#851515;--loader-bar-height:6px;--control-button-width:10%;--control-button-height:25%;--control-button-opacity:0.5;--control-button-hover-opacity:0.75;--control-button-background:transparent;--transition-bezier:cubic-bezier(0.5,0.075,0.25,0.95);--slider-transition-duration:575ms;--organic-arrow-color:#6a6a6a;--organic-arrow-border-radius:0;--control-bullet-color:#6a6a6a;--control-bullet-active-color:#6a6a6a;--content-background-color:#2f2f2f;width:100%;max-width:100%}.aws-sld,.aws-sld__wrapper{display:block;position:relative}.aws-sld__wrapper{overflow:hidden}.aws-sld__container{display:block;width:100%;height:0;padding-bottom:var(--slider-height-percentage)}@media (max-width:500px){.aws-sld__container{padding-bottom:calc(var(--slider-height-percentage) * 1.25)}}.aws-sld__startUp{background-color:red;height:100%;width:100%}.aws-sld__startUp>div{height:100%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.aws-sld__startUp img{width:35%;height:auto}.aws-sld__content{background-color:var(--content-background-color);overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.aws-sld__content>img,.aws-sld__content>video{-o-object-fit:cover;object-fit:cover;width:100%;height:100%;position:absolute;top:0;left:0}.aws-sld__controls button{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:var(--control-button-width);height:var(--control-button-height);position:absolute;z-index:10;top:calc(50% - (.5 * var(--control-button-height)));border:none;background-color:var(--control-button-background);color:#fff;cursor:pointer}.aws-sld__controls button .aws-sld__controls__arrow-left,.aws-sld__controls button .aws-sld__controls__arrow-right{opacity:var(--control-button-opacity)}.aws-sld__controls button:hover .aws-sld__controls__arrow-left,.aws-sld__controls button:hover .aws-sld__controls__arrow-right{opacity:var(--control-button-opacity-hover)}.aws-sld__controls--active .aws-sld__controls__arrow-left{opacity:var(--control-button-opacity-hover);-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.aws-sld__controls--active .aws-sld__controls__arrow-right{opacity:var(--control-button-opacity-hover);-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}@media (max-width:520px){.aws-sld__controls{visibility:hidden}}.aws-sld__bar{display:block;width:100%;height:var(--loader-bar-height);background-color:var(--loader-bar-color);position:absolute;top:0;left:0;-webkit-transition:-webkit-transform 3s var(--transition-bezier);transition:-webkit-transform 3s var(--transition-bezier);transition:transform 3s var(--transition-bezier);transition:transform 3s var(--transition-bezier),-webkit-transform 3s var(--transition-bezier);-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.aws-sld__bar--active{-webkit-transform:translate3d(-20%,0,0);transform:translate3d(-20%,0,0)}.aws-sld__bar--end{-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transform:translateZ(0);transform:translateZ(0)}.aws-sld__next{right:0}.aws-sld__prev{left:0}.aws-sld__box{z-index:1}.aws-sld--animated{-webkit-transition:-webkit-transform var(--slider-transition-duration) var(--transition-bezier);transition:-webkit-transform var(--slider-transition-duration) var(--transition-bezier);transition:transform var(--slider-transition-duration) var(--transition-bezier);transition:transform var(--slider-transition-duration) var(--transition-bezier),-webkit-transform var(--slider-transition-duration) var(--transition-bezier)}.aws-sld--animated-mobile{-webkit-transition:-webkit-transform 325ms cubic-bezier(.15,.65,.1,1);transition:-webkit-transform 325ms cubic-bezier(.15,.65,.1,1);transition:transform 325ms cubic-bezier(.15,.65,.1,1);transition:transform 325ms cubic-bezier(.15,.65,.1,1),-webkit-transform 325ms cubic-bezier(.15,.65,.1,1)}.aws-sld--active{z-index:2;-webkit-transform:translateZ(0);transform:translateZ(0)}.aws-sld--moveRight{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.aws-sld--moveLeft{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.aws-sld--exit{z-index:0}.aws-sld--first .aws-sld__prev,.aws-sld--last .aws-sld__next{visibility:hidden}.aws-sld__bullets{position:absolute;bottom:-40px;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.aws-sld__bullets button{padding:0;display:block;width:16px;height:16px;margin:5px;border-radius:50%;background:var(--control-bullet-color);text-indent:-9999px;overflow:hidden;cursor:pointer;border:none;-webkit-transition:background-color .175s ease-out,-webkit-transform .225s cubic-bezier(.8,1.35,.75,1.45);transition:background-color .175s ease-out,-webkit-transform .225s cubic-bezier(.8,1.35,.75,1.45);transition:transform .225s cubic-bezier(.8,1.35,.75,1.45),background-color .175s ease-out;transition:transform .225s cubic-bezier(.8,1.35,.75,1.45),background-color .175s ease-out,-webkit-transform .225s cubic-bezier(.8,1.35,.75,1.45)}.aws-sld__bullets .aws-sld__bullets--loading,.aws-sld__bullets button:hover{-webkit-transform:scale(1.2);transform:scale(1.2)}.aws-sld__bullets .aws-sld__bullets--active{background:var(--control-bullet-active-color)}.aws-sld__bullets .aws-sld__bullets--active,.aws-sld__bullets .aws-sld__bullets--active:hover{-webkit-transform:scale(1.5);transform:scale(1.5)}.aws-sld__controls__arrow-left,.aws-sld__controls__arrow-right{width:100%;height:var(--organic-arrow-height);position:relative;display:block;-webkit-transition:opacity .2s ease-out,-webkit-transform .2s ease-out .125s;transition:opacity .2s ease-out,-webkit-transform .2s ease-out .125s;transition:transform .2s ease-out .125s,opacity .2s ease-out;transition:transform .2s ease-out .125s,opacity .2s ease-out,-webkit-transform .2s ease-out .125s}.aws-sld__controls__arrow-left:after,.aws-sld__controls__arrow-left:before,.aws-sld__controls__arrow-right:after,.aws-sld__controls__arrow-right:before{content:" ";position:absolute;right:calc(50% - (.7071 * (var(--organic-arrow-height) + var(--organic-arrow-thickness))) / 2);height:100%;border-radius:var(--organic-arrow-border-radius);width:var(--organic-arrow-thickness);background-color:var(--organic-arrow-color);-webkit-transition:background-color .15s ease-out,-webkit-transform .15s ease-out;transition:background-color .15s ease-out,-webkit-transform .15s ease-out;transition:transform .15s ease-out,background-color .15s ease-out;transition:transform .15s ease-out,background-color .15s ease-out,-webkit-transform .15s ease-out}.aws-sld__controls__arrow-left:before,.aws-sld__controls__arrow-right:before{-webkit-transform-origin:100% 100% 0;transform-origin:100% 100% 0;top:-50%;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.aws-sld__controls__arrow-left:after,.aws-sld__controls__arrow-right:after{-webkit-transform-origin:100% 0 0;transform-origin:100% 0 0;top:50%;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.aws-sld__controls__arrow-right--active{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.aws-sld__controls__arrow-right--active:after{-webkit-transform:rotate(90deg) translate3d(50%,0,0)!important;transform:rotate(90deg) translate3d(50%,0,0)!important}.aws-sld__controls__arrow-right--active:before{-webkit-transform:rotate(-90deg) translate3d(50%,0,0)!important;transform:rotate(-90deg) translate3d(50%,0,0)!important}.aws-sld__controls__arrow-left:after,.aws-sld__controls__arrow-left:before{right:auto;left:calc(50% - (.7071 * (var(--organic-arrow-height) + var(--organic-arrow-thickness))) / 2)}.aws-sld__controls__arrow-left:before{-webkit-transform-origin:0 100% 0;transform-origin:0 100% 0;top:-50%;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.aws-sld__controls__arrow-left:after{-webkit-transform-origin:0 0 0;transform-origin:0 0 0;top:50%;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.aws-sld__controls__arrow-left--active{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.aws-sld__controls__arrow-left--active:after{-webkit-transform:rotate(-90deg) translate3d(-50%,0,0)!important;transform:rotate(-90deg) translate3d(-50%,0,0)!important}.aws-sld__controls__arrow-left--active:before{-webkit-transform:rotate(90deg) translate3d(-50%,0,0)!important;transform:rotate(90deg) translate3d(-50%,0,0)!important}.aws-sld__controls button:hover .aws-sld__controls__arrow-left:before{opacity:1;-webkit-transform:rotate(30deg);transform:rotate(30deg)}.aws-sld__controls button:hover .aws-sld__controls__arrow-left:after,.aws-sld__controls button:hover .aws-sld__controls__arrow-right:before{opacity:1;-webkit-transform:rotate(-30deg);transform:rotate(-30deg)}.aws-sld__controls button:hover .aws-sld__controls__arrow-right:after{opacity:1;-webkit-transform:rotate(30deg);transform:rotate(30deg)}
`;