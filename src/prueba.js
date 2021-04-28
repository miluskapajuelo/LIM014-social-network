const burger = document.querySelector('.burger');
const list = document.querySelector('.nav-list ul');

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  list.classList.toggle('open');
});

const show = (() => {
  const btnCm = document.querySelectorAll('.btn-cm');
  const posting = document.querySelectorAll('.posting');

  for (let i = 0; i < btnCm.length; i += 1) {
    btnCm[i].addEventListener('click', () => {
      posting[i].classList.toggle('show');
    });
  }
});
show();
