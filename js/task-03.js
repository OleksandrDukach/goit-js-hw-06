const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

//===============New method=================
const itemEl = document.querySelector('.gallery');
const list = images.map(({ url, alt }) => `<li class = "js-list">
<img class = "js-photo" src="${url}" alt="${alt}" width = 100%>
</li>`).join('');

itemEl.insertAdjacentHTML('beforeend', list)


// const item = document.querySelector('.gallery');
// // console.log(item)
// const liEl = document.createElement('li');
// liEl.classList.add('js-list')
// const imgEl = document.createElement('img');
// imgEl.classList.add('js-photo');

// const massImg = []
// for (let i = 0; i <= images.length; i += 1) {
//   const markup = `<li class = "js-list"><img class = "js-photo" src="${i}" alt=""></li>`
// }
// console.log(massImg);

// imgEl.src = 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260, width = 320'
// imgEl.alt = `${images.alt}`
// // console.log(liEl);
// // console.log(imgEl)
// liEl.appendChild(imgEl)
// // console.log(liEl)
// item.appendChild(liEl)
// console.log(item)

