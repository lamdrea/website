function insertGalleryItems(galleryItems) {
    for (var title in galleryItems) {
        const div = document.createElement("div")
        div.setAttribute("class", "gallery-item")
        div.innerHTML = `
            <a href="">
            <!-- <a href="pages/${galleryItems[title]}.html"> -->
                <img class="gallery-thumbnail" src=${galleryItems[title]}>
            </a>
            <p class="gallery-title">${title}</p>
        `;

        document.getElementsByClassName("content")[0].appendChild(div);
    }
}