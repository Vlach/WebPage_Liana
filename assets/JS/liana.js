//Polyfills-smooth-scroll
$(".newsLink").on('click', function () {
    document.querySelector('#card-section').scrollIntoView({
        behavior: 'smooth'
    });

})
$(".intranet").on('click', function () {
    document.querySelector('#subs').scrollIntoView({
        behavior: 'smooth'
    });

})
$(".companyLink").on('click', function () {
    document.querySelector('#greenicons').scrollIntoView({
        behavior: 'smooth'
    });

})
$(".productsLink").on('click', function () {
    document.querySelector('#ref').scrollIntoView({
        behavior: 'smooth'
    });

})
$(".contactUsLink").on('click', function () {
    document.querySelector('#contacts').scrollIntoView({
        behavior: 'smooth'
    });

})
$(".downlogolink").on('click', function () {
    document.querySelector('#Bar').scrollIntoView({
        behavior: 'smooth'
    });

})


// Animated numbers section
var waypoint = new Waypoint({
    element: document.getElementById('greenicons'),
    handler: function (direction) {
        $('.count').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 700,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    },
    offset: '100%',
})
// Typewriter section
var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
        delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

//Popovers section
$(function () {
    $('[data-toggle="popover"]').popover({
        trigger: "focus",
        delay: 300,

    })
});