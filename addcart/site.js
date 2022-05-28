const data= [
    {
        id : 0,
        img : '/images/redmiK20.jpg',
        name : 'Redmi K20',
        price : 190,
        save : 25,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 1,
        img : '/images/samGalaxynote20.jpg',
        name : 'Samsung Galaxy Note 20',
        price : 300,
        save : 50,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 2,
        img : '/images/oppofindX2.jpg',
        name : 'OPPO Find X2',
        price : 240,
        save : 30,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 3,
        img : '/images/realmeX20pro.jpg',
        name : 'Realme X50 Pro',
        price : 285,
        save : 35,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 4,
        img : '/images/redminote8.jpg',
        name : 'Redmi Note 8',
        price : 200,
        save : 15,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 5,
        img : '/images/redminote9.jpg',
        name : 'Redmi Note 9',
        price : 220,
        save : 25,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 6,
        img : '/images/redmi8.jpg',
        name : 'Redmi 8A Dual',
        price : 160,
        save : 20,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 7,
        img : '/images/redmi9.jpg',
        name : 'Redmi 9',
        price : 100,
        save : 10,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 8,
        img : '/images/realme C11.jpg',
        name : 'Realme C11',
        price : 170,
        save : 20,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 9,
        img : '/images/realmeNarzo.jpg',
        name : 'Realme Narzo 20',
        price : 210,
        save : 15,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 10,
        img : '/images/realme7i.jpg',
        name : 'Realme 7i',
        price : 330,
        save : 20,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 11,
        img : '/images/realmeC15.jpg',
        name : 'Realme C15',
        price : 350,
        save : 23,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 12,
        img : '/images/oppoA31.jpg',
        name : 'Oppo A31',
        price : 280,
        save : 30,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 13,
        img : '/images/oppA5s.jpg',
        name : 'OPPO A5S',
        price : 190,
        save : 20,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 14,
        img : '/images/oppoF17.jpg',
        name : 'OPPO F17 Pro',
        price : 300,
        save : 15,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 15,
        img : '/images/oppoA15.jpg',
        name : 'OPPO A15',
        price : 275,
        save : 18,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 16,
        img : '/images/samgalaxyM01.jpg',
        name : 'samsung Galaxy MO1',
        price : 310,
        save : 10,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 17,
        img : '/images/samGalaxyM21.jpg',
        name : 'Samsung Galaxy M21',
        price : 400,
        save : 20,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 18,
        img : '/images/samsGalaxyNote20.jpg',
        name : 'Samsung Galaxy Note 20',
        price : 290,
        save : 12,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
    {
        id : 19,
        img : '/images/samGalaxys20+.jpg',
        name : 'Samsung Galaxy S20',
        price : 350,
        save : 30,
        delievery : 'In 3 - 4 days',
        itemInCart: false
    },
];
let cartList=[]; //array to store cart lists

var i;
var detail =document.getElementsByClassName('card-item');
var detailsImg = document.getElementById('details-img')
var detailTitle = document.getElementById('detail-title')
var detailPrice = document.getElementById('detail-price')
var youSave = document.getElementById('you-save');
var detailsPage = document.getElementById('details-page');
var back = document.getElementById('buy')
back.addEventListener('click',refreshPage)
var addToCarts = document.querySelectorAll('#add-to-cart')
var cart = document.getElementById('cart');

// click event to display cart page
cart.addEventListener('click',displayCart)

var carts = document.getElementById('carts');

//click events to add items to cart from details page
carts.addEventListener('click',()=>addToCart(getId))

var home = document.getElementById('logo');

//click event to hide cart page and return to home page
home.addEventListener('click',hideCart);

//events on dynamically created element to remove items from list
document.addEventListener('click',function (e){
    if(e.target.id=='remove'){
        var itemId = e.target.parentNode.id
        removeFromCart(itemId)
    }
})


//click event to display details page
for(i=0;i<data.length;i++){
    detail[i].addEventListener('click',handleDetail)
}

var getId;

//click events to add items to cart from home page cart icon
addToCarts.forEach(val=>val.addEventListener('click',()=>addToCart(val.parentNode.id)));

// details function
function handleDetail(e){
    detailsPage.style.display = 'block'
    getId= this.parentNode.id;
    detailsImg.src= data[getId].img;
    detailTitle.innerHTML=   data[getId].name;
    detailPrice.innerHTML= 'Price : $ ' +data[getId].price;
    youSave.innerHTML= 'You save : ($ ' + data[getId].save + ')';
}

// add item to the cart
function addToCart(id) {
    if(!data[id].itemInCart){
        cartList= [...cartList,data[id]];
        addItem()
        
        alert('item added to your cart')

    }
    else{
        alert('your item is already there')
    }
    data[id].itemInCart= true
}

//back to main page
function refreshPage(){
    detailsPage.style.display = 'none'
}

// hide your cart page
function hideCart(){
    document.getElementById('main').style.display= "block";
    document.getElementById('cart-container').style.display= "none";
}

//display your cart page
function displayCart(){
    document.getElementById('main').style.display= "none";
    document.getElementById('details-page').style.display= "none";
    document.getElementById('cart-container').style.display= "block";
    if(cartList.length==0){
        document.getElementById('cart-with-items').style.display= "none";
        document.getElementById('empty-cart').style.display= "block";
    }
    else{
        document.getElementById('empty-cart').style.display= "none";
        document.getElementById('cart-with-items').style.display= "block";
        
    }
}

var totalAmount;
var totalItems;
var totalSaving;

//add item to the cart
function addItem(){
    totalAmount=0;
    totalItems = 0;
    totalSaving=0
    var clrNode=document.getElementById('item-body');
        clrNode.innerHTML= '';
        console.log(clrNode.childNodes)
        cartList.map((cart)=>
        {
            var cartCont = document.getElementById('item-body');
            totalAmount = totalAmount + cart.price;
            totalSaving = totalSaving + cart.save;
            totalItems = totalItems + 1;

            var tempCart = document.createElement('div')
            tempCart.setAttribute('class','cart-list');
            tempCart.setAttribute('id',cart.id);

            var listImg = document.createElement('img');
            listImg.setAttribute('id','list-img');
            listImg.src = cart.img
            tempCart.appendChild(listImg)

            var listName = document.createElement('h3');
            listName.setAttribute('class','list-name');
            listName.innerHTML = cart.name;
            tempCart.appendChild(listName)

            var listPay = document.createElement('h3');
            listPay.setAttribute('class','pay');
            listPay.innerHTML = cart.price;
            tempCart.appendChild(listPay);

            var listQuantity = document.createElement('h3');
            listQuantity.setAttribute('class','quantity');
            listQuantity.innerHTML = '1';
            tempCart.appendChild(listQuantity);

            var listTrash = document.createElement('i');
            listTrash.setAttribute('class','fa fa-trash ');
            listTrash.setAttribute('id','remove');
            tempCart.appendChild(listTrash);

            cartCont.appendChild(tempCart)
            
        })
        document.getElementById('total-amount').innerHTML = 'Total Amount : $ ' + totalAmount;
        document.getElementById('total-items').innerHTML = 'Total Items : ' + totalItems;
        document.getElementById('you-saved').innerHTML = 'You Saved : $ ' + totalSaving;
        document.getElementById('total').style.display= "block";
}

//remove item from the cart
function removeFromCart(itemId){
    data[itemId].itemInCart = false
    cartList = cartList.filter((list)=>list.id!=itemId);
    addItem()
    if(cartList.length==0){
        document.getElementById('cart-with-items').style.display= "none";
        document.getElementById('empty-cart').style.display= "block";
    }
}