//Picture------------------------------------------------------
function ibg(){
    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if(ibg[i].querySelector('img')){
            ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
        }
      }  
}   
ibg();
//--------------------------------------------------------------

//Menu----------------------------------------------------------
const iconMenu = document.querySelector('.nav-icon');
const bodyMenu = document.querySelector('.nav-menu');
const navMenu = document.querySelector('.nav');
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    bodyMenu.classList.toggle('_active');
    iconMenu.classList.toggle('_active');
    navMenu.classList.toggle('_active');
  });
}
document.addEventListener('click', function(e) {
  if(e.target.tagName === 'A') {
    bodyMenu.classList.remove('_active');
    iconMenu.classList.remove('_active');
    navMenu.classList.remove('_active');
  }
});
//--------------------------------------------------------------


//Scroll Animation----------------------------------------------
let scrollelem = document.querySelectorAll('.anim-item');

window.addEventListener('scroll',scrollanimate);
function scrollanimate(){
    for(let i = 0; i<scrollelem.length; i++){
        const elem = scrollelem[i];
        const elemh = elem.offsetHeight;
        const elemposition = offset(elem).top;
        const startanimate = 2;

        let point = window.innerHeight - elemh / startanimate;
        if (elemh > window.innerHeight){
            point = window.innerHeight - window.innerHeight / startanimate;
        }

        if((pageYOffset > elemposition - point && pageYOffset < (elemposition + elemh))){
            elem.classList.add('_activean');
        } else{
          if(!elem.classList.contains('_no-hide')){
            elem.classList.remove('_activean');
          }
        }
    }
}
function offset(el){
    const g = el.getBoundingClientRect();
    const leftscrl = window.pageXOffset || document.documentElement.scrollLeft;
    const topscrl = window.pageYOffset|| document.documentElement.scrollTop;
    return {top: g.top + topscrl, left: g.left + leftscrl}
}
scrollanimate();
//--------------------------------------------------------------

//Arrow top-----------------------------------------------------
window.addEventListener('scroll',()=>{
  if (document.documentElement.getBoundingClientRect().top < -700){
    document.querySelector('.arrow-top').style.display = 'flex';
  }else{
    document.querySelector('.arrow-top').style.display = 'none';
  };
});
//--------------------------------------------------------------


//Loading-----------------------------------------------------
let mainanim = document.querySelector('.load');

setTimeout(function(){
    mainanim.classList.remove('_load');
    document.body.classList.remove('_lock');
},3000)
window.scrollTo(0, 0);
//--------------------------------------------------------------


//Tap elements of news------------------------------------------
let json = [{
  "number":"01",
  "img":"b9.png",
  "title":"It`s Out - in August!",
  "text":"A series of fiction finds that ranges from the reimagined journey of the author, experiences, family and everything in between. Sit back, relax and find a comfortable spot to read Arthur Mclain’s ‘Fiction Finds’.",
},{
  "number":"02",
  "img":"n1.jpg",
  "title":"The Book Unveiled",
  "text":"On August 2021, author Rey Martin announced that his book will be available on store. Stay tuned and pre-order now!",
},{
  "number":"03",
  "img":"n2.jpg",
  "title":"Author`s Dream",
  "text":"On August 2021, author Rey Martin announced that his book will be available on store. Stay tuned and pre-order now!",
},{
  "number":"04",
  "img":"n3.jpg",
  "title":"August Book Finds!",
  "text":"On August 2021, author Rey Martin announced that his book will be available on store. Stay tuned and pre-order now!",
},{
  "number":"05",
  "img":"n4.jpg",
  "title":"A Vision Coming True",
  "text":"On August 2021, author Rey Martin announced that his book will be available on store. Stay tuned and pre-order now!",
},{
  "number":"06",
  "img":"n5.jpg",
  "title":"July Book Finds!",
  "text":"On August 2021, author Rey Martin announced that his book will be available on store. Stay tuned and pre-order now!",
},{
  "number":"07",
  "img":"n6.jpg",
  "title":"Meet the Zephyr Team",
  "text":"On August 2021, author Rey Martin announced that his book will be available on store. Stay tuned and pre-order now!",
}
];

let list = document.querySelectorAll('.blogs-container-item');
let table = document.querySelector('.blog-container');
let itemfirst = '';

