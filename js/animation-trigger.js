const observer = new IntersectionObserver(entries => {
  // Loop over the entries
  console.log(entries)
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add the animation class
      for (i of document.getElementsByClassName(entry.target.className)) {
        i.classList.add("animate");
      }
    }
  });
});

observer.observe(document.querySelector(".col1"));
observer.observe(document.querySelector(".col2"));
observer.observe(document.querySelector(".col3"));
