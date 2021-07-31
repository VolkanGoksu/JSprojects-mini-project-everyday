const counters = document.querySelectorAll('.counter')

counters.forEach((counter) => {
  counter.innerHTML = '0'

  const updateCounter = () => {
    const targetCounter = Number(counter.getAttribute('data-target'))
    console.log(typeof targetCounter, targetCounter)
    const a = +counter.innerHTML

    const increment = targetCounter / 200
    console.log(increment)

    if (a < targetCounter) {
      counter.innerText = `${Math.ceil(a + increment)}`
      setTimeout(updateCounter, 1)
    }
  }

  updateCounter()
})
