const coffeeProduct = [
    {
        id: 1,
        name: "Lungo Coffee",
        description: "An espresso coffee drink, topped with a small amount of hot milk.",
        price: 199,
        image: "./images/lungo-coffee.jpeg",
        category: "Hot Coffee",
    },
    {
        id: 2,
        name: "Dalgona Coffee",
        description: "Whipped coffee made using instant coffee.",
        price: 159,
        image: "./images/dalgona-coffee.jpg",
        category: "Cup Coffee",
    },
    {
        id: 3,
        name: "Iced Coffee",
        description: "Iced coffee is a coffee beverage served cold.",
        price: 149,
        image: "./images/iced-coffee-product.jpeg",
        category: "Cold Coffee",
    },
    {
        id: 4,
        name: "Filter Coffee",
        description: "70% coffee and 30% chicory freshly roasted.",
        price: 59,
        image: "./images/filter-coffee.jpeg",
        category: "Hot Coffee",
    },
]

const coffeeContainer = document.querySelector(".coffee-product-card")


coffeeProduct.forEach((product) => {
    const card = document.createElement("div")
    card.classList.add("card")
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="card-info">
            <span>Rs. ${product.price}</span>
            <button>Add To Cart</button>
        </div>
        
`
    coffeeContainer.append(card)
    console.log(product)
});

const dessertProduct = [
    {
        id: "Di1",
        name: "Gulab Jamun",
        description: "Made with milk solids, sugar, rose water & cardamom.",
        image: "./images/gulab-jamun.jpg",
        price: 199
    },
    {
        id: "Di2",
        name: "Chocolate Tiramisu",
        description: "Made with layers of mascarpone cream, chocolate & coffee.",
        image: "./images/chocolate-tiramisu.jpeg",
        price: 250
    },
    {
        id: "Di3",
        name: "Churros",
        description: "Hot chocolate made with bittersweet chocolate.",
        image: "./images/churros.jpeg",
        price: 170
    },
    {
        id: "Di4",
        name: "Australian Lamingtons",
        description: "Made with delicious sponge cake.",
        image: "./images/australian-lamingtons.jpeg",
        price: 280
    },
]

const dessertContainer = document.querySelector(".dessert-product-card")

dessertProduct.forEach((product) => {
    const dessertCard = document.createElement("div")
    dessertCard.classList.add("card")
    dessertCard.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="card-info">
            <span>Rs. ${product.price}</span>
            <button>Add To Cart</button>
        </div>
    `
    dessertContainer.append(dessertCard)
    console.log(product)
})


const testimonials = [
    {
        id: 1,
        name: "Aarav Sharma",
        review:
            "The coffee is always fresh and aromatic. The desserts are equally amazing. Definitely my favorite coffee shop!",
        image: "https://i.pravatar.cc/150?img=1",
        rating: 5,
    },
    {
        id: 2,
        name: "Priya Verma",
        review:
            "Loved the Chocolate Tiramisu and the Iced Coffee. Great taste and beautiful presentation.",
        image: "https://i.pravatar.cc/150?img=2",
        rating: 4,
    },
    {
        id: 3,
        name: "Rohan Mehta",
        review:
            "A cozy place with excellent coffee varieties. The service was quick and the quality was outstanding.",
        image: "https://i.pravatar.cc/150?img=3",
        rating: 5,
    },
    {
        id: 4,
        name: "Ananya Kapoor",
        review:
            "The Australian Lamingtons were delicious. Everything feels premium and well crafted.",
        image: "https://i.pravatar.cc/150?img=4",
        rating: 5,
    },
];

const testimonialContainer = document.querySelector(".testimonial-container")

testimonials.forEach((reviewer) => {
    const testimonialCard = document.createElement("div")
    testimonialCard.classList.add("card", "testimonial-card")
    testimonialCard.innerHTML = `
<div class="reviewer-info">
    <img src="${reviewer.image}" alt="${reviewer.name}">
    <div>
        <h3>${reviewer.name}</h3>
        <p class="stars">${"⭐".repeat(reviewer.rating)}</p>
    </div>
</div>

<p class="review">
    ${reviewer.review}
</p>
`
    testimonialContainer.append(testimonialCard)
    console.log(reviewer)
})