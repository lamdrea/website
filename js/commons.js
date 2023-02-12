function insertHead() {
    const header = `
    
        <title>Andrea Lam | Biomedical Communicator & Digital Artist</title>
        <link type="text/css" rel="stylesheet" href="/css/main.css">
        <link rel="stylesheet" href="https://use.typekit.net/hyu2voi.css">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link
            href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200;0,300;0,400;0,500;0,700;1,200;1,300;1,400;1,500&display=swap"
            rel="stylesheet">
        <link
            href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&display=swap"
            rel="stylesheet">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="shortcut icon" type="image/x-icon" href="/ladybug.ico">

        <svg class="defs-only">
            <filter id="monochrome" color-interpolation-filters="sRGB"
                    x="0" y="0" height="100%" width="100%">
            <feColorMatrix type="matrix"
                values="0.95 0 0 0 .1 
                        0.85 0 0 0 0.2  
                        0.90 0 0 0 1
                        0    0 0 1 0" />
            </filter>
        </svg>
    `

    document.write(header);
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
                <a href="https://www.github.com/lamdrea" target="_blank"><img src="/img/icons/social_github.png"
                    width="30" height="30"></a>
                <a href="javascript:void(0);" onclick="openNav()">
                    <i class="fa fa-bars"></i></a>
            </div>
        </div>

        <div id="overlayNav" class="overlay">
            <!-- Button to close the overlay navigation -->
            <a href="javascript:void(0)" class="closebtn" style="text-decoration:none;" onclick="closeNav()">&times;</a>

            <!-- Overlay content -->
            <div class="overlay-content">
                <a href="/work.html">Work</a><br>
                <a href="/about.html">About</a><br>
                <a href="/contact.html">Contact</a><br><br>

                <a href="https://www.linkedin.com/in/andrearlam/" target="_blank"><img
                    src="/img/icons/social_linkedin.png" width="30" height="30"></a>
                <a href="https://www.instagram.com/1littlelam.jpg" target="_blank"><img src="/img/icons/social_ig.png"
                    width="30" height="30"></a>
                <a href="https://www.github.com/lamdrea" target="_blank"><img src="/img/icons/social_github.png"
                    width="30" height="30"></a>
            </div>

         </div>
         </header>
    `;

    document.write(header);

    if (pageIndex !== undefined) {
        document.getElementsByClassName("topnav")[0].children[pageIndex].setAttribute("style", 
            "color:black;text-decoration:none;cursor:default;pointer-events:none;");
    }
}

function insertFooter() {
    const footer = ` 
        <footer>
            <div class="copyright">
                <p>© Andrea Lam 2023</p>
            </div>
        </footer>  
        
    `

    document.write(footer);
}

// Open and close overlay navigation
function openNav(){
    document.getElementById("overlayNav").style.display="block";
}
    

function closeNav(){
    document.getElementById("overlayNav").style.display="none";
}

// // THIS IS WHAT CLICKING THE BURGER WILL DO - OPENS A MENU
// // Toggles between adding/removing the "responsive" class to topnav when user clicks the icon
// function headerStack() {
//     var x = document.getElementById("topnav");
//     if (x.className === "topnav") {
//         x.className += " responsive";
//     } else {
//         x.className = "topnav";
//     }
// }