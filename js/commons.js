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
                <!--<a href="https://www.linkedin.com/in/andrearlam/"><img src="img/icons/social_linkedin.png" width="30" height="30"></a>
                <a href="https://www.instagram.com/1littlelam.jpg"><img src="img/icons/social_ig.png" width="30" height="30"></a>
            -->   
            </div>
            <div class="social">
                <a href="https://www.linkedin.com/in/andrearlam/"><img src="img/icons/social_linkedin.png" width="30" height="30"></a>
                <a href="https://www.instagram.com/1littlelam.jpg"><img src="img/icons/social_ig.png" width="30" height="30"></a>           
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
                <p>© Andrea Lam 2021</p>
            </div>
        </footer>  
    `
    
    document.write(footer);
}