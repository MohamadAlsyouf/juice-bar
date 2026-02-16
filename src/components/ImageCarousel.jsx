import { useState, useEffect } from 'react'

const carouselImages = [
  {
    url: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=1920&q=80',
    alt: 'Fresh orange juice being poured',
    title: 'Freshly Squeezed',
    subtitle: 'Made with 100% fresh oranges'
  },
  {
    url: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=1920&q=80',
    alt: 'Variety of colorful fresh juices',
    title: 'Natural Flavors',
    subtitle: 'No preservatives, just pure fruit'
  },
  {
    url: 'https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=1920&q=80',
    alt: 'Fresh fruits and juice preparation',
    title: 'Farm Fresh',
    subtitle: 'Sourced from local California farms'
  },
  {
    url: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=1920&q=80',
    alt: 'Refreshing watermelon juice',
    title: 'Stay Refreshed',
    subtitle: 'Perfect for sunny California days'
  },
  {
    url: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=1920&q=80',
    alt: 'Green healthy juice',
    title: 'Healthy Living',
    subtitle: 'Boost your day with natural vitamins'
  }
]

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length)
  }

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      {/* Images */}
      {carouselImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4">
            <h2 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
              {image.title}
            </h2>
            <p className="text-xl md:text-2xl drop-shadow-md">
              {image.subtitle}
            </p>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm transition-all"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm transition-all"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageCarousel
