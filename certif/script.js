document.addEventListener("DOMContentLoaded", function () {
    var timer = 1;
    var countdown = setInterval(function () {
        timer--;
        document.getElementById('timer').textContent = timer;

        if (timer <= 0) {
            clearInterval(countdown);
            document.getElementById('button').style.display = 'block';
        }
    }, 1000);

    document.getElementById('button').onclick = function () {
        document.getElementById('felicitation').style.display = "block";
    };
});