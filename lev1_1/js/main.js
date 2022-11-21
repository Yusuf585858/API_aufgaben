fetch("https://picsum.photos/v2/list")
    // then bekommt eine callback funktion übergeben then(function)    
    .then((response) => response.json())
    // gibt wieder ein promise zurück
    .then((data) => {
        console.log(data);

        data.forEach(person => {

            const name = person.author;
            const bild = person.download_url;

            const figure = document.createElement("figure");
            document.body.appendChild(figure);

            const imgTag = document.createElement("img");
            imgTag.src = bild;
            figure.appendChild(imgTag);

            const caption = document.createElement("figcaption");
            caption.innerText = name;
            figure.appendChild(caption);


        });
    });