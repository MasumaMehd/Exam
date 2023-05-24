// Fade Out effect

$(document).on("scroll", function () {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var tags = $(".tag");

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];

    if ($(tag).position().top < pageBottom) {
      $(tag).addClass("visible");
    } else {
      $(tag).removeClass("visible");
    }
  }
});

// For cursor
// Get the cursor element
const cursor = document.querySelector('.cursor');

// Function to update the position of the cursor
function updateCursorPosition(event) {
    const x = event.clientX;
    const y = event.clientY;
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
}

// Add a mousemove event listener to the window
window.addEventListener('mousemove', updateCursorPosition);
