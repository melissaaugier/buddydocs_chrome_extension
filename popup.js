function listenClick() {
  console.log("yo");
  const button = document.getElementById('send-data');
  button.addEventListener('click', () => {
    chrome.tabs.executeScript({
      file: 'scripts/send-data.js'
    });
  })
}

listenClick();
