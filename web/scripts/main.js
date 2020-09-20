let xValue, yValue, rValue;

const $xInput = $('#x-input');

$xInput.on('change', function () {
    isValidX($(this).val().replace(',', '.'));
});

$('.form_button').on('click', function (event) {
    event.preventDefault();
    xValue = $xInput.val().replace(',', '.');

    if (isValidX(xValue) && isRChecked() && isYChecked()) {
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
    } else {
        $('.for_notes').text("Сначала выберите значение R");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const rButtons = document.querySelectorAll("input[name=R-button]");
    buttonOnClick(rButtons, rValue);
    const yButtons = document.querySelectorAll("input[name=Y-button]");
    buttonOnClick(yButtons, yValue);

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
});

function isYChecked() {
    const yButtons = document.querySelectorAll("input[name=Y-button]");
    let result = false;
    yButtons.forEach(element => {
        if (element.classList.contains("check-button")) {
            yValue = element.getAttribute("value");
            console.log("y= " + yValue);
            result = true;
        }
    });
    return result;
}


function getRelativeCoords(event) {
    return {x: event.offsetX, y: event.offsetY};
}

function isRChecked() {
    const rButtons = document.querySelectorAll("input[name=R-button]");
    let result = false;
    rButtons.forEach(element => {
        if (element.classList.contains("check-button")) {
            rValue = element.getAttribute("value");
            console.log("r= " + rValue);
            result = true;
        }
    });
    return result
}


function sendRequest(key) {
    const keys = ["button", "canvas"];
    if (keys.includes(key)) {
        fetch(`/webLab2_war_exploded/controller?` + new URLSearchParams({
            x: parseFloat(xValue),
            y: parseFloat(yValue),
            r: parseFloat(rValue),
            key: key,
        })).then(r => r.text())
            .then(result => {
                console.log(result);
            })
    }
}

function isValidX(value) {
    const errorMessage = 'Значение X должно быть в пределах от -3 до 3.';

    if (isNaN(parseFloat($xInput.val()))) {
        $('#for_x').text('Введите значение X.');
        return false;
    } else {
        if (!isNaN(Number(value))) {
            if (value > -3) {
                if (value < 3) {
                    console.log('x= ' + value);
                    $('#for_x').text('');
                    return true;
                } else {
                    $('#for_x').text(errorMessage);
                    return false;
                }
            } else {
                $('#for_x').text(errorMessage);
                return false;
            }
        } else {
            $('#for_x').text(errorMessage);
            return false;
        }
    }
}