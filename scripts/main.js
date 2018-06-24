$(document).ready(() => {
    const navbar = $('.nav-bar');

    const materialSection = $('#material-section');
    const materialSectionOffsetTop = materialSection.offset().top;

    const reasonImages = $('.reason-img-container');
    const reasonImagesOffsetTop = reasonImages.map(idx => reasonImages.eq(idx).offset().top);

    const micSection = $('#mic-section');
    const micSectionOffsetTop = micSection.offset().top;
    const micContent = $('.mic-content');

    const footerSection = $('#footer-section');
    const footerSectionOffsetTop = footerSection.offset().top;

    const footerBg = $('.footer-bg');
    const companyInfoContainer = $('.company-info-container');

    let micZoomed = false;
    let companyInfoSlided = false;
    let splashFlipped = false;

    function hideSplash() {
        splashFlipped = true;
        $('.splash').addClass('flipped');
        setTimeout(() => {
            $('.splash').hide();
        }, 1000);
        $(window).scrollTop(0);
    }

    $(document).on('scroll', () => {
        const windowScroll = $(window).scrollTop();

        if (!splashFlipped && windowScroll > 100) {
            hideSplash();
        }

        if (windowScroll > materialSectionOffsetTop - 600 && windowScroll < materialSectionOffsetTop + 300) {
            materialSection.css('background-position-y', (windowScroll - materialSectionOffsetTop) / 800 * -80 + 20 + '%')
        }

        for (let i = 0; i < reasonImages.length; i++) {
            const reasonImage = reasonImages.eq(i);
            const reasonImageOffsetTop = reasonImagesOffsetTop[i];

            if (windowScroll > reasonImageOffsetTop - 600 && windowScroll < reasonImageOffsetTop + 300) {
                reasonImage.css('background-position-y', `${(windowScroll - reasonImageOffsetTop + 600) * 0.06 + 30}%`);
            }
        }

        if (!micZoomed && windowScroll > micSectionOffsetTop - 500) {
            micZoomed = true;
            micContent.css({
                transform: 'scale(1)',
                opacity: 1,
            });
        }

        if (!companyInfoSlided && windowScroll > footerSectionOffsetTop - 500) {
            companyInfoSlided = true;
            footerBg.css({
                transform: 'scale(1)',
                opacity: 1
            });
            companyInfoContainer.css({
                transform: 'translateX(0)',
                opacity: 1,
            });
        }

        if (windowScroll > 500) {
            if (!navbar.hasClass('shrinked')) {
                $('.nav-bar').addClass('shrinked');
            }
        } else if (windowScroll < 300) {
            if (navbar.hasClass('shrinked')) {
                $('.nav-bar').removeClass('shrinked');
            }
        }
    });

    const navItemScrollMapping = {
        '.nav-brand': '#feature-section',
        '.nav-spec': '#spec-section',
        '.nav-feature': '#reason-section',
        '.nav-contact': '#footer-section'
    }

    $('.nav-title').click(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    });

    for (const navItemClassName of Object.keys(navItemScrollMapping)) {
        $(navItemClassName).click(() => {
            window.scroll({
                top: $(navItemScrollMapping[navItemClassName]).offset().top - 40,
                left: 0,
                behavior: 'smooth',
            });
        });
    }

    $('.splash-scroll-indicator').click(() => {
        hideSplash();
    });
});