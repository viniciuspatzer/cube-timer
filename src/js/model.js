
// Model communicate with the controller and the other way around
// and the controller communicate with the views


export const state = {
    running: false,
    time: {
        milliseconds: 0,
        seconds: 0,
        minutes: 0,
    },
    overview: {},
    history: {},
    timerInterval: '',
};

export const initTimer = function () {
    state.running = true;

    function tick() {
        state.time.milliseconds += 10;

        if (state.time.milliseconds >= 1000) {
            state.time.milliseconds = 0;
            state.time.seconds += 1;
        }

        if (state.time.seconds >= 60) {
            state.time.seconds = 0;
            state.time.minutes += 1;
        }
    };
    tick();

    state.timerInterval = setInterval(tick, 10);
};

export const stopTimer = function () {
    state.running = false;

    state.time = {
        milliseconds: 0,
        seconds: 0,
        minutes: 0,
    };

    clearInterval(state.timerInterval);
};