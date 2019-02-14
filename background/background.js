
import browser from "webextension-polyfill";

var popupWindowId = undefined

browser.browserAction.onClicked.addListener(openPanel);

function openPanel(tab) {
  let contentWindowId = tab.windowId
  if (popupWindowId) {
    // browser.windows
    //   .update(ideWindowId, {
    //     focused: true,
    //   })
    //   .catch(function() {
    //     ideWindowId == undefined
    //     openPanel(tab)
    //   })
    return
  }
  console.log(popupWindowId);
  openWindowFromStorageResolution().then((panel) => {popupWindowId = panel.id
  console.log(panel);
  console.log(popupWindowId);});
  console.log(popupWindowId);
  console.log(tab);
}
function openWindowFromStorageResolution() {
  let opts = {
    height: 690,
    width: 550,
  }
  return browser.storage.local
    .get()
    .then(storage => {
      if (sizeIsValid(storage.size)) {
        opts.height = storage.size.height
        opts.width = storage.size.width
      }
      if (originIsValid(storage.origin)) {
        opts.top = storage.origin.top
        opts.left = storage.origin.left
      }
      return browser.windows.create(
        Object.assign(
          {
            url: browser.extension.getURL('index.html'),
            type: 'popup',
          },
          opts
        )
      )
    })
    .catch(e => {
      console.error(e) // eslint-disable-line no-console
      return browser.windows.create(
        Object.assign(
          {
            url: browser.extension.getURL('index.html'),
            type: 'popup',
          },
          opts
        )
      )
    })
}

function sizeIsValid(size) {
  return size && sideIsValid(size.height) && sideIsValid(size.width)
}

function sideIsValid(number) {
  return number && number.constructor.name === 'Number' && number > 50
}

function originIsValid(origin) {
  return origin && pointIsValid(origin.top) && pointIsValid(origin.left)
}

chrome.windows.onRemoved.addListener(function (winId){
  if(popupWindowId === winId){
      //chrome.browserAction.enable();
      popupWindowId = false;
  }
});
