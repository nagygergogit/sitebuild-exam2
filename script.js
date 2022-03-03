function movieView(movie) {
  return `
        <div>
            próba
        </div>
    `;
}

function loadEvent() {
  const mainElement = document.querySelector("main");
  for (let i = 0; i < data.length; i++) {
    const movie = data[i];
    mainElement.insertAdjacentHTML("beforeend", movieView(movie));
  }
}

window.addEventListener("load", loadEvent);
