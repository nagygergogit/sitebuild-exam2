function movieView(movie, i) {
  return `
        <div class="card">
        <div class="number-container">${i + 1}</div>
            <h2>${movie.title}</h2>
            <p class="sub">${movie.sub}</p>
            <p class="text">${movie.text}</p>
        <button>Watch</button>    
        </div>
    `;
}

function loadEvent() {
  const mainElement = document.querySelector("main");
  for (let i = 0; i < data.length; i++) {
    const movie = data[i];
    mainElement.insertAdjacentHTML("beforeend", movieView(movie, i));
  }
}

window.addEventListener("load", loadEvent);
