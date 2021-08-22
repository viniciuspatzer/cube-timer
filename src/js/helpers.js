
export const randomNumber = max => Math.trunc(Math.random() * max);

export const isValidEvent = function (e) {
    if (e.code === 'Space' || e.target === document.querySelector('div.main'))
        return true
};



const format = time => time.toString().padStart(2, '0');


export const formatTimeArray = time => {
    const [minutes, seconds, milliseconds] = time;

    return `${format(minutes)}:${format(seconds)}.${format(milliseconds).slice(0, -1).padStart(2, '0')}`;
};

export const formatTimeMill = time => {
    const minutes = Math.floor(time / (1000 * 60));
    const seconds = Math.floor(time / 1000) % 60;
    const milliseconds = Math.floor(time % 1000);

    return `${format(minutes)}:${format(seconds)}.${format(milliseconds).slice(0, -1).padStart(2, '0')}`;
};