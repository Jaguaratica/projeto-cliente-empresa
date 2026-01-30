const track = document.querySelector(".carousel-track");

let position = 0;
let speed = 0.4;      // velocidade normal
let fastSpeed = 1.4; // velocidade no hover

let currentSpeed = speed;

function animate() {
  position -= currentSpeed;

  // loop contínuo (50% do conteúdo duplicado)
  if (Math.abs(position) >= track.scrollWidth / 2) {
    position = 0;
  }

  track.style.transform = `translateX(${position}px)`;
  requestAnimationFrame(animate);
}

animate();

document.querySelector(".carousel").addEventListener("mouseenter", () => {
  currentSpeed = fastSpeed;
});

document.querySelector(".carousel").addEventListener("mouseleave", () => {
  currentSpeed = speed;
});