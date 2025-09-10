<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="shortcut icon" href="assets/img/favicon.ico">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;1,700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="assets/css/style.min.css">
        <script type="module">
            if (!("anchorName" in document.documentElement.style)) {
            import("https://unpkg.com/@oddbird/css-anchor-positioning");
            }
        </script>
        <title>Full Service Digital Agency | Cambridgeshire & Norfolk | Netmatters</title>
    </head>
    <body class="">
        <?php include __DIR__ . '/consentbar.php';?>
        <div id="site-wrapper">
            <header id="site-header">
                <div id="header-top">
                    <div class="container">
                        <a href="#"><h1><img id="header-logo" src="assets/img/nm-logo-dark.png" alt="Netmatters Logo"></h1></a>
                        <i id="header-icon" class="fa-solid fa-phone-volume"></i>
                        <div id="header-support">
                            <a href="#">
                                <i class="fa-solid fa-mouse"></i>
                                <span>Support</span>
                            </a>
                        </div>
                        <div id="header-contact">
                            <a href="contactus.php">
                                <i class="fa-solid fa-paper-plane"></i>
                                <span>Contact</span>
                            </a>
                        </div>
                        <button id="header-menu" type="button" class="menu-spin">
                            <span id="menu-top"></span>
                            <span id="menu-middle"></span>
                            <span id="menu-bottom"></span>
                        </button>
                        <form id="header-form" action="#" method="post">
                            <input type="search" id="search" name="search" placeholder="Search..." >
                            <button class="" type="submit">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </form>
                    </div>
                </div>
                <?php include __DIR__ . '/navbar.php';?>
            </header>