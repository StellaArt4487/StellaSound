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
/*
soundList.forEach(item => {
  sounds.push(item);
});
*/
soundList.map((item, index) => ({
        ...item,
        index  // 記錄它在 soundList 裡的位置（0-based）
    }))
    .forEach(item => {
  sounds.push(item);
});
/***************************************************************************/
let soundtemp = "";
let soundtemp1 = "";
let flag = 0;
// 保存用户选择的播放顺序
let randomplayiset = [];

let currentAudio = null;

// Initially show Tab 1
document.getElementById("Tab1").classList.add("active-tab");
document.getElementById("tabButton1").classList.add("active-button"); // 初始 Tab 1 按鈕變綠

sounds.forEach((sound) => {
  let btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = /*sounds.indexOf(sound)+1*/sound.index+1 + ". " + sound.id;  // 设置按钮文本为序号 + 音频 ID

  // 確認分頁容器存在並嘗試添加按鈕
  document.getElementById("buttonContainerTab" + (Math.ceil(/*serial_number*/(sound.index+1) / 200))).appendChild(btn);
  //serial_number++;  // 序号递增

  btn.addEventListener("click", () => {
    playSingleSound(new Audio(sound.src));
  });
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

  // 如果是分類分頁，顯示下拉選單
  if (tabNumber === 0) {
    totalSelect.style.display = "block";
    tagSelect.style.display = "block";
  } else {
    totalSelect.style.display = "none";
    tagSelect.style.display = "none";
  }
}

// -------------------------------------------------------------
// 播放單一音效（會自動停止上一個）
// -------------------------------------------------------------
function playSingleSound(soundItem) {

    // 若之前有聲音正在播 → 停止
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    // 建立新的 Audio 實例
    currentAudio = soundItem;//new Audio(soundItem.src);
    currentAudio.play().catch(err => console.error(err));

    // 播放完自動清空
    currentAudio.addEventListener("ended", () => {
        soundtemp1 = "";
        soundtemp = "";
        flag = 0;
    });
}

// -------------------------------------------------------------
//隨機撥放功能
// -------------------------------------------------------------
const playRamdonButton = document.getElementById('playRamdonButton');
playRamdonButton.addEventListener('click', () => {
    playRamdonButton.textContent = '播放中';
    playRamdonInSequence();
});
function playRamdonInSequence() {
  let randomNum = getRandomInt(5);
  
  for (let i = 0; i < randomNum; i++) {
    randomplayiset.push(sounds[getRandomInt(sounds.length)].src);
  }
  randomplay();
}
function randomplay(){
  if (randomplayiset.length === 0){playRamdonButton.textContent = '隨機撥放'; return;}

  const randomaudio = new Audio(randomplayiset[0]);
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

// -------------------------------------------------------------
// 創建一個函數來處理輸入
// -------------------------------------------------------------
function processInput() {
  // 獲取輸入框中的值
  let input = document.getElementById("userInput").value;
  
  // 將輸入的字串按照空格分割，並存入陣列
  let inputArray = input.split(' ');//Array = input.split(' '); // 以空格為分隔符
  inputArray = inputArray.filter(element => element !== ' ' && element !== '' && element <= sounds.length);

  for(let i = 0;i < inputArray.length;i++)
  {
    inputArray[i] = inputArray[i]-1;
    randomplayiset.push(sounds[inputArray[i]].src);
  }
  randomplay();
}

// -------------------------------------------------------------
//指定聲音
// -------------------------------------------------------------
function pointSount(index){
  if(index <= sounds.length)
  {
    playSingleSound(new Audio(sounds[index-1].src));
  }
}