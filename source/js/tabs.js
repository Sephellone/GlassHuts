const initTabs = () => {
  // find all tab containers on page
  const tabsElements = document.querySelectorAll('.tabs');

  // act only if tab containers exist
  if (tabsElements && tabsElements.length) {
    tabsElements.forEach((tabs) => {
      // finding buttons and tab panels in each tab container
      const tabButtons = tabs.querySelectorAll('[role="tab"]');
      const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');
      // act only if there are tab buttons and tab panels

      if (tabPanels && tabPanels.length && tabButtons && tabButtons.length) {
        // function for toggling tabs
        const onTabClick = (event) => {
          // hiding every panel and
          tabPanels.forEach((panel) => {
            panel.hidden = true;
          });
          tabButtons.forEach(tab => {
            tab.setAttribute('aria-selected', false);
            tab.classList.remove('tabs__button--active');
          });
          // showing the current tab panel and giving active state to current button
          event.currentTarget.setAttribute('aria-selected', true);
          event.currentTarget.classList.add('tabs__button--active');
          const id = event.currentTarget.id;
          const activeTabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
          activeTabPanel.hidden = false;
        };

        // adding eventListener to each tab button
        tabButtons.forEach(button => button.addEventListener('click', onTabClick));
      };
    });
  }
};


export {initTabs};
