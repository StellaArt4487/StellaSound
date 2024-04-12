/*
let sounds = [
              "八嘎(高音版)", 
              "挖咧巴噗", 
              "有嗎?我本來就很可愛吧?嘎～",
              "雜魚~雜魚~ unbelievable",
              "薑~ 完成~",
              "打咩嘎(遊戲音效聲有)",
              "嗚欸"
            ]; //<audio> tag's id
*/
/***************************************************************************/
// 創建一個空的陣列來存放具有 "item" 類的元素
let sounds = [];

// 選擇所有帶有 "audio" 類的元素並將它們添加到陣列中
let items = document.querySelectorAll('audio');
items.forEach(audio => {
  sounds.push(audio.id);
});
/***************************************************************************/
let soundtemp = "";

var buttonContainer = document.getElementById("buttonContainer");

sounds.forEach((sound) => {
  let btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;
  btn.addEventListener("click", () => {
    stopSounds();

    if(soundtemp != sound)
    {
        document.getElementById(sound).play();
    //上面的sound不需用字串符號包起來，因為它本身是一個變數，代表audio標籤內的id
        soundtemp  = sound;
    }
    else
    {
        soundtemp = "";
    }
  });
  // 將按鈕添加到按鈕容器中
  buttonContainer.appendChild(btn);
  document.getElementById("buttons").appendChild(btn);
  // 添加 CSS 類來實現按鈕的自動換行
  buttonContainer.classList.add("wrap");
});

function stopSounds() {
  sounds.forEach((sound) => {
    let song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;


      // 監聽音訊播放結束事件
        song.addEventListener("ended", function() {
        soundtemp = "";
      });
  });
}
