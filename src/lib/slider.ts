export function getSliderNavState(
  currentSlide: number,
  slideCount: number,
  visibleCount: number,
  isLoading: boolean
) {
  const isAtStart = currentSlide === 0;
  const isAtEnd =
    slideCount <= visibleCount ||
    currentSlide >= Math.max(0, slideCount - visibleCount);

  return {
    prevDisabled: isLoading || isAtStart,
    nextDisabled: isLoading || isAtEnd,
  };
}
