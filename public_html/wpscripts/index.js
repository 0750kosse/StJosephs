import sliderInit from './slider.js'
import toggleMenuInit from './toggleMenuInit.js'
import bulletinDisplay from './bulletin.js'

const documentReady = (callback) => {
  if (document.readyState !== "loading") {
    callback();
  } else {
    document.addEventListener("DOMContentLoaded", callback);
  }
};

const init = () => {
  sliderInit()
  toggleMenuInit()
  bulletinDisplay()
}

documentReady(init)



