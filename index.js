var products = [{
    link: 'www.google.com',
    image: 'picture1.png',
    name: 'PC Phongvu',
    price: '100đ'
  },
  {
    link: 'www.facebook.com',
    image: 'picture2.png',
    name: 'shoppe',
    price: '5000đ'
  },
  {
    link: 'www.youtube.com',
    image: 'small car.jpg',
    name: 'Lazada',
    price: '40$'
  },
  {
    link: 'www.asus.vn',
    image: 'Ferrari.jpg',
    name: 'Hshop',
    price: '10000đ'
  },
  {
    link: 'www.lazada.vn',
    image: 'Australia-flag.jpg',
    name: 'google',
    price: '4000đ'
  }
];

AddItem(products);


function AddItem(items) {
  for (let item of items) {
    let a = document.createElement('a');

    let div = document.createElement('div');
    div.className = "content-item";

    let divInfo = document.createElement('div');
    divInfo.className = "content-item-info";

    let img = document.createElement('img');
    img.className = "content-item-image";

    let spanName = document.createElement('span');
    spanName.className = "content-item-name";

    let spanPrice = document.createElement('span');
    spanPrice.className = "content-item-price";

    divInfo.appendChild(spanName);
    divInfo.appendChild(spanPrice);
    div.appendChild(img);
    div.appendChild(divInfo);
    a.appendChild(div);

    a.href = item.link;
    img.src = item.image;
    spanName.innerHTML = item.name;
    spanPrice.innerHTML = item.price;

    let li = document.createElement('li');
    li.appendChild(a);
    document.getElementById("item-list").appendChild(li);
  }
}
