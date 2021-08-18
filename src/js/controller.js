import * as model from "./model";
import mainView from "./views/mainView";

// Model communicate with the controller and the other way around
// and the controller communicate with the views






const controlTimer = function () {
    if (!model.state.running)
        model.initTimer();
    else
        model.stopTimer();
};



(function init() {
    console.log('init');
    mainView.renderScramble();
    mainView.addHandlerStartTimer(controlTimer);
})();