list.forEach(item =>{ 
  item.addEventListener('click', (e) =>{
    let keyitem = item.getAttribute("data-key");
    console.log(item);
    item.style.display = 'none';
    if (itemfirst != ''){
      itemfirst.style.display = 'flex';
    }else{
      document.querySelector('.firstitem').style.display = 'flex';
    }
    itemfirst = item;
    console.log(itemfirst)
    console.log(json[keyitem]["number"]);
    console.log(json[keyitem]["img"]);
    maintable(keyitem);
})
});

function maintable(keyitem){
  if (keyitem == 0){
    table.innerHTML = `
    <div class="blog-container-pic">
      <div class="circle-wrapper">
        <div class="circle">
          <img class="circle-image" src="${json[keyitem]["img"]}" style="width: 250px; height: 360px;">
        </div>
      </div>
    </div>
    <div class="blog-container-text">
      <div class="blog-container-text__title">${json[keyitem]["title"]}</div>
      <div class="blog-container-text__text">${json[keyitem]["text"]}</div>
      <button>READ NOW</button>
    </div>
    <div class="blog-container-number">${json[keyitem]["number"]}</div>
    </div>
    `
  }else{
    table.innerHTML = `
  <div class="blog-container-pic">
    <div class="circle-2" style="background-image: url('${json[keyitem]["img"]}')"></div>
  </div>
    <div class="blog-container-text">
      <div class="blog-container-text__title">${json[keyitem]["title"]}</div>
      <div class="blog-container-text__text">${json[keyitem]["text"]}</div>
      <button>READ NOW</button>
    </div>
    <div class="blog-container-number">${json[keyitem]["number"]}</div>
  `
  }
  
};
//--------------------------------------------------------------

//First slider------------------------------------------
let json1 = [{
  "number":"01",
  "img":"b1.png",
  "title":"Learn & Play",
  "stars":"★★★",
  "mark":"3.2",
  "text": 'A series of fiction finds that ranges from the reimagined journey of the author, experiences, family and everything in between. Sit back, relax and find a comfortable spot to read Arthur Mclain’s ‘Learn & Play’.',
},{
  "number":"02",
  "img":"b2.png",
  "title":"Fiction Finds",
  "stars":"★★★★★",
  "mark":"5.0",
  "text": 'A series of fiction finds that ranges from the reimagined journey of the author, experiences, family and everything in between. Sit back, relax and find a comfortable spot to read Arthur Mclain’s ‘Fiction Finds’.',
},{
  "number":"03",
  "img":"b3.png",
  "title":"Magic Love Stories",
  "stars":"★★★★",
  "mark":"4.1",
  "text": 'A series of fiction finds that ranges from the reimagined journey of the author, experiences, family and everything in between. Sit back, relax and find a comfortable spot to read Arthur Mclain’s ‘Magic Love Stories’.',
},{
  "number":"04",
  "img":"b4.png",
  "title":"Tips of Design",
  "stars":"★★★★",
  "mark":"4.9",
  "text": 'A series of fiction finds that ranges from the reimagined journey of the author, experiences, family and everything in between. Sit back, relax and find a comfortable spot to read Arthur Mclain’s ‘Tips of Design’.',
},{
  "number":"05",
  "img":"b5.png",
  "title":"Winter Stories",
  "stars":"★★★★★",
  "mark":"5.0",
  "text": 'A series of fiction finds that ranges from the reimagined journey of the author, experiences, family and everything in between. Sit back, relax and find a comfortable spot to read Arthur Mclain’s ‘Winter Stories’.',
}
];

let right = document.querySelector('.arrow-right');
let left = document.querySelector('.arrow-left');
let key = 0;
let key2 = 1;
let key3 = 2;
let s1 = document.querySelector('.section1');
let s2 = document.querySelector('.section2');
let s3 = document.querySelector('.section3');

right.addEventListener('click', (e) =>{
  key +=1;
  if(key == 5) {key = 0;};
  s1.innerHTML = `
  <div class="section1__number _left">${json1[key]["number"]}</div>
  <div class="circle-wrapper">
    <div class="circle">
      <img class="circle-image _right" src="${json1[key]["img"]}">
    </div>
  </div>
  <div class="text-about-book">
    <div class="text-about-book__title _left">${json1[key]["title"]}</div>
    <div class="text-about-book__stars _left">${json1[key]["stars"]}</div>
    <div class="text-about-book__mark _left">${json1[key]["mark"]}/5.0</div>
  </div>
  `;
  key2 += 1;
  if(key2 == 5) {key2 = 0;};
  s2.innerHTML = `
  <div class="section2__title">${json1[key2]["title"]}</div>
  <div class="section2__book _right">
    <img class="shadow" src="/img/Shadow.png">
    <img class="main-book" src="${json1[key2]["img"]}" alt="main-book">
  </div>
  <div class="section2__text">${json1[key2]["text"]}</div>
  <div class="section2__butns">
    <button>BUY NOW</button>
    <button>ADD TO CARD</button>
  </div>
  `;
  key3 += 1;
  if(key3 == 5) {key3 = 0;};
  s3.innerHTML = `
  <div class="section3__number _left">${json1[key3]["number"]}</div>
  <div class="circle-wrapper">
    <div class="circle">
      <img class="circle-image _right" src="${json1[key3]["img"]}">
    </div>
  </div>
  <div class="text-about-book">
    <div class="text-about-book__title _left">${json1[key3]["title"]}</div>
    <div class="text-about-book__stars _left">${json1[key3]["stars"]}</div>
    <div class="text-about-book__mark _left">${json1[key3]["mark"]}/5.0</div>
  </div>
  `;
});


