import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const BaseballRates = () => {
  const packages = [
    {
      title: 'Hourly Rental',
      price: '$75',
      unit: 'per field/hour',
      description: 'Perfect for practice and skill development',
      features: [
        'Single field access',
        'Regulation baseball/softball field',
        'Dugout access',
        'Scoreboard included',
        'Parking for teams and families'
      ]
    },
    {
      title: 'Half-Day Package',
      price: '$500',
      unit: 'per field',
      popular: true,
      description: 'Ideal for training camps and small tournaments',
      features: [
        'Up to 6 hours of play',
        'Priority field access',
        'Regulation field with dugouts',
        'Scoreboard and equipment',
        'On-site concessions',
        'Dedicated staff support'
      ]
    },
    {
      title: 'Full-Day Package',
      price: '$850',
      unit: 'per field',
      description: 'Best for tournaments and all-day events',
      features: [
        'Up to 12 hours of play',
        'Priority field access',
        'Regulation field with dugouts',
        'Scoreboard and equipment',
        'On-site concessions',
        'Dedicated staff support',
        'Field preparation and maintenance'
      ]
    },
    {
      title: 'Tournament Package',
      price: 'Custom',
      unit: 'contact us',
      description: 'Multi-field access for large tournaments',
      features: [
        'Multiple field access (up to 7 fields)',
        'Flexible scheduling',
        'Tournament management support',
        'Professional staff coordination',
        'Marketing and promotion assistance',
        'Custom pricing based on needs'
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1583960435304-37f2e1592c37?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwzfHxiYXNlYmFsbCUyMGZpZWxkfGVufDB8fHx8MTc3NDMyNTA4N3ww&ixlib=rb-4.1.0&q=85')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Baseball & Softball Field Rentals
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-4">
              7 Professional Baseball/Softball Fields
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Regulation outdoor fields perfect for tournaments, leagues, training, and recreational play for all age groups
            </p>
          </div>
        </div>
      </section>

      {/* Facility Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">7</div>
              <div className="text-gray-600">Professional Fields</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Regulation Size</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">2</div>
              <div className="text-gray-600">Dugouts Per Field</div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-16">
            <img
              src="https://images.unsplash.com/photo-1583960435304-37f2e1592c37?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwzfHxiYXNlYmFsbCUyMGZpZWxkfGVufDB8fHx8MTc3NDMyNTA4N3ww&ixlib=rb-4.1.0&q=85"
              alt="Baseball Fields"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Flexible Pricing Options
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the package that fits your event needs and budget
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 ${pkg.popular ? 'ring-2 ring-blue-600 transform scale-105' : ''}`}>
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                    POPULAR
                  </div>
                )}
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                    {pkg.title}
                  </CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-blue-600">{pkg.price}</span>
                    <span className="text-gray-600 text-sm ml-2">/ {pkg.unit}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{pkg.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full">
                    <Link to="/contact">Book Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              What's Included
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Check className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Regulation Fields</h3>
                    <p className="text-gray-600 text-sm">Professional-grade baseball and softball diamonds</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Check className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Dugouts</h3>
                    <p className="text-gray-600 text-sm">Covered dugouts for both teams</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Check className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Scoreboards</h3>
                    <p className="text-gray-600 text-sm">Electronic scoreboards on each field</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Check className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Concessions</h3>
                    <p className="text-gray-600 text-sm">On-site food and refreshments available</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Check className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Bleacher Seating</h3>
                    <p className="text-gray-600 text-sm">Spectator seating along baselines</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Check className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Ample Parking</h3>
                    <p className="text-gray-600 text-sm">Free parking for teams and spectators</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Book Your Field?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact us today for availability and custom tournament packages
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-full shadow-lg">
              <Link to="/contact">
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8 py-6 text-lg rounded-full border-2 border-white text-white hover:bg-white/10">
              <a href="tel:2104778900">Call (210) 477-8900</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BaseballRates;
