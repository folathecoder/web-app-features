'use strict';

//Grab reference to the tab and panels
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');

//Add a click event listener to the whole tab and listen for "li" tags

tabs.addEventListener('click', function (e) {
    //Search For an LI tag: Is it an Li?
    if (e.target.tagName == 'LI') {

        // If a tab is clicked, make it the target panel
        const targetPanel = document.querySelector(e.target.dataset.target);

        // Insert active into the clicked tab and remove it from others
        panels.forEach(function (panel) {
            if (panel == targetPanel) {
                panel.classList.add('active');
            }
            else {
                panel.classList.remove('active');
            }
        })

        tabs.forEach(function (tab) {
            if (tab == targetPanel) {
                tab.classList.add('active');
            }
            else {
                tab.classList.remove('active');
            }
        })
    }

})
