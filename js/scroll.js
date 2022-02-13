const scrollContainer = document.querySelector("#page");
var bar = new ProgressBar.Line('#scrollbar-container', {
    duration: 0
});
var bardom = document.getElementsByTagName("path")[0]
var rainbow = new Rainbow();



scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollpos = scrollContainer.scrollLeft + evt.deltaY;
    scrollContainer.scrollLeft = scrollpos;
    scrollpercent = scrollContainer.scrollLeft / (scrollContainer.offsetWidth * 2.5) // The Actual Scrollprogress in percent
    bar.set(scrollpercent);
    bardom.setAttribute('stroke', '#' + rainbow.colourAt(scrollpercent*100));
});