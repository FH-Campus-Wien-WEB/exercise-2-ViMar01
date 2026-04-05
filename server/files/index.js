window.onload = function () {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    const bodyElement = document.querySelector("body");
    const mainElement = document.querySelector("main");
    if (xhr.status == 200) {
      const movies = JSON.parse(xhr.responseText);

      function makeList(title, array, div) {
        const h3 = document.createElement("h3");
        h3.textContent = title;

        const ul = document.createElement("ul");
        ul.classList.add("unsortedList");
        array.forEach(element => {
          const liste = document.createElement("li");
          liste.classList.add("liste");
          liste.textContent = element;
          ul.append(liste);
        });
        div.append(h3, ul);
      }

      for (const movie of movies) {
        /* Task 1.3. Add your code from exercise 1 here 
           and include a non-functional 'Edit' button
           to pass this test */



        const article = document.createElement("article");
        article.classList.add("movie");
        article.id = movie.imdbID;

        const image = document.createElement("img");
        image.classList.add("poster");
        image.src = movie.Poster;

        //div damit bild und informationen nebeneinander sein können
        const informationen = document.createElement("div");
        informationen.classList.add("informations");

        const titleContainer = document.createElement("div");
        titleContainer.classList.add("titleContainer");
        
        const buttonEdit = document.createElement("button");
        buttonEdit.classList.add("buttonEdit");
        buttonEdit.textContent = "Edit";
        buttonEdit.onclick = function() {
        location.href = 'edit.html?imdbID=' + movie.imdbID
        }
        
        const title = document.createElement("h2");
        title.classList.add("movieTitel");
        title.textContent = movie.Title;

        titleContainer.append(title, buttonEdit);

        const plot = document.createElement("p");
        plot.classList.add("plot");
        plot.textContent = movie.Plot;

        //contains runtime and release
        const timeInfo = document.createElement("p");
        timeInfo.classList.add("timeInformation");

        //contains metascore and imdbRating
        const rating = document.createElement("p");
        rating.classList.add("rating");


        const released = document.createElement("span");
        released.classList.add("released");
        const date = new Date(movie.Released);
        const formattedDate = date.toLocaleDateString("de-AT");
        released.textContent = `Released on ${formattedDate}`;
        //released.textContent = `Released on ${movie.Released}`;

        //make time pretty
        const formattedRuntime = document.createElement("span");
        formattedRuntime.classList.add("runtime");
        const runtime = movie.Runtime;
        const hoursRuntime = Math.floor(runtime / 60);
        const minRuntime = runtime % 60;
        formattedRuntime.textContent = `Runtime: ${hoursRuntime}h ${minRuntime}min`;
        timeInfo.append(formattedRuntime, released);



        const metascore = document.createElement("span");
        metascore.textContent = `Metascore: ${movie.Metascore}%`;
        metascore.classList.add("metascore");
        const imdbRating = document.createElement("span");
        imdbRating.classList.add("imdbRating")
        imdbRating.textContent = `ImdbRating: ${movie.imdbRating}/10`;
        rating.append(metascore, imdbRating);

        //const genres = document.createElement("span");
        //genres.classList.add("genres");
        //genres.textContent = movie.Genres;    

        const genreContainer = document.createElement("div");
        genreContainer.classList.add("genreContainer");

        movie.Genres.forEach(genre => {
          const span = document.createElement("span");
          span.textContent = genre;
          span.classList.add("genre");
          genreContainer.append(span);
        });


        article.appendChild(image);
        informationen.append(titleContainer, timeInfo, genreContainer);
        //makeList("Genres: ", movie.Genres, informationen);
        informationen.append(plot, rating);
        makeList("Directors: ", movie.Directors, informationen);
        makeList("Writers: ", movie.Writers, informationen);
        makeList("Actors: ", movie.Actors, informationen);

        article.appendChild(informationen);

        mainElement.appendChild(article);
        
      }

    } else {
      bodyElement.append(
        "Daten konnten nicht geladen werden, Status " +
        xhr.status +
        " - " +
        xhr.statusText
      );
    }
  };
  xhr.open("GET", "/movies");
  xhr.send();
};
