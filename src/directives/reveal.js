const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible")
        observer.unobserve(entry.target)
      }
    }
  },
  { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
)

export const reveal = {
  mounted(el, binding) {
    el.classList.add("reveal-item")
    const delay = (binding.value ?? 0) * 80
    if (delay) el.style.transitionDelay = `${delay}ms`
    observer.observe(el)
  },
  unmounted(el) {
    observer.unobserve(el)
  },
}
