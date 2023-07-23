function onOpen(e) {
  DocumentApp.getUi().createAddonMenu()
    .addItem('Start', 'showSidebar')
    .addToUi();
}

function onInstall(e) {
  onOpen(e);
}

function showSidebar() {
  const ui = HtmlService.createHtmlOutputFromFile('sidebar')
    .setTitle('Translate');
  DocumentApp.getUi().showSidebar(ui);
}

function getPreferences() {
  const userProperties = PropertiesService.getUserProperties();
  return {
    paid: userProperties.getProperty('paid'),
  };
}

function insertText(newText) {
  const tokens = newText.split('.');
  for (const token of tokens) {
    const doc = DocumentApp.getActiveDocument();
    const cursor = doc.getCursor();
    cursor.insertText(token);
    doc.saveAndClose();
  }
}
