const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
const PASSWORD="Nayesha@123"; // CHANGE THIS to your secret password.
const NAME="Nayef";   // CHANGE THIS to birthday person's name.
document.querySelectorAll(".name").forEach(x=>x.textContent=NAME);
const gate=$("#gate"),app=$("#app");
$("#unlock").onclick=unlock;
$("#password").addEventListener("keydown",e=>{if(e.key==="Enter")unlock()});
function unlock(){if($("#password").value===PASSWORD){gate.style.display="none";app.classList.remove("locked");startMusic()}else{$("#passwordError").textContent="Not quite... try again ❤️";$("#password").animate([{transform:"translateX(-6px)"},{transform:"translateX(6px)"},{transform:"translateX(0)"}],250)}}
function show(id){$$(".screen").forEach(s=>s.classList.remove("active"));$("#"+id).classList.add("active")}
function burst(x,y){for(let i=0;i<12;i++){let e=document.createElement("div");e.className="heartParticle";e.textContent=["♥","❤","💕","✨"][i%4];e.style.left=x+(Math.random()*100-50)+"px";e.style.top=y+(Math.random()*70-35)+"px";$("#particles").append(e);setTimeout(()=>e.remove(),2100)}}
$("#heart").onclick=()=>{burst(innerWidth/2,innerHeight/2);startMusic();setTimeout(()=>show("s2"),650)};
$$(".next").forEach(b=>b.onclick=()=>show(b.dataset.to));
const messages=[
"REASON NO. 1 ❤️|I love the way you make me feel safe, loved and cared for.",
"REASON NO. 2 ❤️|You are not just my husband you are my favourite person to annoy forever.",
"REASON NO. 3 ❤️|You make ordinary days feel special.",
"REASON NO. 4 ❤️|One of my favourite blessings in life is the little family we have built together.",
"REASON NO. 5 ❤️|I admire your strength, your patience and all the little things you do that sometimes go unnoticed.",
"REASON NO. 6 ❤️|You make our little family feel like home.",
"REASON NO. 7 ❤️|Your laugh is one of my favourite sounds.",
"REASON NO. 8 ❤️|No matter how many birthdays come and go, I hope we keep making silly, beautiful memories together.",
"REASON NO. 9 ❤️|If I could choose my partner all over again, I would still choose YOU. Always.",
"REASON NO. 10 ❤️|You are not just my husband you are my favourite person to annoy forever.",
"REASON NO. 11 ❤️|May Allah put endless barakah in your life and make every difficult road easy for you.",
"REASON NO. 12 ❤️|If I could choose my partner all over again, I would still choose YOU. Always.",
"REASON NO. 13 ❤️|You are not just my husband you are my favourite person to annoy forever.",
"REASON NO. 14 ❤️|May Allah put endless barakah in your life and make every difficult road easy for you."
];
let popped=0;
messages.forEach((m,i)=>{let b=document.createElement("button");b.className="balloon";b.setAttribute("aria-label","Pop balloon "+(i+1));b.onclick=()=>{if(b.classList.contains("popped"))return;b.classList.add("popped");burst(b.getBoundingClientRect().left+30,b.getBoundingClientRect().top+30);popped++;let [a,c]=m.split("|");$("#reason").classList.remove("hidden");$("#reason").innerHTML="<b>"+a+"</b>"+c;$("#progress").textContent=popped+" / 5 popped";if(popped===5)$("#balloonNext").classList.remove("hidden")};$("#balloons").append(b)});
$("#balloonNext").onclick=()=>show("s14");
const questions=[
["What would I choose for an ordinary day with you?",["A quiet day together ❤️","A day without you","Only a fancy party","Nothing special"],0],
["What makes our little family special to me?",["The love we share ❤️","The decorations","The location","The weather"],0],
["What do I want us to keep doing through life?",["Choosing and supporting each other ❤️","Competing with each other","Avoiding each other","Never making memories"],0],
["What is my favourite place to be?",["Beside you ❤️","Somewhere far away","Anywhere without you","Nowhere"],0],
["What do I want most for your birthday?",["Your happiness ❤️","A stressful day","More worries","Less laughter"],0]
];
let qi=0,answered=false;
function renderQuiz(){answered=false;let q=questions[qi];$("#quiz").innerHTML='<div class="quizCard"><h2>'+q[0]+'</h2>'+q[1].map((x,i)=>'<button class="option" data-i="'+i+'">'+x+'</button>').join("")+'<div class="feedback"></div></div>';$$(".option").forEach(o=>o.onclick=()=>{if(answered)return;answered=true;let i=+o.dataset.i;$$(".option")[q[2]].classList.add("correct");if(i!==q[2])o.classList.add("wrong");$(".feedback").textContent=i===q[2]?"You know us too well! ❤️":"Nice try! But I had something sweeter in mind. ❤️"})}
renderQuiz();
$("#quizNext").onclick=()=>{if(!answered)return;if(qi<questions.length-1){qi++;renderQuiz()}else show("s8")};
$("#envelope").onclick=()=>{$("#envelope").classList.add("hidden");$("#openText").classList.add("hidden");$("#letter").classList.remove("hidden")};
$("#letterNext").onclick=()=>{show("s9");playWishes()};
const wishes=["I wish that every dream in your heart comes true. ✨","I wish you a life filled with peace, happiness and barakah. 🤲❤️","I wish you always have reasons to smile.","And I wish I get to stand beside you through all of it. ❤️"];
function playWishes(){let i=0,b=$("#wishText"),btn=$("#finalBtn");function next(){if(i===wishes.length){btn.classList.remove("hidden");return}b.style.opacity=0;setTimeout(()=>{b.textContent=wishes[i++];b.style.opacity=1;setTimeout(next,2200)},500)}next()}
$("#finalBtn").onclick=()=>{show("s10");confetti()};
function confetti(){for(let i=0;i<120;i++){let e=document.createElement("i");e.className="conf";e.style.left=Math.random()*100+"vw";e.style.top=(-20-Math.random()*30)+"vh";e.style.background=["#ffd36a","#ff7ca8","#fff","#9ee8e0","#c8a5ff"][i%5];e.style.animationDelay=Math.random()*1.5+"s";$("#confetti").append(e);setTimeout(()=>e.remove(),4500)}}
$("#secret").onclick=()=>$("#secretMsg").classList.toggle("hidden");
const audio=$("#audio"),musicBtn=$("#musicBtn");
function startMusic(){audio.play().then(()=>musicBtn.textContent="🔊").catch(()=>{})}
musicBtn.onclick=()=>{if(audio.paused){audio.play();musicBtn.textContent="🔊"}else{audio.pause();musicBtn.textContent="🔇"}};
