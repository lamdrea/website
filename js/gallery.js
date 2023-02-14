function insertGalleryItems(galleryItems) {
    for (var title in galleryItems) {
        const div = document.createElement("div")
        div.setAttribute("class", "gallery-item")
        div.innerHTML = `
            <a href="work/${galleryItems[title][2]}">
                <img class="gallery-thumbnail" src=${galleryItems[title][1]}>
            </a>
            <h3 style="width:100%">
                ${title}
            </h3>
            <h4 style="width:100%">${galleryItems[title][0]}</h4>
        `;

        document.getElementsByClassName("content")[0].appendChild(div);
    }
}