'use strict';

// TEST 1
// console.log(Math.floor(Math.random() * 20) + 1);

// TEST 2
// weekday / weekend
// studying / tv / phone

// const day = 'weekend';
// const day = 'weekday';
// const activity = 'studying';
// const activity = 'tv';
// const activity = 'phone';

// if (day == 'weekday') {
//     console.log(activity == 'studying' ? 'good, keep going!' : (activity == 'tv' ? 'turn off tv' : 'stop using phone'));
// } else {
//     console.log(activity == 'studying' ? 'wow, good work!' : 'use for a while');
// }

// TEST 3
// const num = 10;
// const guess = 29;

// if (num == guess) {
//     console.log('Correct');
// } else {
//     console.log(guess < 1 ? 'number must be positive' : guess > 20 ? 'enter btw 1 to 20' : (guess < num ? 'too low' : 'too high'));
// }

// TEST 4
// const click = document.querySelector('.click');
// const modal = document.querySelector('.modal');
// const close = document.querySelector('.close');
// const bg = document.querySelector('.container');

// click.addEventListener('click', () => {
//     modal.classList.remove('hidden');
//     bg.classList.remove('hidden');
// });

// const disapper = function () {
//     bg.classList.add('hidden');
//     modal.classList.add('hidden');
// }

// close.addEventListener('click', disapper);
// bg.addEventListener('click', disapper);


// document.addEventListener('keydown', (e) => {
//     if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//         disapper();
//         console.log(e.key);
//     }
// });

// TEST 5
// const stud = 'lubna';
// console.log(stud);
// const letter = [...stud, 'N', ' '];
// console.log(letter);
// console.log(...stud);

// TEST 6 : object.keys,values,entries
// const user = {
//     name: 'lubna',
//     age: 20,
// };

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// TEST 7
// // const bookings = [];
// const order = function (num, order, quant) {
//     const deliver = {
//         tableNo: num,
//         food: order,
//         Nos: quant,
//     };
//     console.log(deliver);
//     // bookings.push(deliver);
// };

// order(1,'pizza',2);
// order(2,'burger',4);

// TEST 8

// const credits = [10, -20, 30, -40, 50, -60, 100, -150, 200];
// for (const credit of credits){
// for(const [i,credit] of credits.entries()) {
// credits.forEach((credit, i) => {
//     if (credit > 0) {
//         console.log(`Movement ${i + 1}: Rewarded ${credit}`);
//     } else {
//         console.log(`Movement ${i + 1}: Deduced ${Math.abs(credit)}`);
//     }
// });
// };
// };

// TEST 9 : map function
// const nums = [1, 2, 3, 4, 5]; 
// const numsMulti = nums.map(function(num) {  //map method
//     return num * 2;
// });
// console.log(nums);  //[1, 2, 3, 4, 5]
// console.log(numsMulti); //[2, 4, 6, 8, 10]

// const numsMultifor = [];
// for (const num of nums) numsMultifor.push(num * 2); //for method
// console.log(numsMultifor); //[2, 4, 6, 8, 10]

// const numDes = nums.map((num, i) => `${i + 1} : ${num * 2}`);
// console.log(numDes);

// TEST 10 
// const user = 'Lubna fathima';
// console.log(user.toLowerCase().split(' ').map(use => use[0]).join(''));

// TEST 11 : filter
// const nums = [1, -2, 3, -4, 5]; 
// const num = nums.filter((num, i, arr) => { //acc: accumulator -> SNOWBALL
//     console.log(`${i} : ${num > 0}`);
//     return num > 0;
// });
// console.log(num);

// TEST 12 : Reduce
// const nums = [1, 2, 3, 4, 5]; 
// const num = nums.reduce((acc, cur, i, arr) => { //acc: accumulator -> SNOWBALL
//     console.log(`${i} : ${acc}`);
//     return acc + cur;
// }, 0);
// console.log(num);

