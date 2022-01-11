class AlarmClock {

    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {

        if (!id) {
            throw new Error('Параметр id не передан в коллекцию addClock');
        }

        if (this.alarmCollection.some(item => item.id === id)) {
            console.error(`Звонок с id ${id} уже существует`);
            return;
        }

        this.alarmCollection.push({ id, time, callback });
    }

    removeClock(id) {
        const resultArr = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(item => item.id !== id);
        return resultArr.length !== this.alarmCollection.length;
    }

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString().slice(0, 5);
    }

    start() {
        let checkAlarm = checkClock.bind(this);
        function checkClock(alarm) {
            if (alarm.time === this.getCurrentFormattedTime()) {
                alarm.callback();
            }
        }

        if (!this.timerId) {
            this.timerId = setInterval(() => this.alarmCollection.forEach(item => checkAlarm(item)),
                500);
        }
    }

    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach(item => console.log(`id = ${item.id} и time = ${item.time}`));
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

function testCase() {
    let phoneAlarm = new AlarmClock();
    phoneAlarm.addClock(phoneAlarm.getCurrentFormattedTime(), () => console.log('Пора вставать'), 10);

    let alarmTime1 = currentTime.setMinutes(currentTime.getMinutes() + 1);
    phoneAlarm.addClock(phoneAlarm.getCurrentFormattedTime(alarmTime1), () => { console.log('Давай, вставай уже'); phoneAlarm.removeClock(2) }, 2);

    let alarmTime2 = currentTime.setMinutes(currentTime.getMinutes() + 2);
    phoneAlarm.addClock(phoneAlarm.getCurrentFormattedTime(alarmTime2), () => { console.log('Вставай, а то проспишь!'); clock.stop(); clock.clearAlarms() }, 1000);

    clock.printAlarms();

    clock.start();
}