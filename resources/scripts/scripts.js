





// Shopping Carts //

var shoppingCart=[
{name:"loaf of bread",type:"food",quantity:1,price:.85},
{name:"multipack beans",type:"food",quantity:1,price:1},
{name:"mushrooms",type:"food",quantity:10,price:.1},
{name:"can of beer",type:"alcohol",quantity:4,price:1.1},
{name:"prosecco",type:"alcohol",quantity:1,price:8.99},
{name:"steak",type:"food",quantity:2,price:3.99},
{name:"blue cheese",type:"food",quantity:1,price:2.99},
{name:"candles",type:"home",quantity:3,price:1.99},
{name:"cheesecake",type:"food",quantity:1,price:4.99},
{name:"onions",type:"food",quantity:3,price:.4}];



function getTotalPrice1(shoppingCart, discountAmount, type) {
    
    var totalPrice = 0;
    
    for (var item of shoppingCart){
        
        if (item.type === type || type === 'all'){
            var discountedPrice = item.price - ((item.price * discountAmount) / 100);  
            totalPrice += discountedPrice * item.quantity
        } else {
            totalPrice += item.price * item.quantity;
        }
    }    
        
return totalPrice;
    };

console.log(getTotalPrice1(shoppingCart, 20, 'all'));         



function lowHighPrice(cart, lowPrice, highPrice, quantity){
    
    var arrItems = [];
    var totalPrice = 0;

    for  (var item of cart){
        quantity ? price = item.price * item.quantity : price = item.price

        if(price >= lowPrice && price <= highPrice){
            arrItems.push(item);
        }
    }   
    return arrItems;
}

console.log(lowHighPrice(shoppingCart, 2, 5, true));
    
    

    var numberArray = [3,6,1,68,23,15,3,9,56,10];
    
    function mean(numberArray){
    var totalSum = 0, i;
    
    for (i - 0; 1 < numberArray.length; i += 1) {
        totalSum += numberArray[i];
    }
    return totalSum / numberArray.length;
    }

    




    console.log(mean(numberArray)); 

    function median(numberArray) {
        var sortedNumbers = numberArray.sort(function(a, b){return a - b});

        var value = sortedNumbers[sortedNumbers.length / 2 | 0];
        return value;

    }
    console.log(median(numberArray));


    function mode(numberArray){

    }

const caluclateMode = (arr) => {
    let nums = [];
    let count = [];

    for (number1 in arr) {
        let current_num = arr[number1]
        let current_count = 0

    }
}

function getNumberTupe(numberArray, type) {
    switch (type) {
        case 'mode' :
        return mode(numberArray);
        break;

        case 'median' :
        return median(numberArray);
        break;

        case 'mean' : 
        return mean(numberArray);
        break;

        default:
            return numberArray;

        }
}