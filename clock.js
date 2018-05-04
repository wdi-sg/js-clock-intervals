const Clock = {
    root: null,
    face: null,
    hour: null,
    minute: null,
    second: null,
    __timer: null,
    init: function () {
        this.root = document.getElementById('clock');
        this.face = document.getElementById('face');
        this.hour = document.getElementById('hour');
        this.minute = document.getElementById('minute');
        this.second = document.getElementById('second');
    },
    start: function() {
        this.__timer = setInterval(time.update, 1000);
    },
    stop: function() {
        clearInterval(this.__timer);
    },
    update: function(hour, minute, second) {
        let hourHandDegrees = (hour / 12) * 360;
        let minuteHandDegrees = (minute / 60) * 360;
        let secondHandDegrees = (second / 60) * 360;
        this.hour.style.transform = 'rotate(' + hourHandDegrees + 'deg)';
        this.minute.style.transform = 'rotate(' + minuteHandDegrees + 'deg)';
        this.second.style.transform = 'rotate(' + secondHandDegrees + 'deg)';
    }
};

const time = {
    __date: null,
    hour: null,
    minute: null,
    second: null,
    update: function () {
        this.__date = new Date();
        this.hour = this.__date.getHours();
        this.minute = this.__date.getMinutes();
        this.second = this.__date.getSeconds();
        // console.log(this.hour, this.minute, this.second);
        Clock.update(this.hour, this.minute, this.second);
    }
};

window.onload = function(){
    Clock.init();
    Clock.start();
};
