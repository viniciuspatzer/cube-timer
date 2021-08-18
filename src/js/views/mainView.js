import { SCRAMBLE_CASES } from "../config";
import { randomNumber } from "../helpers";

class MainView {
    timerEl = document.querySelector('.timer');
    scrambleEl = document.querySelector('.scramble-formula');

    addHandlerStartTimer(handler) {
        ['keyup', 'click']
            .forEach(ev => window.addEventListener(ev, e => {
                if (e.key === ' ' || e.isTrusted)
                    handler();
            }));
    }

    updateTimerUI(time) {
        this.timerEl.textContent = time;
    }

    renderScramble() {
        const scramble = [];
        let lastCH = '';

        for (let i = 0; scramble.length <= 20; i++) {

            let CH = SCRAMBLE_CASES[randomNumber(18)];
            const curLastCH = CH.slice(1);

            if (lastCH != curLastCH) {
                scramble.push(CH);
                lastCH = curLastCH;
            }
        }
        this.scrambleEl.textContent = scramble.join('  ');
    }
}

export default new MainView();