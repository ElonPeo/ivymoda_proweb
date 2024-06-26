$(document).ready(function() {
    $('#iw1').click(function() {
        $(this).children('.sub-action').slideToggle();
    });

    var slider = document.getElementById('sub-img-box');
    var container = document.getElementById('sub-img-box-container');
    container.style.height = (document.getElementById('hi').offsetHeight * 8.7 / 10) + "px";
    container.style.maxHeight = (document.getElementById('hi').offsetHeight * 8.7 / 10) + "px";
    var div = document.getElementsByClassName('mini-img');
    var height = div[0].offsetHeight + 11;
    var minHeight = 0;
    var maxHeight = height * 4;
    var position = 0;

    document.querySelector('.bx-chevron-up').addEventListener('click', up);
    document.querySelector('.bx-chevron-down').addEventListener('click', down);

    function down() {
        if (position > -maxHeight) {
            position -= height;
            slider.style.transform = "translateY(" + position + "px)";
        }
    }

    function up() {
        if (position < minHeight) {
            position += height;
            slider.style.transform = "translateY(" + position + "px)";
        }
    }
});

function highlight(e) {
    document.getElementById('hi').src = e.src;
    document.getElementById('zoom').style.background = 'url(' + e.src + ')';
}

function zoom(event) {
    var zoomer = event.currentTarget;
    x = event.offsetX / zoomer.offsetWidth * 100;
    y = event.offsetY / zoomer.offsetHeight * 100;
    zoomer.style.backgroundPosition = x + '% ' + y + '%';
}

function openTS() {
    document.getElementById('table-size').style.display = 'block';
}

function closeTS() {
    if (document.getElementById('table-size').style.display == 'block') {
        document.getElementById('table-size').style.display = 'none';
    }
}

function chooseSize(s) {
    s.style.border = 'solid 1px black';
    var size = document.getElementsByClassName('size');
    for (var i = 0; i < size.length; i++) {
        if (size[i] != s) {
            size[i].style.border = '1px solid #e7e8e9';
        }
    }
}

function increaseQuantity() {
    document.getElementById('quantity').value++;
}

function decreaseQuantity() {
    if (document.getElementById('quantity').value > 1) {
        document.getElementById('quantity').value--;
    }
}

function showInfo() {
    document.getElementById('info').style.maxHeight = '600px';
    document.getElementById('divider').style.position = 'relative';
    document.getElementById('hideInfo').style.display = 'block';
    document.getElementById('divider').style.top = '0';
}

function hideInfo() {
    document.getElementById('info').style.maxHeight = '100px';
    document.getElementById('divider').style.position = 'absolute';
    document.getElementById('divider').style.top = '170px';
    document.getElementById('hideInfo').style.display = 'none';
}

function showIntro(e) {
    var infoMenu = document.getElementsByClassName('info-menu');
    for (var i = 0; i < 3; i++) {
        infoMenu[i].style.border = 'none';
    }
    e.style.borderBottom = '2px solid black';
    document.getElementById('intro').style.display = 'block';
    document.getElementById('detail').style.display = 'none';
    document.getElementById('preserve').style.display = 'none';
}

function showDetail(e) {
    var infoMenu = document.getElementsByClassName('info-menu');
    for (var i = 0; i < 3; i++) {
        infoMenu[i].style.border = 'none';
    }
    e.style.borderBottom = '2px solid black';
    document.getElementById('intro').style.display = 'none';
    document.getElementById('detail').style.display = 'block';
    document.getElementById('preserve').style.display = 'none';
}

function showPreserve(e) {
    var infoMenu = document.getElementsByClassName('info-menu');
    for (var i = 0; i < 3; i++) {
        infoMenu[i].style.border = 'none';
    }
    e.style.borderBottom = '2px solid black';
    document.getElementById('intro').style.display = 'none';
    document.getElementById('detail').style.display = 'none';
    document.getElementById('preserve').style.display = 'block';
}

function chooseColor(e) {
    var className = e.className;
    var number = className.charAt(className.length - 1);
    var openBox = "box-img" + number;
    var openbox_img = $(e).parent().parent().siblings('.' + openBox)[0];
    var box_img = $(e).parent().parent().siblings('.box-img');
    for (var i = 0; i < box_img.length; i++) {
        box_img[i].style.display = 'none';
    }
    openbox_img.style.display = 'block';
}

