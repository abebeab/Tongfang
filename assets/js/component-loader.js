/**
 * Tongfang BMS - Component Loader & Redirection Engine
 * This script handles the dynamic loading of the navbar/footer and 
 * ensures that all deep-linked paths redirect correctly.
 */

$(function () {
    "use strict";

    // 0. Normalize paths to prevent trailing slash errors
    if (window.location.pathname.endsWith('.html/')) {
        window.location.href = window.location.pathname.slice(0, -1);
    }

    // 1. Load Navbar
    $("#navbar-placeholder").load("/assets/shared/navbar.html", function() {
        highlightActiveLink();
        
        // --- DESKTOP REDIRECTION LOGIC (992px and up) ---
        if (window.innerWidth >= 992) {
            // Forces parent labels (About, Solutions, Products) to redirect when clicked
            $(".nav-item.dropdown > a.nav-link").on("click", function() {
                var url = $(this).attr("href");
                if (url && url !== "#") {
                    window.location.href = url;
                }
            });
        }

        // --- GLOBAL REDIRECTION FIX ---
        // Specifically targets links inside the Mega Menus (Solutions/Products)
        // This ensures the browser follows the URL even if Bootstrap tries to block it.
        $(document).on("click", ".dropdown-item, .list-group-item", function(e) {
            var url = $(this).attr("href");
            if (url && url !== "#" && url !== "javascript:;") {
                window.location.href = url;
            }
        });

        // --- MOBILE TOGGLE LOGIC ---
        $(".navbar-toggler").on("click", function() {
            $("#navbarCollapse").toggleClass("show");
        });

        if (window.innerWidth < 992) {
            // Mobile sub-menu accordion behavior
            $(".nav-item.dropdown > a.dropdown-toggle").on("click", function(e) {
                e.preventDefault(); 
                e.stopPropagation();
                $(this).parent().toggleClass("show");
                $(this).next().toggleClass("show");
            });
        }

        // --- STICKY NAVBAR LOGIC ---
        $(window).scroll(function () {
            if ($(this).scrollTop() > 300) {
                $('.sticky-top').addClass('shadow-sm').css('top', '0px');
            } else {
                $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
            }
        });
    });

    // 2. Load Footer
    $("#footer-placeholder").load("/assets/shared/footer.html");

    // 3. Spinner Logic
    $("#spinner-placeholder").load("/assets/shared/spinner.html", function() {
        setTimeout(function () { 
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show'); 
            }
        }, 300);
    });

    /**
     * Highlights the active navigation link and its parent dropdown
     * based on the current URL path.
     */
    function highlightActiveLink() {
        var path = window.location.pathname;
        
        // Default to home if at root
        if (path === "/" || path === "") {
            path = "/home/index.html";
        }

        $(".navbar-nav a").each(function () {
            var href = $(this).attr('href');
            if (href && href !== "#") {
                // If current path includes the href (e.g. /solutions/ in /solutions/by-industry/)
                if (path.indexOf(href) !== -1) {
                    $(this).addClass("active");
                    // Highlight the parent dropdown label
                    $(this).closest(".nav-item.dropdown").find(".nav-link.dropdown-toggle").addClass("active");
                }
            }
        });
    }
});