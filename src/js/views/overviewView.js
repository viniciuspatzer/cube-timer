
class OverviewView {
    fastestOfFiveEl = document.querySelector('.fastest-of-5');
    slowestOfFiveEl = document.querySelector('.slowest-of-5');
    averageOfFiveEl = document.querySelector('.average-of-5');
    averageOfTwelveEl = document.querySelector('.average-of-12');
    slowestTimeEl = document.querySelector('.slowest-time');
    fastestTimeEl = document.querySelector('.fastest-time');
    amountOfSolvesEl = document.querySelector('.amount-of-solves');
    overallAverageEl = document.querySelector('.overall-average');

    renderOverview(overview) {
        this.fastestOfFiveEl.textContent = overview.fastestOfFive;
        this.slowestOfFiveEl.textContent = overview.slowestOfFive;
        this.averageOfFiveEl.textContent = overview.averageOfFive;
        this.averageOfTwelveEl.textContent = overview.averageOfTwelve;
        this.slowestTimeEl.textContent = overview.slowestTime;
        this.fastestTimeEl.textContent = overview.fastestTime;
        this.amountOfSolvesEl.textContent = overview.amountOfSolves;
        this.overallAverageEl.textContent = overview.overallAverage;
    }
}

export default new OverviewView();