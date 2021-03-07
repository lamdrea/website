function insertHead() {

}

/**
 * Creates standard header and arg page used to flag active topnav element for bolding
 * @param {String} page Name of page that header is being inserted into
 */
function insertHeader(page = "") {
    const pageIndex = {
        "work": 0,
        "about": 1,
        "contact": 2,
        "default": null
        // "about": 0,
        // "contact": 1,
        // "default": null
    }[page.toLowerCase()]

    const header = `
        <header>
        <div class="topnavWrapper" id="topNavID">
     
            <div class="title">
                <a href="/index.html">
                    <p>Andrea Lam</p>
                </a>
            </div>
            <div class="topnav">
                <a href="/work.html">Work</a>
                <a href="/about.html">About</a>
                <a href="/contact.html">Contact</a>
            </div>
        
            <div class="social">
                <a href="https://www.linkedin.com/in/andrearlam/" target="_blank"><img
                    src="/img/icons/social_linkedin.png" width="30" height="30"></a>
                <a href="https://www.instagram.com/1littlelam.jpg" target="_blank"><img src="/img/icons/social_ig.png"
                    width="30" height="30"></a>
                <a href="javascript:void(0);" class="icon" onclick="headerStack()">
                    <i class="fa fa-bars"></i></a>
            </div>
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

// THIS IS WHAT CLICKING THE BURGER WILL DO - OPENS A MENU
// Toggles between adding/removing the "responsive" class to topnav when user clicks the icon
function headerStack() {
    var x = document.getElementById("topnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}