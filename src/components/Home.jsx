import React from 'react'

const Icon = ({ top, left, icon }) => (
  <div
    className='absolute w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-no-repeat bg-contain opacity-80'
    style={{
      top: `${top}%`,
      left: `${left}%`,
      backgroundImage: `url('/${icon}.svg')`,
      filter: 'brightness(0) invert(1)',
    }}
  />
)

const generateSpacedPositions = (count, minDistance = 15) => {
  const positions = []

  while (positions.length < count) {
    const top = Math.random() * 80 + 10
    const left = Math.random() * 80 + 10

    const tooClose = positions.some((p) => {
      const dx = p.left - left
      const dy = p.top - top
      const distance = Math.sqrt(dx * dx + dy * dy)
      return distance < minDistance
    })

    if (!tooClose) {
      positions.push({ top, left })
    }
  }

  return positions
}

const Home = () => {
  const totalIcons = 10
  const positions = generateSpacedPositions(totalIcons, 20)

  const icons = [
    ...Array(3).fill('bone'),
    ...Array(4).fill('dog'),
    ...Array(3).fill('fish-bone'),
  ]

  const shuffledIcons = icons.sort(() => Math.random() - 0.5)

  const items = positions.map((pos, i) => ({
    ...pos,
    icon: shuffledIcons[i],
  }))

  return (
    <div className='relative w-full h-[48rem] sm:h-[48rem] md:h-[48rem] ml-2 bg-[#417ABD] overflow-hidden mb-8 px-4 sm:px-6 md:px-0'>
      {items.map((pos, i) => (
        <Icon key={i} top={pos.top} left={pos.left} icon={pos.icon} />
      ))}
    </div>
  )
}

export default Home
