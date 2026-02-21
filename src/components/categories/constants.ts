export const MOBILE_BREAKPOINT = 768;

export const DESKTOP_SETTINGS = {
  dots: false,
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  rows: 1,
  slidesPerRow: 1,
  variableWidth: true,
};

export const MOBILE_SETTINGS = {
  ...DESKTOP_SETTINGS,
  rows: 2,
  slidesPerRow: 1,
  variableWidth: false,
  responsive: undefined,
};
