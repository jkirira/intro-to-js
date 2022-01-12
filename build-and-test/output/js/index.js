//built in JavaScript events
const btn = document.querySelector('button');
const btn2 = document.querySelector('button2');
const btn3 = document.querySelector('button3');

btn.addEventListener('blur', () => {
  document.body.style.color = 'red';
});

btn2.addEventListener('click', function(){
    document.body.style.color = 'blue';
});


//Custom Events
const sayCheese = new Event('cheese')
document.addEventListener('cheese', function(){
    console.log("Cheese");
})
document.dispatchEvent(sayCheese);


const punch = new CustomEvent('punch', {
    detail: {
        message: "Ow"
    }
})

document.addEventListener('punch', function(e){
    console.log(e.detail.message);
})

document.dispatchEvent(punch);



//Dynamic Typing
var x;

x = 'a';
console.log(x)
//console.log(typeof(x))

x = 5;
console.log(x)
//console.log(typeof(x))

x = {
	name: "x",
    type: "object"
}
console.log(x)
//console.log(typeof(x))



//Promises
var timedpromise = new Promise(function(resolve, reject){
    setTimeout(() => { console.log("After three seconds"); }, 3000);
    resolve();
})

timedpromise.then(() => {
    console.log("Done")
})
console.log("After promise")
console.log("also after promise")

var promise = new Promise((resolve, reject) => {
    x = 1;

    if( x==5 ){
        resolve(value)
    } else {
        reject(value)
    }
})

promise.then((value) =>{
    console.log(value);
    value+=5;
}).then((value) => {
    console.log(value);
}).catch((error) =>{
    console.log(error)
})



let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;

    if (x == 5) {
        myResolve("OK");
    } else {
        myReject("Error");
    }
    });

myPromise.then(
    //function(result) { console.log(result); },
    undefined,
    function(err) { console.log(err); }
);



/*
btn.removeEventListener('click', changeBackground);



myElement.addEventListener('click', functionA);
myElement.addEventListener('click', functionB);



btn.onclick = () => {
    document.body.style.backgroundColor = rndCol;
}



function bgChange(e) {
    e.target.style.backgroundColor = rndCol;
    console.log(e);
}



String(123)      // => "123"
Number("321")    // => 321
Boolean(0)       // => false




"" + 123          // => "123" 
if (1)            // => if (true)


'3' == 3,           //true
Number(3) == 3      //true.


'3' === 3           //false
Number(3) === 3     //false.
*/