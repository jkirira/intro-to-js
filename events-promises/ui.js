rejectPromise = false; 
alertMessage = ""

const btn = document.getElementById('green');
btn.addEventListener('click', () => {
    alertMessage = "Looks like you like green. Page is going to change to green"
    alert(alertMessage)
    rejectPromise = true
})

const btn3 = document.getElementById('not-green');
btn3.addEventListener('click', () => {
    alertMessage = "Page is not going to change to green"
    alert(alertMessage)
    rejectPromise = false
})

var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if( !rejectPromise ){
            resolve("Resolved. Green theme. :)")
        } else {
            reject("Rejected. I guess you don't like green. ;)")
        }
    }, 30000);
    
})

promise.then((message) =>{
    document.body.style.backgroundColor = "lightgreen";
    alert(message);
}).catch((error) =>{
    alert(error);
}).then(() => {
    document.getElementById('textInfo').textContent = "Too Late. You have to refresh the page to restart the counter.";
    btn.setAttribute('Disabled', 'true');
    btn3.setAttribute('Disabled', 'true');
});



//darkmode
const btn2 = document.getElementById('darkMode');
btn2.addEventListener('click', function(){
    text = document.getElementById('toggle-dark')
    if (text.getAttribute('class') === "dark")
        text.setAttribute('class', 'light');
    else {
        text.setAttribute('class', 'dark');
    }
});

const checkbox = document.getElementById('disableDark')

checkbox.addEventListener('change', (e) => {
  if (checkbox.checked) {
    alert('Disabled Dark Mode');
    btn2.setAttribute('Disabled', 'true');
  } else {
    alert('Dark Mode Available');
    btn2.removeAttribute('Disabled');
  }
})


keysPressed = 0;

letterCount = document.getElementById('changeText')
letterCount.addEventListener('focus', () => {
    document.getElementById('typeMode').textContent = "Typing..."
})
letterCount.addEventListener('blur', () => {
    document.getElementById('typeMode').textContent = "Waiting..."
})
letterCount.addEventListener('keypress', function() {
    keysPressed+=1
    document.getElementById('countOutput').textContent = "It Works!!! Keys Pressed: " + keysPressed
})

//Custom Events
const easterEgg = new CustomEvent('displayEgg', {
    detail: {
        message: "<h2>This is a custom event.</h2><br>You've been on this page too long.<br>There's nothing to see here.<br>"
    }
})

targetdiv = document.getElementById('customEvent');
targetdiv.addEventListener('displayEgg', function(e){
    console.log("Custom Event")
    targetdiv.innerHTML = e.detail.message;
})

setTimeout(() => {
    targetdiv.dispatchEvent(easterEgg);
}, 60000);