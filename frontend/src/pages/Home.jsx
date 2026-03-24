import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Trophy, Star, Calendar } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Home = () => {
  const facilities = [
    {
      title: 'Basketball',
      count: '6 Courts',
      image: 'https://images.unsplash.com/photo-1600534220378-df36338afc40?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODl8MHwxfHNlYXJjaHwyfHxiYXNrZXRiYWxsJTIwY291cnR8ZW58MHx8fHwxNzc0MzI1MDgwfDA&ixlib=rb-4.1.0&q=85',
      link: '/rates/basketball',
      description: 'Professional-grade indoor basketball courts'
    },
    {
      title: 'Volleyball',
      count: '12 Courts',
      image: 'https://images.pexels.com/photos/6203581/pexels-photo-6203581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      link: '/rates/volleyball',
      description: 'State-of-the-art volleyball facilities'
    },
    {
      title: 'Baseball/Softball',
      count: '7 Fields',
      image: 'https://images.unsplash.com/photo-1583960435304-37f2e1592c37?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwzfHxiYXNlYmFsbCUyMGZpZWxkfGVufDB8fHx8MTc3NDMyNTA4N3ww&ixlib=rb-4.1.0&q=85',
      link: '/rates/baseball-softball',
      description: 'Regulation baseball and softball diamonds'
    },
    {
      title: 'Soccer Fields',
      count: 'Multiple Fields',
      image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjV8MHwxfHNlYXJjaHwyfHxzb2NjZXIlMjBmaWVsZHxlbnwwfHx8fDE3NzQzMjUwOTB8MA&ixlib=rb-4.1.0&q=85',
      link: '/contact',
      description: 'Spacious outdoor soccer facilities'
    }
  ];

  const stats = [
    { icon: Users, value: '50,000+', label: 'Annual Visitors' },
    { icon: Trophy, value: '500+', label: 'Events Hosted' },
    { icon: Star, value: '4.8/5', label: 'Customer Rating' },
    { icon: Calendar, value: '365', label: 'Days Open' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/396300/pexels-photo-396300.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              The Premier Youth Sports Complex in{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">South Texas</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              World-class facilities featuring 6 basketball courts, 12 volleyball courts, 7 baseball/softball fields, and more. Where champions are made.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                <Link to="/contact">
                  Book Your Event
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-8 py-6 text-lg rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-300">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full mb-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our World-Class Facilities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              State-of-the-art sports venues designed for excellence and built for champions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-0">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{facility.title}</h3>
                    <p className="text-blue-300 font-semibold">{facility.count}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">{facility.description}</p>
                  <Button asChild variant="link" className="text-blue-600 hover:text-blue-700 p-0 h-auto font-semibold">
                    <Link to={facility.link}>
                      View Rates <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose MCSP?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-xl">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Magnificent Facilities</h3>
                    <p className="text-gray-600">Over 100,000 square feet of premier indoor and outdoor sports facilities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-xl">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Experienced Staff</h3>
                    <p className="text-gray-600">Friendly and professional team with years of event management experience</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-xl">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Comfortable Amenities</h3>
                    <p className="text-gray-600">On-site concessions, ample parking, and climate-controlled indoor facilities</p>
                  </div>
                </div>
              </div>
              <Button asChild size="lg" className="mt-8 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 rounded-full">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="MCSP Facilities"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Book Your Next Event?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact us today to reserve your spot at South Texas's premier sports facility
          </p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
