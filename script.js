function tabSwitcher(btn, btnWrapper, tabContent, hideClass, startTab) {
    window.addEventListener('DOMContentLoaded', function () {
        'use strict';
        let tabBtn = document.getElementsByClassName(btn);
        let tabs = document.querySelector(btnWrapper);
        let contentBox = document.querySelectorAll(tabContent);

        function hideContent(a) {
            for (let i = a; i < contentBox.length; i++) {
                contentBox[i].classList.add(hideClass);
            }
        }

        function showContent(b) {
            if (contentBox[b].classList.contains(hideClass)) {
                contentBox[b].classList.remove(hideClass);
            }
        }

        function start(startTab) {
            hideContent(0); // 0 - hide from 0 to length
            showContent(startTab);
        }

        start(startTab);

        tabs.addEventListener('click', function (event) {
            if (event.target && event.target.classList.contains(btn)) {
                for (let i = 0; i < tabBtn.length; i++) {
                    if (event.target == tabBtn[i]) {
                        hideContent(0); // 0 - hide from 0 to length
                        showContent(i);
                        break;
                    }
                }
            }
        });
    });
}
tabSwitcher('tab', '.tabs-wrapper', '.tab-content', 'hide', 2);
// btn - class for your tab buttons
// btnWrapper - selector for your tab buttons container
// tabContent - selector for your content boxes
// hide - class for hiding (with display:none)
// startTab - Number of the tab (start 0) witch will be the start tab