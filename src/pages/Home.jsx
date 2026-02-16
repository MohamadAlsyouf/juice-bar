import { Link } from 'react-router-dom'
import ImageCarousel from '../components/ImageCarousel'

function Home() {
  const features = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: '100% Fresh',
      description: 'Every juice is made fresh to order using only the finest ingredients.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Locally Sourced',
      description: 'We partner with local California farms to bring you the freshest produce.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'LA & OC Service',
      description: 'Based in Anaheim, we proudly serve all of Los Angeles and Orange County.'
    }
  ]

  const popularJuices = [
    { name: 'Sugarcane Juice', emoji: '🎋', color: 'bg-lime-100' },
    { name: 'Orange Juice', emoji: '🍊', color: 'bg-orange-100' },
    { name: 'Mango Juice', emoji: '🥭', color: 'bg-yellow-100' },
    { name: 'Watermelon Juice', emoji: '🍉', color: 'bg-red-100' },
  ]

  return (
    <div>
      {/* Hero Carousel */}
      <ImageCarousel />

      {/* Welcome Section */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Welcome to <span className="text-green-600">Juice Bar</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Experience the pure taste of freshly squeezed juices made with love in Anaheim, California.
            We bring the goodness of fresh fruits directly to your glass, serving Los Angeles and Orange County.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/menu"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
            >
              View Our Menu
            </Link>
            <Link
              to="/catering"
              className="inline-block bg-white text-green-600 border-2 border-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors"
            >
              Book Catering
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-gradient-to-b from-green-50 to-white border border-green-100 hover:shadow-xl transition-shadow"
              >
                <div className="text-green-600 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Juices Preview */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            Our Popular Juices
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Made fresh daily with the finest ingredients
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {popularJuices.map((juice, index) => (
              <div
                key={index}
                className={`${juice.color} rounded-2xl p-6 text-center hover:scale-105 transition-transform cursor-pointer shadow-md`}
              >
                <span className="text-5xl mb-3 block">{juice.emoji}</span>
                <h3 className="font-semibold text-gray-800">{juice.name}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/menu"
              className="inline-block text-green-600 font-semibold hover:text-green-700 transition-colors"
            >
              See Full Menu →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Planning an Event?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            We cater to all of Los Angeles and Orange County. Let us bring fresh, delicious juices to your next event!
          </p>
          <Link
            to="/catering"
            className="inline-block bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors shadow-lg"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
