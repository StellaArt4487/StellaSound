let sounds = [
              "八嘎(高音版)", 
              "挖咧巴噗", 
              "有嗎?我本來就很可愛吧?嘎～",
              "雜魚~雜魚~ unbelievable"
            ]; //<audio> tag's id
let soundtemp = "";

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
  document.getElementById("buttons").appendChild(btn);
});

function stopSounds() {
  sounds.forEach((sound) => {
    let song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}
