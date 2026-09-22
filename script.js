const openBtn=document.getElementById("openBtn");
const surprise=document.getElementById("surprise");
const musicBtn=document.getElementById("musicBtn");
const audio=document.getElementById("audio");
const confettiBtn=document.getElementById("confettiBtn");

openBtn.addEventListener("click",()=>{
  surprise.classList.remove("hidden");
  openBtn.parentElement.style.display="none";
  window.scrollTo({top:0,behavior:"smooth"});
  burstHearts();
});

musicBtn.addEventListener("click",()=>{
  if(audio.paused){
    audio.play().then(()=>musicBtn.textContent="❚❚ Pause").catch(()=>{
      alert("Tambahkan file assets/shape-of-my-heart.mp3 terlebih dahulu.");
    });
  }else{
    audio.pause();
    musicBtn.textContent="▶ Play";
  }
});
audio.addEventListener("ended",()=>musicBtn.textContent="▶ Play");

confettiBtn.addEventListener("click",()=>{
  for(let i=0;i<45;i++){
    const s=document.createElement("span");
    s.textContent=["💗","🌸","✨","🎀","💫"][Math.floor(Math.random()*5)];
    s.style.position="fixed";s.style.left=(50+Math.random()*20-10)+"%";s.style.top="55%";
    s.style.fontSize=(14+Math.random()*20)+"px";s.style.zIndex=99;
    document.body.appendChild(s);
    s.animate([{transform:"translate(0,0) scale(.6)",opacity:1},{transform:`translate(${(Math.random()-.5)*500}px,${-150-Math.random()*500}px) rotate(${Math.random()*720-360}deg)`,opacity:0}],{duration:1400+Math.random()*1000,easing:"cubic-bezier(.2,.7,.2,1)"}).onfinish=()=>s.remove();
  }
});

function burstHearts(){
  const box=document.querySelector(".hearts");
  for(let i=0;i<18;i++){
    const h=document.createElement("span");
    h.className="float-heart";h.textContent=["💗","💕","💖","✨"][Math.floor(Math.random()*4)];
    h.style.left=Math.random()*100+"%";
    h.style.fontSize=(12+Math.random()*20)+"px";
    h.style.animationDuration=(3+Math.random()*4)+"s";
    box.appendChild(h);
    setTimeout(()=>h.remove(),7500);
  }
}
setInterval(()=>{
  const box=document.querySelector(".hearts");
  const h=document.createElement("span");
  h.className="float-heart";h.textContent="♡";
  h.style.left=Math.random()*100+"%";h.style.fontSize=(15+Math.random()*18)+"px";
  h.style.animationDuration=(6+Math.random()*4)+"s";
  box.appendChild(h);setTimeout(()=>h.remove(),11000);
},900);
