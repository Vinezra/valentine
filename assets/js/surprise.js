document.addEventListener("DOMContentLoaded", () => {

  /* =====================
     TYPING MESSAGE
  ===================== */
  const message =
`ada sesuatu yang istimewa ni`;

  const msgEl = document.getElementById("message");
  let i = 0;

  function typeMessage(){
    if(i < message.length){
      msgEl.innerHTML += message[i] === "\n" ? "<br>" : message[i];
      i++;

      // jeda sedikit lebih lama kalau ganti baris
      const delay = message[i-1] === "\n" ? 400 : 60;
      setTimeout(typeMessage, delay);
    }
  }
  typeMessage();

  /* =====================
     FOTO SLIDER
  ===================== */
  const mainImage = document.getElementById("mainImage");
  const thumbs = document.querySelectorAll(".slider-thumbs img");

  thumbs.forEach(thumb => {
    thumb.addEventListener("click", () => {

      if(mainImage.src === thumb.src) return;

      mainImage.style.opacity = 0;

      setTimeout(() => {
        mainImage.src = thumb.src;
        mainImage.style.opacity = 1;
      }, 200);

      thumbs.forEach(t => t.classList.remove("active"));
      thumb.classList.add("active");
    });
  });

});
