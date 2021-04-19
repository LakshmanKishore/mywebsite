window.onload = function () {
    let canvas = document.querySelector('canvas');
    let body = document.querySelector('body');
    let up = document.querySelector(".up");
    let right = document.querySelector(".right");
    let left = document.querySelector(".left");
    let down = document.querySelector(".down");
    let score = document.querySelector(".score");
    let replay = document.querySelector(".replay");
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    let s = 10;
    let x = 50, y = 0;
    let a = 0, b = 0;
    let i;
    let c = canvas.getContext("2d");

    if (isMobile) {
        document.body.style.transform = "scale(2) translateY(25%)";
        document.body.style.height = "100%";
        document.body.style.overflow = "hidden";
    }

    if (!isMobile) {
        canvas.height = 400;
        let lapMessage = document.createElement('div');
        lapMessage.innerHTML = '<div>If you are playing in laptop use "wasd" keys</div>';
        body.appendChild(lapMessage);
    }

    function random(min, max) {
        const num = Math.floor(Math.random() * (max - min + 1)) + min;
        return num;
    }

    function round(num) {
        return (Math.round(num / 10) * 10);
    }

    canvas.height = 500;
    canvas.width = 400;

    function Head(hx, hy) {
        this.hx = hx;
        this.hy = hy;
    }

    Head.prototype.draw = function () {
        c.fillStyle = "#215500";
        c.fillRect(this.hx, this.hy, s, s);
    }

    Head.prototype.update = function () {
        this.hx += a;
        this.hy += b;
    }

    function Tail(tx, ty) {
        this.tx = tx;
        this.ty = ty;
    }

    Tail.prototype.draw = function () {
        c.fillStyle = "#215500";
        c.fillRect(this.tx, this.ty, s, s);
    }

    //ntx-->newTailX
    Tail.prototype.update = function (ntx, nty) {
        this.tx = ntx;
        this.ty = nty;
    }

    let foodx = random(0, canvas.width - 10);
    let foody = random(0, canvas.height - 10);

    let head = new Head(x, y);
    let tn = 3;//tn-->tailNumber
    let tail = [];
    for (i = 0; i < tn; i++) {
        tail[i] = new Tail(x, y);
    }


    function loop() {

        c.clearRect(0, 0, canvas.width, canvas.height);
        c.fillStyle = "#667753";
        c.fillRect(round(foodx), round(foody), s, s);
        for (i = 0; i < tn; i++) {
            tail[i].draw();
        }
        for (i = tn - 1; i >= 0; i--) {
            i == 0 ?
                tail[i].update(head.hx, head.hy) :
                tail[i].update(tail[i - 1].tx, tail[i - 1].ty);
        }
        head.draw();
        head.update();

        if (head.hx == round(foodx)
            && head.hy == round(foody)) {
            foodx = random(0, canvas.width - 10);
            foody = random(0, canvas.height - 10);
            tail.unshift(new Tail(head.hx, head.hy));
            tn++;
            score.innerText++;
        }

        for (i = 3; i < tn; i++) {
            if (head.hx == tail[i].tx && head.hy == tail[i].ty) {
                clearInterval(run);
                c.fillStyle = "red";
                c.font = "40px Arial";
                c.textAlign = "center";
                c.fillText("Game Over",
                    canvas.width / 2, canvas.height / 2);
                c.font = "20px Arial";
                c.fillText("Score",
                    canvas.width / 2 - 20, canvas.height / 2 + 30);
                c.fillStyle = "black";
                c.font = "30px Arial";
                c.fillText(score.innerText,
                    canvas.width / 2 + 25, canvas.height / 2 + 30);
                replay.addEventListener("click", efreplay);
            }
        }

        if (head.hy + 10 == 0) {
            head.hy = canvas.height;
        } else
            if (head.hy == canvas.height) {
                head.hy = 0;
            }

        if (head.hx + 10 == 0) {
            head.hx = canvas.width;
        } else
            if (head.hx == canvas.width) {
                head.hx = 0;
            }

    }

    let run = setInterval(loop, 100);

    function efreplay() {
        score.innerText = 0;
        head = new Head(x, y);
        a = 0;
        b = 0;
        run = setInterval(loop, 100);
        tn = 3;
        for (i = 0; i < tn; i++) {
            tail[i] = new Tail(x, y);
        }
        replay.removeEventListener("click", efreplay);
    }

    function addUpDown() {
        up.addEventListener("click", efup);
        down.addEventListener("click", efdown);
    }

    function addLeftRight() {
        right.addEventListener("click", efright);
        left.addEventListener("click", efleft);
    }

    //efright-->eventFunctionRight
    function efright() {
        addUpDown();
        left.removeEventListener("click", efleft);
        a = 10;
        b = 0;
    }

    function efleft() {
        addUpDown();
        right.removeEventListener("click", efright);
        a = -10;
        b = 0;
    }

    function efup() {
        addLeftRight();
        down.removeEventListener("click", efdown);
        a = 0;
        b = -10;
    }

    function efdown() {
        addLeftRight();
        up.removeEventListener("click", efup);
        a = 0;
        b = 10;
    }

    right.addEventListener("click", efright);

    left.addEventListener("click", efleft);

    up.addEventListener("click", efup);

    down.addEventListener("click", efdown);

    document.addEventListener("keypress", function (e) {

        e = e || window.event;

        if (e.keyCode == 119) {
            // up arrow
            efup();
        }
        else if (e.keyCode == 115) {
            // down arrow
            efdown();
        }
        else if (e.keyCode == 97) {
            // left arrow
            efleft();
        }
        else if (e.keyCode == 100) {
            // right arrow
            efright();
        }
    })

}

