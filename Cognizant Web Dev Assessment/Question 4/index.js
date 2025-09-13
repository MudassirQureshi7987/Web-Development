function switchTab(tabId) {
  // Hide all panels
  var tabPanels = document.querySelectorAll('.tab-panel');
  tabPanels.forEach(function(panel) {
    panel.classList.remove('active');
  });

  // Remove active class from all buttons
  var tabButtons = document.querySelectorAll('.tab-btn');
  tabButtons.forEach(function(button) {
    button.classList.remove('active-tab');
  });

  // Show selected panel
  var activeTabPanel = document.getElementById(tabId);
  activeTabPanel.classList.add('active');

  // Highlight selected button
  var activeTabButton = document.querySelector(`[data-tab="${tabId}"]`);
  activeTabButton.classList.add('active-tab');
}