left.addEventListener('click', (e) =>{
  key -= 1;
  if(key < 0) {key = 4;};
  s1.innerHTML = `
  <div class="section1__number _left">${json1[key]["number"]}</div>
  <div class="circle-wrapper">
    <div class="circle">
      <img class="circle-image _left" src="${json1[key]["img"]}">
    </div>
  </div>
  <div class="text-about-book">
    <div class="text-about-book__title _left">${json1[key]["title"]}</div>
    <div class="text-about-book__stars _left">${json1[key]["stars"]}</div>
    <div class="text-about-book__mark _left">${json1[key]["mark"]}/5.0</div>
  </div>
  `;
  key2 -= 1;
  if(key2 < 0) {key2 = 4;};
  s2.innerHTML = `
  <div class="section2__title">${json1[key2]["title"]}</div>
  <div class="section2__book _left">
    <img class="shadow" src="Shadow.png">
    <img class="main-book" src="${json1[key2]["img"]}" alt="main-book">
  </div>
  <div class="section2__text">${json1[key2]["text"]}</div>
  <div class="section2__butns">
    <button>BUY NOW</button>
    <button>ADD TO CARD</button>
  </div>
  `;
  key3 -= 1;
  if(key3 < 0) {key3 = 4;};
  s3.innerHTML = `
  <div class="section3__number _left">${json1[key3]["number"]}</div>
  <div class="circle-wrapper">
    <div class="circle">
      <img class="circle-image _left" src="${json1[key3]["img"]}">
    </div>
  </div>
  <div class="text-about-book">
    <div class="text-about-book__title _left">${json1[key3]["title"]}</div>
    <div class="text-about-book__stars _left">${json1[key3]["stars"]}</div>
    <div class="text-about-book__mark _left">${json1[key3]["mark"]}/5.0</div>
  </div>
  `;
});
//--------------------------------------------------------------

//Second slider------------------------------------------

let circle_click = 0;
let i = 0;
let container_of_circle = document.querySelector('.cercl-container');
let main_of_circle = document.querySelector('.popular-container-books__main');
let a = document.querySelector('[data-item="' + i + '"]');
a.classList.add('_start');
container_of_circle.addEventListener('click', (e) =>{
  circle_click += 90;
  document.querySelector('.cercl').style.transform = 'rotate(' + circle_click + 'deg)';
  document.querySelector('.popular-container-books-small-item').style.transform = 'rotate(' + -circle_click + 'deg)';
  document.querySelector('.popular-container-books-small-item-2').style.transform = 'rotate(' + -circle_click + 'deg)';
  document.querySelector('.popular-container-books__main-item').style.transform = 'rotate(' + -circle_click + 'deg)';
  document.querySelector('.last-item').style.transform = 'rotate(' + -circle_click + 'deg)';
  a.classList.remove('_start');
  console.log(i);
  if (i == 3) {
    i = 0;
    document.querySelector('.popular-container-books-small-item-2').style.marginTop = '220px';
  } else {
    i += 1;
    document.querySelector('.popular-container-books-small-item-2').style.marginTop = '220px';
  };
  if (i == 3){
    document.querySelector('.popular-container-books-small-item-2').style.marginTop = '500px';
  }
  if (i == 2){
    document.querySelector('.shadow-1').style.display = 'block';
    document.querySelector('.book-1').style.display = 'block';
  }else{
    document.querySelector('.shadow-1').style.display = 'none';
    document.querySelector('.book-1').style.display = 'none';
  }
  console.log(i);
  a = document.querySelector('[data-item="' + i + '"]');
  a.classList.add('_start');
});
//--------------------------------------------------------------