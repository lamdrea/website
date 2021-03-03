function openVimeo() {
    const vimeoWrapper = document.getElementsByClassName("vimeo-wrapper")[0]
    vimeoWrapper.innerHTML = `
    <div>
        <iframe id="vimeo" src="https://player.vimeo.com/video/282322395?
        muted=1&autoplay=1&loop=1&background=1"
        frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div><script src="https://player.vimeo.com/api/player.js"></script>

    <div id="vimeo" class="close" onclick="closeVimeo();"></a>
    `
    vimeoWrapper.style.opacity = 1;
    vimeoWrapper.style.pointerEvents = "auto";
}

function closeVimeo() {
    const vimeoWrapper = document.getElementsByClassName("vimeo-wrapper")[0]
    vimeoWrapper.style.opacity = 0;
    vimeoWrapper.style.pointerEvents = "none";
    document.getElementById("vimeo").remove();
}