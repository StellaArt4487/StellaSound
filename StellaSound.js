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

// Initially show Tab 1
document.getElementById("Tab1").classList.add("active-tab");
document.getElementById("tabButton1").classList.add("active-button"); // 初始 Tab 1 按鈕變綠

sounds.forEach((sound) => {
  let btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = serial_number.toString() + ". " + sound;  // 设置按钮文本为序号 + 音频 ID

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
  //document.getElementById("buttons").appendChild(btn);
  // 確認分頁容器存在並嘗試添加按鈕
  let container = document.getElementById("buttonContainerTab" + (Math.ceil(serial_number / 200))).appendChild(btn);
  serial_number++;  // 序号递增
});

// Function to switch tabs
function showTab(tabNumber) {
  // Hide all tab contents
  let allTabs = document.querySelectorAll('.tab-content');
  allTabs.forEach(tab => tab.classList.remove('active-tab'));

  // Show the selected tab
  document.getElementById("Tab" + tabNumber).classList.add('active-tab');

  // Reset all tab button colors
  let allButtons = document.querySelectorAll('.tab-button');
  allButtons.forEach(button => button.classList.remove('active-button'));

  // Set the active button color
  document.getElementById("tabButton" + tabNumber).classList.add('active-button');
}

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

// 創建一個函數來處理輸入
function processInput() {
  // 獲取輸入框中的值
  let input = document.getElementById("userInput").value;
  
  // 將輸入的字串按照空格分割，並存入陣列
  let inputArray = input.split(' ');//Array = input.split(' '); // 以空格為分隔符
  inputArray = inputArray.filter(element => element !== ' ' && element !== '' && element <= sounds.length);

  for(let i = 0;i < inputArray.length;i++)
  {
    inputArray[i] = inputArray[i]-1;
    
    playSequence.push(sounds[inputArray[i]]);
  }
  flag = 1;

  playSoundsInSequence(playSequence);
}

//指定聲音
function pointSount(index){
  if(index <= sounds.length)
  {
    playSequence.push(sounds[index-1]);
    flag = 1;
    playSoundsInSequence(playSequence);
  }
}

