const menuItems = [
  {
    name: 'Sugarcane Juice',
    description: 'Pure, freshly pressed sugarcane juice. Naturally sweet and incredibly refreshing.',
    price: '$5.99',
    emoji: '🎋',
    color: 'from-lime-400 to-green-500',
    benefits: ['Natural Energy Boost', 'Rich in Antioxidants', 'Aids Digestion']
  },
  {
    name: 'Orange Juice',
    description: 'Classic freshly squeezed orange juice. Bursting with vitamin C and sunshine.',
    price: '$4.99',
    emoji: '🍊',
    color: 'from-orange-400 to-orange-500',
    benefits: ['High in Vitamin C', 'Immune Support', 'Heart Healthy']
  },
  {
    name: 'Mango Juice',
    description: 'Sweet and tropical mango juice made from ripe, handpicked mangoes.',
    price: '$5.99',
    emoji: '🥭',
    color: 'from-yellow-400 to-orange-400',
    benefits: ['Rich in Vitamins A & C', 'Boosts Immunity', 'Improves Skin Health']
  },
  {
    name: 'Lemon Juice',
    description: 'Refreshing pure lemon juice. Perfect for a tangy, zesty kick.',
    price: '$3.99',
    emoji: '🍋',
    color: 'from-yellow-300 to-yellow-400',
    benefits: ['Detoxifying', 'Aids Digestion', 'Rich in Vitamin C']
  },
  {
    name: 'Lemon & Mint Juice',
    description: 'A refreshing blend of zesty lemon and cool mint leaves. Ultimate summer drink.',
    price: '$4.99',
    emoji: '🍃',
    color: 'from-green-400 to-teal-500',
    benefits: ['Cooling Effect', 'Aids Digestion', 'Fresh Breath']
  },
  {
    name: 'Strawberry & Lemon Juice',
    description: 'Sweet strawberries perfectly balanced with tangy lemon. A delightful combination.',
    price: '$5.49',
    emoji: '🍓',
    color: 'from-pink-400 to-red-400',
    benefits: ['High in Antioxidants', 'Vitamin C Rich', 'Heart Healthy']
  },
  {
    name: 'Watermelon Juice',
    description: 'Light and hydrating watermelon juice. The perfect thirst quencher.',
    price: '$4.99',
    emoji: '🍉',
    color: 'from-red-400 to-pink-500',
    benefits: ['Super Hydrating', 'Low Calorie', 'Rich in Lycopene']
  }
]

function Menu() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Menu</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            All our juices are made fresh to order using 100% natural ingredients. No added sugar, no preservatives.
          </p>
        </div>
      </div>

      {/* Menu Items */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
            >
              {/* Gradient Header */}
              <div className={`bg-gradient-to-r ${item.color} p-8 text-center`}>
                <span className="text-7xl block transform group-hover:scale-110 transition-transform duration-300">
                  {item.emoji}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                  <span className="text-2xl font-bold text-green-600">{item.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>

                {/* Benefits */}
                <div className="space-y-2">
                  {item.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-16 bg-green-100 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-green-800 mb-4">Custom Orders Welcome!</h3>
          <p className="text-green-700 max-w-2xl mx-auto">
            Want a special blend? We're happy to create custom juice combinations for you.
            Just ask our friendly staff for recommendations!
          </p>
        </div>

        {/* Sizes */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Available Sizes</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 w-48">
              <div className="text-3xl mb-2">🥤</div>
              <h4 className="font-semibold text-gray-800">Small</h4>
              <p className="text-gray-500 text-sm">12 oz</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 w-48 border-2 border-green-500">
              <div className="text-3xl mb-2">🥤</div>
              <h4 className="font-semibold text-gray-800">Regular</h4>
              <p className="text-gray-500 text-sm">16 oz</p>
              <span className="inline-block mt-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                Most Popular
              </span>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 w-48">
              <div className="text-3xl mb-2">🥤</div>
              <h4 className="font-semibold text-gray-800">Large</h4>
              <p className="text-gray-500 text-sm">24 oz</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
