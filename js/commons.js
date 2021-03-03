/**
 * Creates standard header and arg page used to flag active topnav element for bolding
 * @param {String} page Name of page that header is being inserted into
 */
function insertHeader(page = "") {
    const pageIndex = {
        // "work": 0,  --commented out wip
        // "about": 1,
        // "contact": 2,
        // "default": null
        "about": 0,
        "contact": 1,
        "default": null
    }[page.toLowerCase()]

    const header = `
        <header>
            <div class="title">
                <a href="index.html">
                    <p>Andrea Lam</p>
                </a>
            </div>
            <div class="topnav">
               <!-- <a href="work.html">Work</a>  -- commented out wip -->
                <a href="about.html">About</a>
                <a href="contact.html">Contact</a>
            </div>
        </header>
    `;

    document.write(header);
    if (pageIndex !== undefined) {
        document.getElementsByClassName("topnav")[0].children[pageIndex]
            .setAttribute("class", "active");
    }
}

function insertFooter() {
    const footer = ` 
        <footer>
            <div class="copyright">
                <p>© Andrea Lam 2020</p>
            </div>
            <div class="social">
                <!-- this will be image, not p -->
                <p>linkedin</p>
                <p>instagram</p>
            </div>
        </footer>  
    `
    
    document.write(footer);
}