let xValue, yValue, rValue;

const $xInput = $('#x-input');

$xInput.on('change', function () {
    isValidX($(this).val().replace(',', '.'));
});

$('.form_button').on('click', function () {
    xValue = $xInput.val().replace(',', '.');

    debugger;

    if(isYChecked() && isValidX(xValue) && isRChecked()){
        sendRequest("button");
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
                });
                this.classList.add("check-button");
                this.setAttribute("checked", "");
            })
        })
    }
});

canvas.addEventListener("click", (event) => {
    if (isRChecked()) {
        let position = getRelativeCoords(event);
        xValue = position.x;
        yValue = position.y;
        setPointer(xValue, yValue);
        let k = 270 / rValue; //отношение радиуса и плоскости
        xValue = (xValue / k).toFixed(1);
        yValue = (yValue / k).toFixed(1);
        sendRequest("canvas");
    }
});


function isYChecked() {
    const y = $(".y-button").checked;
    yValue = y.val();
    return y
}

function getRelativeCoords(event) {
    return { x: event.offsetX, y: event.offsetY };
}

function isRChecked() {
    const r = $('.r-button');
    for (let i = 0; i < r.length; i++) {
        rValue = r[i].onclick;
    }
    return rValue;
}


function sendRequest(key) {
    const keys = ["button", "canvas"];
    if (keys.includes(key)) {
        const request = "x=" + encodeURIComponent(xValue) + "&y=" + encodeURIComponent(yValue) + "&r=" + encodeURIComponent(rValue) +
            "&key=" + encodeURIComponent(key);
        fetch(`/controller?${request}`)
            .then(r => console.log(r))
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
                        console.log('X validation is TRUE')
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
