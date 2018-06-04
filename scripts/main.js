$(document).ready(() => {
    const materialSection = $('#material-section');
    const materialSectionOffsetTop = materialSection.offset().top;

    const reasonImages = $('.reason-img');
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

    $(document).on('scroll', () => {
        const windowScroll = $(window).scrollTop();

        if (windowScroll > materialSectionOffsetTop - 600 && windowScroll < materialSectionOffsetTop + 300) {
            materialSection.css('background-position-y', (windowScroll - materialSectionOffsetTop) / 800 * -80 + 20 + '%')
        }

        // for (let i = 0; i < reasonImages.length; i++) {
        //     const reasonImage = reasonImages.eq(i);
        //     const reasonImageOffsetTop = reasonImagesOffsetTop[i];

        //     if (windowScroll > reasonImageOffsetTop - 600 && windowScroll < reasonImageOffsetTop + 300) {
        //         reasonImage.css('top', `${(windowScroll - reasonImageOffsetTop) * 0.06 - 20}%`);
        //     }
        // }

        if (!micZoomed && windowScroll > micSectionOffsetTop - 600) {
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
    });
})