/*
  1. Define Variables
  2. Calculate the document height and set the offset to a quarter of that value
  3. Add event listener for scroll and click
*/
window.addEventListener('load', function (event) {
  let btt = document.getElementById('back-to-top');
  let body = document.body;
  let docElem = document.documentElement;
  let docHeight;
  let offSet = 100;

  // Calculate the document height
  docHeight = Math.max(body.scrollHeight, body.offsetHeight,
    docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight);

  if (docHeight != 'undefined') {
    offSet = docHeight / 4;
  }

  // Add scroll event listener
  window.addEventListener("scroll", function (event) {
    scrollPos = body.scrollTop || docElem.scrollTop;

    btt.className = (scrollPos > offSet) ? "visible" : "";
  });

  // Add click event listener
  btt.addEventListener("click", function (event) {
    event.preventDefault();
    body.scrollTop = 0;
    docElem.scrollTop = 0;
  })
})
