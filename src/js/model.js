
import { formatTime } from "./helpers";

export const state = {
    running: false,
    time: null,
    formatedTime: '',
    overview: {},
    history: {},
    timerInterval: null,
};

export const initTimer = function () {
    state.running = true;

    let minutes = 0, seconds = 0, milliseconds = 0;

    function tick() {
        milliseconds += 1;

        if (milliseconds === 100) {
            milliseconds = 0;
            seconds += 1;
        }

        if (seconds >= 60) {
            seconds = 0;
            minutes += 1;
        }

        const stringTime =
            `${formatTime(minutes)}:${formatTime(seconds)}:${formatTime(milliseconds)}`;

        state.formatedTime = stringTime;
        document.querySelector('.timer').textContent = state.formatedTime;
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






/*

(function getLocalStorage() {
    const storage = localStorage.getItem('');
    if (storage) state.bookmarks = JSON.parse(storage);
})();


(function setLocalStorage() {
    window.addEventListener('unload', () => {

    })
})();

*/