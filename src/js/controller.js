import * as model from "./model";
import mainView from "./views/mainView";
import { bgColors } from "./config";


const controlTimer = function () {
    if (!model.state.running) {
        model.initTimer();
        mainView.hideDeleteButton();
        mainView.hideMessage();
    }

    else if (model.state.running) {
        model.stopTimer();
        mainView.changeBgColor(bgColors.red);
        mainView.renderDeleteButton();

        // ... overview, history, chart


        mainView.renderScramble();
    }
};



(function init() {
    mainView.renderScramble();
    mainView.handlePressingClick();
    mainView.handleTimer(controlTimer);
})();