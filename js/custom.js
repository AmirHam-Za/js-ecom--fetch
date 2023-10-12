

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>  JQUERY  \/
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

$(document).ready(function () {
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
      
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    $('#sidebarCollapse1').on('click', function () {
        $('#sidebar').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});



//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>  VANILLA JS  \/
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// document.addEventListener("DOMContentLoaded", function () {
//     var sidebar = document.getElementById("sidebar");
//     var dismissBtn = document.getElementById("dismiss");
//     var overlay = document.querySelector(".overlay");
//     var sidebarCollapse = document.getElementById("sidebarCollapse");

//     var sidebarCollapse = document.getElementById("sidebarCollapse1");

//     // Initialize mCustomScrollbar
//     function initializeScrollbar() {
//         // Implementation of mCustomScrollbar, if required.
//         // This part is not shown in your original code.
//     }

//     initializeScrollbar();

//     function hideSidebar() {
//         sidebar.classList.remove("active");
//         overlay.classList.remove("active");
//     }

//     function showSidebar() {
//         sidebar.classList.add("active");
//         overlay.classList.add("active");
//         var activeCollapses = document.querySelectorAll(".collapse.in");
//         activeCollapses.forEach(function (collapse) {
//             collapse.classList.remove("in");
//         });

//         var expandedLinks = document.querySelectorAll("a[aria-expanded=true]");
//         expandedLinks.forEach(function (link) {
//             link.setAttribute("aria-expanded", "false");
//         });
//     }
    
//     // function showSidebar1() {
//     //     sidebar.classList.add("active");
//     //     overlay.classList.add("active");
//     //     var activeCollapses = document.querySelectorAll(".collapse.in");
//     //     activeCollapses.forEach(function (collapse) {
//     //         collapse.classList.remove("in");
//     //     });

//     //     var expandedLinks = document.querySelectorAll("a[aria-expanded=true]");
//     //     expandedLinks.forEach(function (link) {
//     //         link.setAttribute("aria-expanded", "false");
//     //     });
//     // }

//     // Attach event listeners
//     dismissBtn.addEventListener("click", hideSidebar);
//     overlay.addEventListener("click", hideSidebar);
//     // sidebarCollapse.addEventListener("click", showSidebar);

//     sidebarCollapse1.addEventListener("click", showSidebar);
// });






let mobile_icon = document.getElementById("mobile_icon"); 
let main_menu = document.getElementById("main_menu");

mobile_icon.addEventListener("click", () => {
    main_menu.classList.toggle('hidden');
})