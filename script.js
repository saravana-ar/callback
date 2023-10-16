function countdown(number, callback) {
    if (number > 0) {
        console.log(number);
        document.getElementById('countdown').textContent = number;

        setTimeout(function () {
            countdown(number - 1, callback);
        }, 1000);
    } else {
        callback();
    }
}

countdown(10, function () {
    setTimeout(function () {
        document.getElementById('countdown').textContent = 'HAPPY INDEPENDENCE DAY';
    }, 1000);
});
