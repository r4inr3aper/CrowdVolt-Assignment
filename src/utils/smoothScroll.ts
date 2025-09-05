export interface ScrollOptions {
  behavior?: 'smooth' | 'auto';
  block?: 'start' | 'center' | 'end' | 'nearest';
  inline?: 'start' | 'center' | 'end' | 'nearest';
  offset?: number;
}

/**
 * Smooth scroll to an element by ID
 * @param elementId - The ID of the element to scroll to
 * @param options - Scroll options
 */
export const scrollToElement = (
  elementId: string, 
  options: ScrollOptions = {}
): void => {
  const element = document.getElementById(elementId);
  
  if (!element) {
    console.warn(`Element with ID '${elementId}' not found`);
    return;
  }

  const {
    behavior = 'smooth',
    block = 'start',
    inline = 'nearest',
    offset = 0
  } = options;

  if (offset !== 0) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: behavior as ScrollBehavior
    });
  } else {
    // Use standard scrollIntoView
    element.scrollIntoView({
      behavior: behavior as ScrollBehavior,
      block: block as ScrollLogicalPosition,
      inline: inline as ScrollLogicalPosition
    });
  }
};

/**
 * Smooth scroll to top of page
 */
export const scrollToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

/**
 * Check if an element is in viewport
 * @param elementId - The ID of the element to check
 * @returns boolean indicating if element is in viewport
 */
export const isElementInViewport = (elementId: string): boolean => {
  const element = document.getElementById(elementId);
  
  if (!element) return false;

  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= windowHeight &&
    rect.right <= windowWidth
  );
};

/**
 * Get active section based on scroll position
 * @param sectionIds - Array of section IDs to check
 * @returns The ID of the currently active section
 */
export const getActiveSection = (sectionIds: string[]): string | null => {
  for (const sectionId of sectionIds) {
    const element = document.getElementById(sectionId);
    if (!element) continue;

    const rect = element.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5) {
      return sectionId;
    }
  }
  
  return sectionIds[0] || null;
};