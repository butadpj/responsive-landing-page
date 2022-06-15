// Wrap every letter in a span

const allEffect1 = document.querySelectorAll('.effect1');

allEffect1.forEach((effect) => {
  effect.innerHTML = effect.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>",
  );
});

anime.timeline({ loop: false }).add({
  targets: '.effect1 .letter',
  translateX: [40, 0],
  translateZ: 0,
  opacity: [0, 1],
  easing: 'easeOutExpo',
  duration: 1200,
  delay: (el, i) => 500 + 30 * i,
});
