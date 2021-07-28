const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    // console.log('click')
    remove()
    panel.classList.add('active')
  })
})

function remove() {
  panels.forEach((panel) => {
    panel.classList.remove('active')
  })
}
