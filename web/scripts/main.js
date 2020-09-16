let xValue, yValue, rValue;

document.addEventListener("DOMContentLoaded", () => {
    const rButtons = document.querySelectorAll("input[name=R-button]");
    rButtons.forEach(element => {
        element.addEventListener('click', function (){
            rValue = this.value;
            rButtons.forEach(function (element) {
                element.style.boxShadow = null;
                element.style.backgroundColor = null;
                element.style.color = null;
            });
            this.style.boxShadow = "0 0 40px 5px #f41c52";
            this.style.backgroundColor = "#f41c52";
            this.style.color = "white";
        })
    })

    const yButtons = document.querySelectorAll("input[name=Y-button]");
    yButtons.forEach(element => {
        element.addEventListener('click', function (){
            rValue = this.value;
            yButtons.forEach(function (element) {
                element.style.boxShadow = null;
                element.style.backgroundColor = null;
                element.style.color = null;
            });
            this.style.boxShadow = "0 0 40px 5px #f41c52";
            this.style.backgroundColor = "#f41c52";
            this.style.color = "white";
        })
    })
});

function getRelativeCoords(event) {
    return { x: event.offsetX, y: event.offsetY };
}

function validateR() {
    try {
        return !isNaN(rValue);
    } catch (err) {
        alert("Значение R не выбрано");
        return false;
    }
}


function sendRequest(key) {
    const keys = ["button", "canvas"];
    if (keys.includes(key)) {
        const request = "x=" + encodeURIComponent(xValue) + "&y=" + encodeURIComponent(yValue) + "&r=" + encodeURIComponent(rValue) +
            "&key=" + encodeURIComponent(key);
        fetch(`/controller?${'x=2'}`
        ).then(r => console.log(r))
    }

    document.addEventListener("DOMContentLoaded", () => {
        canvas.addEventListener("click", (event) => {
            if (validateR()) {
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
    });

    const $xInput = $('#x-input');

    $xInput.on('change', function () {
        xValueCheck($(this).val().replace(',', '.'));
    });


    $('.form_button').on('click', function (event) {
        event.preventDefault();

        const isValidX = xValueCheck($xInput.val().replace(',', '.'));

        if (isValidX) {
            $('#for_x').text('');
            const request = new FormData();

            request.append("X", $xInput.val().replace(',', '.'));

            console.log($xInput.val().replace(',', '.'));
        }
    });

    function xValueCheck(value) {
        const errorMessage = 'Значение Y должно быть в пределах от -5 до 5.';

        if (isNaN(parseFloat($xInput.val()))) {
            $('#for_X').text('Введите значение X.');
            return false;
        } else {
            if (!isNaN(Number(value))) {
                if (value >= -3) {
                    if (value <= 3) {
                        console.log('Y validation is TRUE')
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
}
