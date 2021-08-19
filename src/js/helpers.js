export const randomNumber = max => Math.trunc(Math.random() * max);

export const formatTime = time => time.toString().padStart(2, '0');

export const isValidEvent = function (e) {
    if (e.code === 'Space' || e.target === document.querySelector('div.main'))
        return true
}