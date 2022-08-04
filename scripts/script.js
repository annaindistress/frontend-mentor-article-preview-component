const shareBtn = document.querySelector('.preview__share');
const socialElement = document.querySelector('.preview__social');

shareBtn.addEventListener('click', function () {
  shareBtn.classList.toggle('active');
  socialElement.classList.toggle('active');
});
