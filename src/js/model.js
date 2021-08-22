
import { formatTimeArray } from "./helpers";
import { formatTimeMill } from "./helpers";

export const state = {
    running: false,
    time: null,
    overview: {
        fastestOfFive: 0,
        slowestOfFive: 0,
        averageOfFive: 0,
        averageOfTwelve: 0,
        slowestTime: 0,
        fastestTime: 0,
        amountOfSolves: 0,
        overallAverage: 0,
    },
    history: [],
    timerInterval: null,
};

export const initTimer = function () {
    state.running = true;

    let minutes = 0, seconds = 0, milliseconds = 0, time = 0;

    function tick() {
        milliseconds += 10, time += 10;

        if (milliseconds === 1000) {
            milliseconds = 0;
            seconds += 1;
        }

        if (seconds >= 60) {
            seconds = 0;
            minutes += 1;
        }

        state.time = time;
        document.querySelector('.timer').textContent =
            formatTimeArray([minutes, seconds, milliseconds]);
    };
    tick();

    state.timerInterval = setInterval(tick, 10);
};

export const stopTimer = function () {
    state.running = false;
    clearInterval(state.timerInterval);
};

export const saveInHistory = function () {
    state.history.push({
        time: state.time,
        scramble: document.querySelector('.scramble-formula').textContent,
        date: new Intl.DateTimeFormat(navigator.language, {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
        }).format(new Date()),
    });
};

export const calcOverview = function () {
    const solves = state.history.map(obj => obj.time);
    const last5Solves = solves.slice(-5);
    const last12Solves = solves.slice(-12);

    state.overview.fastestOfFive = formatTimeMill(Math.min(...last5Solves));
    state.overview.slowestOfFive = formatTimeMill(Math.max(...last5Solves));

    state.overview.slowestTime = formatTimeMill(Math.min(...solves));
    state.overview.fastestTime = formatTimeMill(Math.max(...solves));
    state.overview.amountOfSolves = state.history.length;

    state.overview.averageOfFive =
        formatTimeMill(last5Solves.reduce((acc, value) => acc + value / last5Solves.length, 0));

    state.overview.averageOfTwelve =
        formatTimeMill(last12Solves.reduce((acc, value) => acc + value / last5Solves.length, 0));

    state.overview.overallAverage =
        formatTimeMill(solves.reduce((acc, value) => acc + value / solves.length, 0));
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