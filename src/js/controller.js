import * as model from "./model";
import mainView from "./views/mainView";
import historyView from "./views/historyView";
import overviewView from "./views/overviewView";
import { bgColors } from "./config";


const controlTimer = function () {
    if (!model.state.running) {
        model.initTimer();
        mainView.changeBgColor(bgColors.green);
        mainView.hideDeleteButton();
        mainView.hideMessage();
    }

    else if (model.state.running) {
        model.stopTimer();

        model.saveInHistory();
        // historyView.renderHistory(model.state.history);

        model.calcOverview();
        overviewView.renderOverview(model.state.overview);

        // chart....

        mainView.changeBgColor(bgColors.red);
        mainView.renderDeleteButton();
        mainView.renderScramble();
    }
};



(function init() {
    mainView.renderScramble();
    mainView.handlePressingClick();
    mainView.handleTimer(controlTimer);
})();