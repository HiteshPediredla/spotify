// initialize the variables
let index = 0;
let audioElement = new Audio("songs/1.mp3");
let myProgressBar = document.getElementById("myProgressBar");
let masterPlay = document.getElementById("masterPlay");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));

audioElement.onloadedmetadata = function() {
  myProgressBar.max = audioElement.duration;
  myProgressBar.value = audioElement.currentTime;
}
let songs = [

  {
    songName: "Salam-e-Ishq",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg"
  },
  {
    songName: "Happy Day",
    filePath: "songs/2.mp3",
    coverPath: "covers/2.jpg"
  },
  {
    songName: "Summer Party",
    filePath: "songs/3.mp3",
    coverPath: "covers/3.jpg"
  },
  {
    songName: "calm chill beautiful",
    filePath: "songs/4.mp3",
    coverPath: "covers/4.jpg"
  },
  {
    songName: "One Last Time",
    filePath: "songs/5.mp3",
    coverPath: "covers/5.jpg"
  },
  {
    songName: "In the Forest2",
    filePath: "songs/6.mp3",
    coverPath: "covers/6.jpg"
  },
  {
    songName: "A Sinster Power Raising",
    filePath: "songs/7.mp3",
    coverPath: "covers/7.jpg"
  }

]

songItems.forEach((element, i)=>{
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})

//play and pause the song
masterPlay.addEventListener("click", ()=>{
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;

  } else {
    audioElement.pause();
    masterPlay.classList.add("fa-circle-play");
    masterPlay.classList.remove("fa-circle-pause");
    gif.style.opacity = 0;
  }
})

if (audioElement.play()) {
  setInterval(() => {
    myProgressBar.value = audioElement.currentTime
  }, 500);
}

myProgressBar.onchange = function() {
  audioElement.play();
  audioElement.currentTime = myProgressBar.value;
  masterPlay.classList.add("fa-circle-pause");
  masterPlay.classList.remove("fa-circle-play");
}
const makeAllPlays = ()=>{
  Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.classList.remove("fa-circle-pause");
    element.classList.add("fa-circle-play");
  })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{

element.addEventListener("click", (e)=>{
  makeAllPlays();
  index = parseInt(e.target.id);
  e.target.classList.remove("fa-circle-play");
  e.target.classList.add("fa-circle-pause");
  audioElement.src = `songs/${index + 1}.mp3`;
  masterSongName.innerText = songs[index].songName;
  audioElement.currentTime =0;
  audioElement.play();
    gif.style.opacity = 1;
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");

})

})

document.getElementById("next").addEventListener("click",()=>{
  if(index>=7){
    index = 0;
  }
  else{
    index += 1;
  }
  audioElement.src = `songs/${index + 1}.mp3`;
  masterSongName.innerText = songs[index].songName;
  audioElement.currentTime =0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");


})

document.getElementById("previous").addEventListener("click",()=>{
  if(index<=0){
    index = 0;
  }
  else{
    index -= 1;
  }
  audioElement.src = `songs/${index + 1}.mp3`;
  masterSongName.innerText = songs[index].songName;
  audioElement.currentTime =0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");


})
