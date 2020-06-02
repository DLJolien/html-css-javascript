const myRectangle = document.querySelector('#rectangle');
let visibilty = document.getElementById('visibility');

const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0
  };

function handleIntersect(entry) {
    if (entry.intersectionRatio > 0) {
      console.log('Element is Intersecting');
      visibilty.innerHTML = "visible";
      visibilty.style.backgroundColor ="green";
    } else {
      console.log('Element is NOT Intersecting');
      visibilty.innerHTML = "invisible";
      visibilty.style.backgroundColor ="red";
    }
  };

  observer = new IntersectionObserver((entries) => entries
    .forEach(entry => (handleIntersect(entry))), observerOptions);

 
  console.log(visibilty);

  observer.observe(myRectangle)