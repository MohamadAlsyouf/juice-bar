function About() {
  const values = [
    {
      title: "Fresh Ingredients",
      description:
        "We source the freshest fruits daily from local California farms to ensure every juice is packed with natural goodness.",
      icon: "🍊",
    },
    {
      title: "No Preservatives",
      description:
        "Our juices contain zero preservatives, artificial colors, or added sugars. Just pure, natural fruit.",
      icon: "🌿",
    },
    {
      title: "Community First",
      description:
        "We believe in giving back. A portion of our proceeds supports local community programs and sustainable farming.",
      icon: "❤️",
    },
    {
      title: "Sustainability",
      description:
        "We use eco-friendly packaging and work with farms that practice sustainable agriculture.",
      icon: "♻️",
    },
  ];

  const team = [
    {
      name: "Sondos",
      role: "Founder & Head Juicer",
      bio: "Sondos started Juice Bar with a simple mission: bring fresh, healthy juices to their community.",
    },
    {
      name: "Saddam",
      role: "Operations Manager",
      bio: "Saddam ensures every customer gets the freshest juice experience possible.",
    },
    {
      name: "Mohamad",
      role: "Web Developer",
      bio: "Mohamad is the web developer and tech support for the website.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Us
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Born in Anaheim, serving Southern California with fresh, delicious
            juices made with love.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Juice Bar started in 2018 with a simple idea: everyone
                  deserves access to fresh, healthy, and delicious juices. Our
                  founder, Sondos and Saddam, have lived in Anaheim surrounded
                  by California's incredible produce and wanted to share that
                  bounty with their community.
                </p>
                <p>
                  What began as a small cart at the local farmers' market
                  quickly grew into a beloved local business. Today, we proudly
                  serve customers throughout Los Angeles and Orange County,
                  bringing the same commitment to freshness and quality that we
                  started with.
                </p>
                <p>
                  Every juice we make is squeezed fresh to order. We never use
                  concentrates, preservatives, or added sugars. When you drink
                  our juice, you're tasting pure, natural fruit at its finest.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-green-100 to-green-200 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">🍹</div>
                  <p className="text-2xl font-bold text-green-700">
                    Since 2018
                  </p>
                  <p className="text-green-600">Serving Fresh Juices</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-yellow-400 rounded-2xl p-6 shadow-lg">
                <p className="text-4xl font-bold text-yellow-900">5000+</p>
                <p className="text-yellow-800">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-shadow"
              >
                <span className="text-5xl block mb-4">{value.icon}</span>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-orange-400 to-yellow-400 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Serving LA & Orange County
                </h2>
                <p className="text-white/90 text-lg mb-6">
                  Based in the heart of Anaheim, we're proud to serve fresh
                  juices across all of Los Angeles and Orange County. Whether
                  you're in Downtown LA, Irvine, Long Beach, or anywhere in
                  between, we've got you covered.
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Anaheim",
                    "Los Angeles",
                    "Irvine",
                    "Santa Ana",
                    "Long Beach",
                    "Pasadena",
                  ].map((city) => (
                    <span
                      key={city}
                      className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <div className="inline-block bg-white/20 backdrop-blur-sm rounded-2xl p-8">
                  <svg
                    className="w-32 h-32 mx-auto text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="text-white font-semibold mt-4">
                    We Deliver & Cater
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <span className="text-4xl text-white font-bold">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-green-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
