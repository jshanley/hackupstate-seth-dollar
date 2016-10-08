$(function() {
  'use strict';

  let width = $(window).innerWidth();
  let height = $(window).innerHeight();

  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  $(window).on('resize', function() {
    const win = $(window)
    width = win.innerWidth();
    height = win.innerHeight();
    canvas.setAttribute('width', width)
    canvas.setAttribute('height', height)
  }).trigger('resize');


  let words = '';

  function render(t) {
    ctx.fillStyle = '#234'
    ctx.fillRect(0, 0, width, height);
    $('.html-text').text(words);

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);

  function getNewWords() {
    words = '';
    const wordCount = ~~(Math.random() * 5) + 1
    for (let i = 0; i < wordCount; i++) {
      words += chance.word() + ' '
    }
    words = words.toUpperCase();
  }

  setInterval(getNewWords, 1250);
})
