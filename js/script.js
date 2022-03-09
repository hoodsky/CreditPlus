function openTab(evt, tabName) {
  // Declare all variables
  var i, tab_box_content, tab_links;
    
  // Get all elements with class="tab_box_content" and hide them
  tab_box_content = document.getElementsByClassName("tab_box_content");
  for (i = 0; i < tab_box_content.length; i++) {
    tab_box_content[i].style.display = "none";
  }

  // Get all elements with class="tab_links" and remove the class "active"
  tab_links = document.getElementsByClassName("tab_links");
  for (i = 0; i < tab_links.length; i++) {
    tab_links[i].className = tab_links[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

function openTabCond(evt, tabNameCond) {
  // Declare all variables
  var i, tab_box_content_condition, tab_links_cond;
    
  // Get all elements with class="tab_box_content_condition" and hide them
  tab_box_content_condition = document.getElementsByClassName("tab_box_content_condition");
  for (i = 0; i < tab_box_content_condition.length; i++) {
    tab_box_content_condition[i].style.display = "none";
  }

  // Get all elements with class="tab_links_cond" and remove the class "active"
  tab_links_cond = document.getElementsByClassName("tab_links_cond");
  for (i = 0; i < tab_links_cond.length; i++) {
    tab_links_cond[i].className = tab_links_cond[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabNameCond).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();
document.getElementById("defaultOpenCond").click();


// карусель отзывы
const width = 300;
const count = 1;
const reviewsCarousel = document.querySelector('#reviewsCarousel')
const list = reviewsCarousel.querySelector('ul');
const listElems = reviewsCarousel.querySelectorAll('li');

let position = 0;

reviewsCarousel.querySelector('.prev').onclick = function () {
  position += width * count
  position = Math.min(position, 0)
  list.style.marginLeft = position + 'px';
};
reviewsCarousel.querySelector('.next').onclick = function() {
      // сдвиг вправо
      position -= width * count;
      // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
      position = Math.max(position, -width * (listElems.length - count));
      list.style.marginLeft = position + 'px';
};
    
// калькулятор 

const minSum = 600;
const minDay = 5;
// смена поля ввода и правого блока по движению ползунка "выберите сумму"
function culcSum() {
  var rng = document.getElementById('range_sum'); //rng - это Input
  var span = document.getElementById('span_sum'); // p - абзац
  var inputSum = document.getElementById('input_sum');
  // var minSum = 600;
  span.innerHTML = (+rng.value + +minSum +' грн');
  inputSum.value = +rng.value + +minSum;
}


// смена ползунка и правого блока по вводу цифр в поле "выберите сумму"
function culc2() {
  var rng = document.getElementById('input_sum');
  var range = document.getElementById('range_sum');
  var span = document.getElementById('span_sum');
  span.innerHTML = rng.value + ' грн';
  range.value = +rng.value - +minSum;
 }

// движение оранжевой полоски при движении ползунка "выберите сумму"
function culc3() {
  var rng = document.getElementById('range_sum');
  var div = document.getElementById('caclulator_start_slide');
  div.style.width = (rng.value / 9400 * 100 + '%');
  
}

// движение оранжевой полоски при вводе суммы в поле "выберите сумму"
function culc6() {
  var rng = document.getElementById('input_sum');
  var div = document.getElementById('caclulator_start_slide');
  div.style.width = ((+rng.value - +minSum) / 9400 * 100 + '%');
}

// движение оранжевой полоски при движении ползунка "выберите срок"
function culc4() {
  var rng = document.getElementById('range_day');
  var div = document.getElementById('caclulator_day_start_slide');
  div.style.width=(rng.value/25*100+'%')
}

// смена поля ввода по движению ползунка "выберите срок"
function culc5() {
  var rng = document.getElementById('range_day');
  var inputDay = document.getElementById('input_day');
   inputDay.value = +rng.value + +minDay;
}

// смена ползунка по вводу цифр в поле "выберите срок"
function culc7() {
  var rng = document.getElementById('input_day');
  var range = document.getElementById('range_day');
  range.value = +rng.value - +minDay;
}
 
// движение оранжевой полоски при вводе суммы в поле "выберите срок"
function culc8() {
  var rng = document.getElementById('input_day');
  var div = document.getElementById('caclulator_day_start_slide');
  div.style.width = ((+rng.value - +minDay)/25*100+'%');
}

