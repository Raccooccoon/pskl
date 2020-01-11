const settingsTabs = Array.from(document.querySelectorAll('.settings_tab'));
const settingsContents = Array.from(document.querySelectorAll('.settings_content'));
const settingsTabsContainer = document.querySelector('.right_section-settings_tabs');
const settingsContentContainer = document.querySelector('.right_section-settings_content');
const formatTabs = Array.from(document.querySelectorAll('.format_tab'));
const formatTabsContents = Array.from(document.querySelectorAll('.format_tab-content'));

settingsTabs.forEach((el, i) => el.addEventListener('click', () => {
  if (el.classList.contains('active_tab') === false) {
    for (let j = 0; j < settingsTabs.length; j += 1) {
      if (settingsTabs[j].classList.contains('active_tab')) {
        settingsTabs[j].classList.remove('active_tab');
        settingsContents[j].classList.remove('visible_content');
      }
    }
    el.classList.add('active_tab');
    settingsContents[i].classList.add('visible_content');
  } else if (el.classList.contains('active_tab') === true) {
    el.classList.remove('active_tab');
    settingsContents[i].classList.remove('visible_content');
  }
  if (settingsTabs.some((elem) => elem.classList.contains('active_tab'))) {
    settingsTabsContainer.classList.add('expanded');
    settingsContentContainer.classList.add('visible');
  } else {
    settingsTabsContainer.classList.remove('expanded');
    settingsContentContainer.classList.remove('visible');
  }
}));

formatTabs.forEach((el, i) => el.addEventListener('click', () => {
  if (el.classList.contains('format_tab-active') === false) {
    for (let j = 0; j < formatTabs.length; j += 1) {
      if (formatTabs[j].classList.contains('format_tab-active')) {
        formatTabs[j].classList.remove('format_tab-active');
        formatTabsContents[j].classList.remove('visible_options');
      }
    }
    el.classList.add('format_tab-active');
    formatTabsContents[i].classList.add('visible_options');
  }
}));