// TEST 13: Chaining Method
// const credits = [1, 2, -3, -4, -5];
// const total = credits.filter(totalCredit => totalCredit > 0).map(totalCredit => totalCredit * 2).reduce((acc, totalCredit) => acc + totalCredit, 0);
// console.log(total); //6  
// filter = [1,2] : map = [1,2] *2 : reduce = [2,4] = 6

// TEST 14 : to login user
// const acc = {
//     user : "Lubna Fathima N",
//     pw : 1111,
// }
// const acc1 = {
//     user : "Fathima Lubna",
//     pw : 2222,
// }
// const accs = [acc, acc1];

// const createUser = (accss) => {
//     accss.forEach((acces) => {
//         acces.username = acces.user.toLowerCase().split(' ').map(name => name[0]).join('');
//     });
// };
// createUser(accs);
// // console.log(accs); 
// // console.log(username);

// const loginUser = function loginUserDetails (enterName,psw) {
//     const enterUser = accs.find(acc => acc.username === enterName);
//     console.log('LOGIN');
//     if (enterUser.pw === Number(psw)) {
//         console.log("Done");
//     } else {
//         console.log("Not Done");
//     }
// }
// loginUser('lfn', 1111);
// loginUser('fl', 2222);

// TEST 15 : findIndex
// const age = [5, 10, 15, 20, 25];    //index is 0,1,2,3,4 of 5,10,15,20,25 respectively

// const findAge = age.findIndex(ageAbove => ageAbove > 18);
// console.log(findAge);   //age above 18 is 20 from the array, here the index of 20 is 3
// console.log(age);   //[5, 10, 15, 20, 25]
// console.log(age.splice(findAge, 1));    //[20]
// console.log(age);   //[5, 10, 15, 25]
// console.log(age.includes(25));  //true

// TEST 16: some
// const ages = [5, 10, 15, 20, 25];
// console.log(ages.some(age => age >= 20));

// TEST 17: every
// const ages = [5, 10, 15, 20, 25];
// console.log(ages.every(age => age > 0));

// TEST 18: flat
// const nums = [1, 2, [3, [4, 5], 6], 7, 8];
// console.log(nums.flat());
// console.log(nums.flat(2));

// TEST 18: flatMap
// const nums = [1, 2, 3, 4, 5];
// console.log(nums.flat());
// console.log(nums.flatMap(num => num * 2));
// console.log(nums.flatMap(num => num));
// console.log(nums.flatMap(num => [num, num * 2]));

// TEST 18: rounding int
// console.log(Math.trunc(2.2));
// console.log(Math.trunc(2.8));
// console.log(Math.round(2.2));
// console.log(Math.round(2.8));

// TEST 19: smooth scroll 
// const section3 = document.querySelector('#c3');
// const cl = document.querySelector('#clickk');

// cl.addEventListener('click', (e) => {
//     section3.scrollIntoView({behavior: 'smooth'});
// });

// TEST 20: event handler
// section3.addEventListener('mouseenter', (e) => {
//     alert('hey');
// });
// section3.onmouseenter = (e) => {
    // alert('hey');
// };

// TEST 21 : event propagation
// const cont = document.querySelector('.container');

// const randInt = (max, min) => Math.floor(Math.random() * (max - min + 1) + min);
// const rand = () => `rgb(${randInt(0, 255)},${randInt(0, 255)},${randInt(0, 255)})`; 
// cont.addEventListener('click', (e) => {
//     cont.style.backgroundColor = rand();
// });

// TEST 22: DOM Traversing
// const header = document.querySelector('.h1Tag');

// console.log(header.querySelectorAll('.iTag'));

// going downwards: child
// console.log(header.childNodes);
// console.log(header.children);

// header.firstElementChild.style.backgroundColor = '#fff';
// header.lastElementChild.style.backgroundColor = '#fff';

// going upwards: parent
// console.log(header.parentElement);
// console.log(header.parentNode);

// header.parentNode.style.backgroundColor = 'rgba(100,200,100)';
// header.parentElement.style.backgroundColor = 'rgba(200,200,100)';

// header.closest('.container').style.backgroundColor = 'rgba(200,100,100)'; //parent of header

