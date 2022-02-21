const scrollContainer = document.querySelector("#page");
var bar = new ProgressBar.Line('#scrollbar-container', {
    duration: 0
});
var bardom = document.getElementsByTagName("path")[0]
var getintouch = document.querySelector(".getintouch")
var technologypage = document.querySelector(".technology-container")
var rainbow = new Rainbow();



scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollpos = scrollContainer.scrollLeft + evt.deltaY;
    scrollContainer.scrollLeft = scrollpos;
    scrollpercent = scrollContainer.scrollLeft / (scrollContainer.offsetWidth * 2) // The Actual Scrollprogress in percent
    bar.set(scrollpercent);
    bardom.setAttribute('stroke', '#' + rainbow.colourAt(scrollpercent*100));
    getintouch.style = "background-color: #" + rainbow.colourAt((scrollpercent/7+0.75)*100);
    console.log(scrollpercent)
    if (scrollpercent > 0.63 ) {
        technologypage.style.position = 'fixed';
    } else {
        technologypage.style.position = '';
    }
});


var options = {
  strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
  typeSpeed: 40
};
