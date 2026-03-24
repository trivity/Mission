import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Heart, Shield, Zap } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in facility management and customer service'
    },
    {
      icon: Heart,
      title: 'Community',
      description: 'Building strong relationships through sports and bringing people together'
    },
    {
      icon: Shield,
      title: 'Safety',
      description: 'Your safety is our priority with well-maintained facilities and trained staff'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Continuously improving our facilities and services to exceed expectations'
    }
  ];

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
                src="https://mcsportspark.org/global/images/fieldoverhead.jpg"
                alt="MCSP Aerial View"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-8 w-8 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Facilities Overview */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  World-Class Facilities
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md">
                      <span className="text-blue-600 font-bold text-xl">6</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Basketball Courts</h3>
                      <p className="text-gray-600">Professional-grade indoor courts perfect for tournaments and leagues</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md">
                      <span className="text-blue-600 font-bold text-xl">12</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Volleyball Courts</h3>
                      <p className="text-gray-600">State-of-the-art facilities hosting regional and national competitions</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md">
                      <span className="text-blue-600 font-bold text-xl">7</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Baseball/Softball Fields</h3>
                      <p className="text-gray-600">Regulation fields with professional amenities for players and spectators</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md">
                      <span className="text-blue-600 font-bold text-xl">+</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Soccer & More</h3>
                      <p className="text-gray-600">Additional facilities including soccer fields and on-site concessions</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src="https://mcsportspark.org/wp-content/uploads/2014/02/mcsports-17.jpg"
                  alt="MCSP Volleyball Courts"
                  className="rounded-2xl shadow-xl w-full"
                />
              </div>
            </div>
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
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-full shadow-lg">
              <Link to="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8 py-6 text-lg rounded-full border-2 border-white text-white hover:bg-white/10">
              <Link to="/faq">View FAQ</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
