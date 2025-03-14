document.addEventListener('DOMContentLoaded', function() {
    const defaultTab = document.querySelector('nav ul li a');
    if (defaultTab) {
        defaultTab.click();
    }
});

function openTab(event, tabName) {
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tabContent => {
        tabContent.classList.remove('active');
    });

    const targetTab = document.getElementById(tabName);
    if (targetTab) {
        targetTab.classList.add('active');
    }

    const tabs = document.querySelectorAll('nav ul li a');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    event.currentTarget.classList.add('active');
    event.preventDefault();
}