// going sideways: siblings
// console.log(header.previousElementSibling);
// console.log(header.nextElementSibling);

// console.log(header.previousSibling);
// console.log(header.nextSibling);

// console.log(header.parentElement.children);
// [...header.parentElement.children].forEach(function (el) {
//     if (el !== header) el.style.transform = 'scale(0.5)';
// }); //minimize all element except h1

// TEST 23 : Tabbed Component
// const tabs = document.querySelectorAll('.btn');
// const tabsContainer = document.querySelector('.tabbed-buttons');
// const tabsContent = document.querySelectorAll('.tabbed-content');

// tabsContainer.addEventListener('click', function (e) {
//     const clicked = e.target.closest('.btn');
//     // guard clause
//     if(!clicked) return;    
//     tabs.forEach(t => t.classList.remove('btn--active'));
//     document.querySelectorAll('.cont').forEach(y => y.classList.remove('cont--active'));
//     const contSelect = clicked.dataset.tab;
//     const contActive = document.querySelector(`.cont--${contSelect}`);
//     clicked.classList.add('btn--active');
//     contActive.classList.add('cont--active');
// });

// TEST 24 : Pass argum to event handlers
// then hover a link in nav rest is turned off(transitioned)
// MENU FADE ANIMATION
// const nav = document.querySelector('.nav');     
// const handleHover = function(e, opacity) {  
//     if(e.target.classList.contains('nav__link')) {  
//         const link = e.target;  
//         console.log(link);  
//         const siblings = link.closest('.nav').querySelectorAll('.nav__link');   
//         console.log(siblings);  
//         const logo = link.closest('.nav').querySelector('img');     
//         console.log(logo);  

//         siblings.forEach (el => {   
//             if (el !== link) el.style.opacity = this;   
//         });     
//         logo.style.opacity = this;  
//     }   
// }   
// nav.addEventListener('mouseover', handleHover.bind(0.5));   
// nav.addEventListener('mouseout', handleHover.bind(1));  

// TEST 25 : Sticky Nav
// const section2 = document.querySelector('.section2');
// const coords = section2.getBoundingClientRect();
// window.addEventListener('scroll', () => {
//     if(window.scrollY > coords.top) nav.classList.add('sticky');
//     else nav.classList.remove('sticky');
// });

// TEST 26 : Sticky navigation: Intersection Observer API
// const nav = document.querySelector('.nav');     

// const header = document.querySelector('.section1');
// const navHeight = nav.getBoundingClientRect().height;

// const stickyNav = function (entries) {
//   const [entry] = entries;
//   // console.log(entry);

//   if (!entry.isIntersecting) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// };

// const headerObserver = new IntersectionObserver(stickyNav, {
//   root: null,
//   threshold: 0,
//   rootMargin: `-${navHeight}px`,
// });

// headerObserver.observe(header);

// TEST 27 : Revealing Elements on Scroll
// const allSections = document.querySelectorAll('.section');
// const revealSection = (entries, observer) => {
//     const [entry] = entries;

//     if(!entry.isIntersecting) return;

//     entry.target.classList.remove('section--hidden');
//     observer.unobserve(entry.target);
// };

// const sectionObserver = new IntersectionObserver (revealSection, {
//     root: null,
//     threshold: 0.15,
// });

// allSections.forEach((section) => {
//     sectionObserver.observe(section);
//     section.classList.add('section--hidden');
// });

// TEST 28 : Lazy Loading Images
// const imgTargets = document.querySelectorAll('img[data-src]');

// const loadImg = function (entries, observer) {
//   const [entry] = entries;

//   if (!entry.isIntersecting) return;

//   // Replace src with data-src
//   entry.target.src = entry.target.dataset.src;

//   entry.target.addEventListener('load', function () {
//     entry.target.classList.remove('lazy-img');
//   });

//   observer.unobserve(entry.target);
// };

// const imgObserver = new IntersectionObserver(loadImg, {
//   root: null,
//   threshold: 0,
//   rootMargin: '200px',
// });

// imgTargets.forEach(img => imgObserver.observe(img));

// TEST 29: Building Slider Component

