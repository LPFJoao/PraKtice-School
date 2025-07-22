function updateChatLogoPosition() {
  const chatLogo = document.getElementById('chat-logo');
  const footer = document.querySelector('footer');
  const windowHeight = window.innerHeight;
  const footerRect = footer.getBoundingClientRect();

  // If the footer is visible in the viewport
  if (footerRect.top < windowHeight) {
    // Move the chat logo up so it stays above the footer
    const overlap = windowHeight - footerRect.top + 20;
    chatLogo.style.bottom = overlap + 'px';
  } else {
    chatLogo.style.bottom = '20px';
  }
}

window.addEventListener('scroll', updateChatLogoPosition);
window.addEventListener('resize', updateChatLogoPosition);
document.addEventListener('DOMContentLoaded', updateChatLogoPosition);