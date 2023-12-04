// JavaScript

const loading = document.getElementById('loading');

function animation(){
  loading.classList.add('loaded');
}
window.addEventListener('load', animation);

const main = document.querySelector('#main-image');
const thumbs = document.querySelectorAll('.thumb');

// 確認
//console.log(main);
//console.log(thumbs);

thumbs.forEach(function(item, index) {
    item.onmouseover = function() {
      //console.log(this.dataset.image);
      main.src = this.dataset.image;
    }
  });