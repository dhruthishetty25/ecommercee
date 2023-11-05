const product = [
    {
    id: 1,
    image: 'headphones.jpeg',
    title: 'Headphone',
    price:'INR 1000',

    },
    {
    id: 2,
    image: 'smartwatch.jpg',
    title: 'Smart Watch',
    price: 'INR 2500',


    },
    { 
    id: 3,
    image: 'speaker.webp',
    title: 'Bluetooth Speaker',
    price: 'INR 1500',
    },
    {
        id: 4,
        image: 'laptop.jpeg',
        title: 'Laptop',
        price: 'INR 60000',
    },
    {
        id: 5,
        image: "tablet.jpeg",
        title: "Tablet",
        price: "50000",
    },
    {
        id: 6,
        image: 'phone.jpeg',
        title: 'Phone',
        price: 'INR 80000',
    },
    {
        id: 7,
        image: 'camera.jpeg',
        title: 'camera',
        price: 'INR 100000',
    },
    {
        id: 8,
        image: 'earpodes.jpeg',
        title: 'Ear Pods',
        price: 'INR 1200',
    },
]
const categories=[...new Set(product.map((item)=>
    {return item}))]

    let cart = document.getElementById('root')
    cart.innerHTML=categories.map((items)=>
    {
        var{image,title,price}=item;
        return(
            `<div class="box">
             <div class="img-box">
                 <img src=${image}></img>
             </div>
             <div class="left'> 
                 <p>${title}</p>
                <h2>${price}</h2>
            <button>Add to cart</button>
            </div>
            </div>`

        )
    }).join('')