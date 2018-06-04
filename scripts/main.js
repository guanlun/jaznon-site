$(document).ready(() => {
    // const materialSection = $('#material-section');
    // const materialSectionOffsetTop = materialSection.offset().top;

    const reasonImages = $('.reason-img');
    const reasonImagesOffsetTop = reasonImages.map(idx => reasonImages.eq(idx).offset().top);

    $(document).on('scroll', () => {
        const windowScroll = $(window).scrollTop();

        // if (windowScroll > materialSectionOffsetTop - 600 && windowScroll < materialSectionOffsetTop + 300) {
        //     materialSection.css('background-position-y', (windowScroll - materialSectionOffsetTop) / 800 * -80 + 20 + '%')
        // }

        for (let i = 0; i < reasonImages.length; i++) {
            const reasonImage = reasonImages.eq(i);
            const reasonImageOffsetTop = reasonImagesOffsetTop[i];

            if (windowScroll > reasonImageOffsetTop - 600 && windowScroll < reasonImageOffsetTop + 300) {
                reasonImage.css('top', `${(windowScroll - reasonImageOffsetTop) * 0.06 - 20}%`);
            }
        }
    });
})