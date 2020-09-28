let xValue, yValue, rValue;
const $xInput = $('#x-input');

const pointsCoordinates = sessionStorage.getItem('points') ? JSON.parse(sessionStorage.getItem('points')) : [];

$('.form_button').on('click', function (event) {
    event.preventDefault();

    xValue = $xInput.val().replace(',', '.');
    const isValidY = isYChecked();
    const isValidR = isRChecked();

    if (isValidX(xValue) && isValidY && isValidR) {
        sendRequest("button");
    }
});

canvas.addEventListener("click", (event) => {
    if (isRChecked()) {
        let position = getRelativeCoords(event);
        xValue = position.x;
        yValue = position.y;
        setPointer(xValue, yValue);
        xValue = xValue - 150;
        yValue = 180 - yValue;
        const k = rValue / 140
        xValue = (xValue * k).toFixed(1);
        yValue = (yValue * k).toFixed(1);
        sendRequest("canvas");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    pointsCoordinates.forEach(value => {
        setPointer(value.x, value.y);
    })

    const rButtons = document.querySelectorAll("input[name=R-button]");
    buttonOnClick(rButtons, rValue);
    const yButtons = document.querySelectorAll("input[name=Y-button]");
    buttonOnClick(yButtons, yValue);

});

function buttonOnClick(button, value) {
    button.forEach(element => {
        element.addEventListener('click', function () {
            value = this.value;
            button.forEach(function (element) {
                element.classList.remove("check-button");
                element.removeAttribute("checked");
            });
            this.classList.add("check-button");
            this.setAttribute("checked", "");
        })
    })
}

function getRelativeCoords(event) {
    return {x: event.offsetX, y: event.offsetY};
}

function sendRequest(key) {
    const keys = ["button", "canvas"];
    if (keys.includes(key)) {
        setPointsCoordinate();
        fetch(`/webLab2_war_exploded/controller?` + new URLSearchParams({
            x: parseFloat(xValue),
            y: parseFloat(yValue),
            r: parseFloat(rValue),
        })).then(r => r.text())
            .then(result => {
                document.write(result);
            })
    }
}

function isRChecked() {
    const rButtons = document.querySelectorAll("input[name=R-button]");
    const $rInput = $('#r-input');
    let result = false;
    rButtons.forEach(element => {
        if (element.classList.contains("check-button")) {
            rValue = element.getAttribute("value");
            console.log("r= " + rValue);
            result = true;
        }
    });

    if (result === false) {
        notChecked($rInput)
    } else {
        removeNotChecked($rInput)
    }
    return result
}

function isYChecked() {
    const $yInput = $('#y-input')
    const yButtons = document.querySelectorAll("input[name=Y-button]");
    let result = false;
    yButtons.forEach(element => {
        if (element.classList.contains("check-button")) {
            yValue = element.getAttribute("value");
            console.log("y= " + yValue);
            result = true;
        }
    });

    if (result === false) {
        notChecked($yInput)
    } else {
        removeNotChecked($yInput)
    }
    return result;
}

function isValidX(value) {
    if (isNaN(parseFloat($xInput.val()))) {
        notChecked($xInput);
        return false;
    } else {
        if (!isNaN(Number(value))) {
            if (value > -3) {
                if (value < 3) {
                    console.log('x= ' + value);
                    removeNotChecked($xInput);
                    return true;
                } else {
                    notChecked($xInput);
                    return false;
                }
            } else {
                notChecked($xInput);
                return false;
            }
        } else {
            notChecked($xInput);
            return false;
        }
    }
}

function notChecked(element) {
    element.prev("label").addClass("not-checked");
}

function removeNotChecked(element) {
    element.prev("label").removeClass("not-checked");
}