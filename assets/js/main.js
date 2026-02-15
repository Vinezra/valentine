document.addEventListener("DOMContentLoaded", () => {

  /* =====================
     TYPING EFFECT
  ===================== */
  const text = "will you be my valentine?💖";
  const typingEl = document.getElementById("typing");
  let i = 0;

  function typeText(){
    if(i < text.length){
      typingEl.innerHTML += text[i];
      i++;
      setTimeout(typeText, 70);
    }
  }
  typeText();

  /* =====================
     BUTTON LOGIC (HP FRIENDLY)
  ===================== */
  const noBtn = document.getElementById("no");
  const yesBtn = document.getElementById("yes");
  const music = document.getElementById("music");

  let yesScale = 1;

  function moveNo(){
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 120 - 60;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
  }

  /* NO: hanya kabur, TIDAK nyalain musik */
  noBtn.addEventListener("click", (e) => {
    e.preventDefault();
    moveNo();

    yesScale += 0.2;
    yesBtn.style.transform = `translateX(-120%) scale(${yesScale})`;
  });

  /* YES: NYALAIN MUSIK BARU PINDAH */
  yesBtn.addEventListener("click", () => {
    music.play().catch(()=>{});
    setTimeout(() => {
      window.location.href = "surprise.html";
    }, 300); // kasih jeda dikit biar musik mulai
  });

  /* =====================
     FLOATING HEARTS
  ===================== */
  setInterval(() => {
    const h = document.createElement("div");
    h.className = "heart";
    h.innerHTML = "💖";
    h.style.left = Math.random() * 100 + "vw";
    h.style.animationDuration = Math.random() * 3 + 4 + "s";
    document.body.appendChild(h);

    setTimeout(() => h.remove(), 7000);
  }, 420);

});
