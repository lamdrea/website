function insertGalleryItems(galleryItems) {
    for (var title in galleryItems) {
        const div = document.createElement("div")
        div.setAttribute("class", "gallery-item")
        div.innerHTML = `
            <a href="">
            <a href="work/${galleryItems[title][1]}">
                <img class="gallery-thumbnail" src=${galleryItems[title][0]}>
            </a>
            <p class="gallery-title">${title}</p>
        `;

        document.getElementsByClassName("content")[0].appendChild(div);
    }
}