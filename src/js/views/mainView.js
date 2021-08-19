import { SCRAMBLE_CASES } from "../config";
import { randomNumber } from "../helpers";
import { isValidEvent } from "../helpers";
import { bgColors } from "../config";

class MainView {
    timerEl = document.querySelector('.timer');
    scrambleEl = document.querySelector('.scramble-formula');
    deleteBtnEl = document.querySelector('.delete-btn');
    messageEl = document.querySelector('.timer-description');

    handleTimer(handler) {
        ['keyup', 'click']
            .forEach(ev => window.addEventListener(ev, e => {
                if (isValidEvent(e)) {
                    handler();
                }
            }));
    }

    changeBgColor(color) {
        document.querySelector('body')
            .style.backgroundColor = `${color}`;
    }

    renderDeleteButton() {
        this.deleteBtnEl.classList.remove('hidden');
    }

    hideDeleteButton() {
        this.deleteBtnEl.classList.add('hidden');
    }

    hideMessage() {
        this.messageEl.classList.add('hidden');
    }

    renderScramble() {
        const scramble = [];
        let lastCH = '';

        for (let i = 0; scramble.length <= 20; i++) {

            let CH = SCRAMBLE_CASES[randomNumber(18)];
            const curLastCH = CH.slice(0, 1);

            if (lastCH != curLastCH) {
                scramble.push(CH);
                lastCH = curLastCH;
            }
        }
        this.scrambleEl.textContent = scramble.join('  ');
    }

    handlePressingClick() {
        ['keypress', 'mousedown']
            .forEach(ev => window.addEventListener(ev, e => {
                if (isValidEvent(e))
                    this.changeBgColor(bgColors.green);
            }));
    }
}

export default new MainView();