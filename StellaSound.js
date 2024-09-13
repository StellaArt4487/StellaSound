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
let serial_number = 1;
let items = document.querySelectorAll('audio');
items.forEach(audio => {
  sounds.push(audio.id);
});
/***************************************************************************/
let soundtemp = "";
let soundtemp1 = "";
let flag = 0;
let flagfirst = 1;
// 保存用户选择的播放顺序
let playSequence = [];
let randomplayiset = [];

var buttonContainer = document.getElementById("buttonContainer");

sounds.forEach((sound) => {
  let btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = serial_number + ". " + sound;  // 设置按钮文本为序号 + 音频 ID
  serial_number++;  // 序号递增
  btn.addEventListener("click", () => {

    if(soundtemp1 === ""){stopSounds(sound);soundtemp1 = sound;}
    else{stopSounds(soundtemp1);}
    
    if (flag === 1) {playSequence.push(sound);}
    
    if(soundtemp != sound)
    {
        document.getElementById(sound).play();
    //上面的sound不需用字串符號包起來，因為它本身是一個變數，代表audio標籤內的id
        soundtemp  = sound;
        soundtemp1 = soundtemp;
    }
    else
    {
      soundtemp = "";
      soundtemp1 = "";
    }
  });
  // 將按鈕添加到按鈕容器中
  buttonContainer.appendChild(btn);
  document.getElementById("buttons").appendChild(btn);
});

function stopSounds(test) {
  
    //sounds.forEach((sound) => {
      let song = document.getElementById(test);
      song.pause();
      song.currentTime = 0;
        
        // 監聽音訊播放結束事件
          song.addEventListener("ended", function() {
          soundtemp1 = "";
          soundtemp = "";
        });
    //});
  
}

// 播放声音顺序
const playSequenceButton = document.getElementById('playSequenceButton');
playSequenceButton.addEventListener('click', () => {
    playSoundsInSequence(playSequence);
});
//批次播放功能
function playSoundsInSequence(sequence) {
    if (flag === 0) {
      flag = 1;
      playSequenceButton.textContent = '錄製';
      return;
    }
    else{playSequenceButton.textContent = '播放中';}

    if (sequence.length === 0){ 
      flag = 0;
      playSequenceButton.textContent = '批次播放';
      return;
    }

    const audio = document.getElementById(sequence[0]);
    audio.play();

    audio.addEventListener('ended', () => {
        sequence.shift(); // 播放完当前音频后移除它
        playSoundsInSequence(sequence); // 递归播放下一个
    }, { once: true }); // 确保只执行一次
}

//隨機撥放功能
const playRamdonButton = document.getElementById('playRamdonButton');
playRamdonButton.addEventListener('click', () => {
    playRamdonButton.textContent = '播放中';
    playRamdonInSequence();
});
function playRamdonInSequence() {
  let randomNum = getRandomInt(5);
  
  for (let i = 0; i < randomNum; i++) {
    randomplayiset.push(sounds[getRandomInt(sounds.length)]);
  }
  randomplay();
}
function randomplay(){
  if (randomplayiset.length === 0){playRamdonButton.textContent = '隨機撥放'; return;}

  const randomaudio = document.getElementById(randomplayiset[0]);
  randomaudio.play();
  randomaudio.addEventListener('ended', () => {
    randomplayiset.shift(); // 播放完当前音频后移除它
    randomplay(); // 递归播放下一个
  }, { once: true }); // 确保只执行一次
}
//亂數產生
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}