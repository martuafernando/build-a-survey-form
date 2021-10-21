function $(input) {
    return document.querySelectorAll(input);
}

$('.step').forEach((item, i) => {
    item.style.left = (i * 500) + "px";
});

$('#selanjutnya')[0].addEventListener('click', function () {
    $('.step').forEach((item, i) => {
        item.style.left = (parseInt(item.style.left) - 500) + "px";
    });

    if (parseInt($(".step:last-child")[0].style.left) > 0) {
        this.style.display = "block";
    } else {
        this.style.display = "none";
    }

    if (parseInt($(".step:first-child")[0].style.left) < 0) {
        $('#sebelumnya')[0].style.display = "block";
    }
});

$('#sebelumnya')[0].addEventListener('click', function () {
    $('.step').forEach((item, i) => {
        item.style.left = (parseInt(item.style.left) + 500) + "px";
    });

    if (parseInt($(".step:first-child")[0].style.left) < 0) {
        this.style.display = "block";
    } else {
        this.style.display = "none";
    }

    if (parseInt($(".step:last-child")[0].style.left) > 0) {
        $('#selanjutnya')[0].style.display = "block";
    }
});