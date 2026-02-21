export const MOBILE_BREAKPOINT = 768;

export const DESKTOP_SETTINGS = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  rows: 1,
  slidesPerRow: 1,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
  ],
};

export const MOBILE_SETTINGS = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  rows: 2,
  slidesPerRow: 1,
  responsive: undefined,
};
