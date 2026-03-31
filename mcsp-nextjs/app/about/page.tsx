export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Mission Concepcion Sports Park
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Where passion meets excellence in South Texas's premier multi-sport complex
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                A Multi-Sport Complex for Youth Sports
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Mission Concepcion Sports Park is the premier youth sports complex serving San Antonio, Bexar County, and the surrounding region. Our state-of-the-art facilities provide venues for basketball, volleyball, baseball, softball, soccer, and more.
                </p>
                <p>
                  Since our founding, we've been dedicated to providing world-class sports facilities that inspire excellence and foster community. Our magnificent 100,000+ square foot complex features top-tier amenities designed to accommodate tournaments, leagues, training sessions, and special events of all sizes.
                </p>
                <p>
                  We take pride in being a comfortable, friendly, and experienced partner for organizations hosting various sporting events. Our massive facility combined with our commitment to service makes us the natural choice for youth sports in South Texas.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/396300/pexels-photo-396300.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="MCSP Aerial View"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>

          {/* Values */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              { title: 'Excellence', description: 'We maintain the highest standards in facility management and customer service' },
              { title: 'Community', description: 'Building strong relationships through sports and bringing people together' },
              { title: 'Safety', description: 'Your safety is our priority with well-maintained facilities and trained staff' },
              { title: 'Innovation', description: 'Continuously improving our facilities and services to exceed expectations' }
            ].map((value, index) => (
              <div key={index} className="bg-white border rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience the MCSP Difference
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join thousands of athletes and organizations who trust us with their sporting events
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-flex items-center justify-center bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg rounded-full shadow-lg">
              Contact Us
            </a>
            <a href="/faq" className="inline-flex items-center justify-center px-8 py-3 text-lg rounded-full border-2 border-white text-white hover:bg-white/10">
              View FAQ
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
