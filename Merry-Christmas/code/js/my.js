// hide show
document.querySelector("#overlay").style.display = "none";
const logo = document.querySelectorAll('.gift-svg path');
logo.forEach(l=>{
    l.setAttribute("fill","transparent")
})
setTimeout(() => {
    logo[0].setAttribute("fill", "#384D9E");
    logo[1].setAttribute("fill", "#384D9E");
    logo[2].setAttribute("fill", "#384D9E");
    logo[3].setAttribute("fill", "#FFFFFF");
    logo[4].setAttribute("fill", "#901D22");
}, 3000)
setTimeout(() => {
    toName.style.opacity = 1;
}, 4400)
setTimeout(() => {
    document.querySelector(".ch").style.display = "none";
    document.querySelector("#overlay").style.display = "block";
}, 8000)


// 网站标题
document.title = config.title;
// TO SB
let toName = document.querySelector(".toName");
if(config.toSb.fontWeight == 1) toName.style.fontWeight = 700;
if(config.toSb.content) toName.innerHTML = config.toSb.content;
if(config.toSb.fontColor) toName.style.color = config.toSb.fontColor;
if(config.toSb.fontSize) toName.style.fontSize = config.toSb.fontSize + "px";
if(config.toSb.topOrBottom) toName.style.marginTop = config.toSb.topOrBottom + "px";
if(config.toSb.leftOrRight) toName.style.marginLeft = config.toSb.leftOrRight + "px";
// Talks
let zhufu = document.querySelector(".zhufu");
if(config.talks.fontSize) zhufu.style.fontSize = config.talks.fontSize + "px";
if(config.talks.fontWeight == 1) zhufu.style.fontWeight = 700;
if(config.talks.shouxie && config.talks.shouxie == 1) zhufu.style.fontFamily = "myziti1";
if(config.talks.fontColor) zhufu.style.color = config.talks.fontColor;
if(config.talks.leftOrRight) zhufu.style.marginLeft = config.talks.leftOrRight + "px";
if(config.talks.topOrBottom) zhufu.style.marginTop = config.talks.topOrBottom + "px";
// 礼物大小
let gift = document.querySelector(".gift-svg svg");
if(config.gift.width) gift.style.width = config.gift.width + "px";
if(config.gift.height) gift.style.height = config.gift.height + "px";

// 打开按钮
let btn = document.querySelector(".btn");
if(config.openGift.content) btn.innerHTML = config.openGift.content;
if(config.openGift.shouxie && config.openGift.shouxie == 1) btn.style.fontFamily = "myziti1";
if(config.openGift.fontColor) btn.style.color = config.openGift.fontColor;
if(config.openGift.fontSize) btn.style.fontSize = config.openGift.fontSize + "px";
if(config.openGift.fontWeight) btn.style.fontWeight = 700;