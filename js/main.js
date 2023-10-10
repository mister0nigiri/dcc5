/*
ローディングから画面遷移
================================================ */
const loadingAreaGrey = document.querySelector('#loading');
const loadingAreaGreen = document.querySelector('#loading-screen');
const loadingText = document.querySelector('#loading .loading-img');

window.addEventListener('load', () => {
  // ローディング中
  loadingAreaGrey.animate(
    {
      opacity: [1, 0],
      visibility: 'hidden',
    },
    {
      duration: 2000,
      delay: 400,
      easing: 'ease',
      fill: 'forwards',
    }
  );

  // ローディング中ロゴ
  loadingText.animate(
    [
      {
        opacity: 1,
        offset: .8  //80%
      },
      {
        opacity: 0,
        offset: 1  //100%
      },
    ], 
    {
      duration: 1200,
      easing: 'ease',
      fill: 'forwards',
    }
  );
});


new Splide(".splide", {
  type: "loop", 
  fixedWidth : 250,
  gap        : 30,
  focus  : 'center',
}).mount();