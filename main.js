// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const emptyHeartIcon = document.getElementsByClassName('like-glyph')

for (let icons of emptyHeartIcon) {
 
icons.addEventListener('click', function() {

mimicServerCall()
  .then(function() {
      if(icons.classList.contains('like-glyph')) {
      icons.classList.replace('like-glyph','activated-heart',);
      icons.innerText = FULL_HEART;
      } else {
      icons.classList.replace('activated-heart', 'like-glyph')
      icons.innerText = EMPTY_HEART;
  }
})
  .catch(function () {
      const errorMessage = document.getElementById('modal')
      errorMessage.classList.remove('hidden')
    
      setTimeout(function() {
        errorMessage.classList.add('hidden')
        } , 3000)
      }
    )
  }
  )}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
