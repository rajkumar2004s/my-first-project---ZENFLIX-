export default {
  mounted(el, binding) {
    const tooltipText = binding.value

    const tooltipEl = document.createElement('div')
    tooltipEl.innerText = tooltipText
    tooltipEl.className = 'vue-tooltip'
    tooltipEl.style.position = 'absolute'
    tooltipEl.style.backgroundColor = 'black'
    tooltipEl.style.color = 'white'
    tooltipEl.style.padding = '4px 8px'
    tooltipEl.style.borderRadius = '4px'
    tooltipEl.style.fontSize = '12px'
    tooltipEl.style.whiteSpace = 'nowrap'
    tooltipEl.style.pointerEvents = 'none'
    tooltipEl.style.zIndex = '9999'
    tooltipEl.style.transition = 'opacity 0.2s'
    tooltipEl.style.opacity = '0'

    document.body.appendChild(tooltipEl)

    const showTooltip = (e) => {
      tooltipEl.style.left = `${e.pageX + 10}px`
      tooltipEl.style.top = `${e.pageY + 10}px`
      tooltipEl.style.opacity = '1'
    }

    const moveTooltip = (e) => {
      tooltipEl.style.left = `${e.pageX + 10}px`
      tooltipEl.style.top = `${e.pageY + 10}px`
    }

    const hideTooltip = () => {
      tooltipEl.style.opacity = '0'
    }

    el.addEventListener('mouseenter', showTooltip)
    el.addEventListener('mousemove', moveTooltip)
    el.addEventListener('mouseleave', hideTooltip)

    el._tooltipEl = tooltipEl
  },

  unmounted(el) {
    if (el._tooltipEl) {
      document.body.removeChild(el._tooltipEl)
      delete el._tooltipEl
    }
  },
}
