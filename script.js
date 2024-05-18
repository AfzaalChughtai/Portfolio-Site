function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


function openModal(imageSrc) {
  document.getElementById('imageModal').style.display = "block";
  document.getElementById('modalImage').src = imageSrc;
}

function closeModal() {
  document.getElementById('imageModal').style.display = "none";
}