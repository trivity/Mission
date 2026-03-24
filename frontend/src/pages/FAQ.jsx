import React from 'react';
import { ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const faqs = [
    {
      category: 'General Information',
      questions: [
        {
          q: 'What are your operating hours?',
          a: 'Mission Concepcion Sports Park is open Monday through Friday from 8:00 AM to 10:00 PM, and Saturday through Sunday from 7:00 AM to 11:00 PM. Special hours may apply during holidays and for special events.'
        },
        {
          q: 'Where are you located?',
          a: 'We are located at 714 E. Theo Ave., San Antonio, TX 78210. We are easily accessible from major highways and offer ample free parking for all visitors.'
        },
        {
          q: 'Do you offer concessions?',
          a: 'Yes! We have on-site concessions offering a variety of food and beverages including snacks, drinks, hot meals, and refreshments for athletes and spectators.'
        },
        {
          q: 'Is parking available?',
          a: 'Yes, we offer free parking for all visitors, teams, and spectators. Our parking lot can accommodate buses and large vehicles for tournament events.'
        }
      ]
    },
    {
      category: 'Booking & Reservations',
      questions: [
        {
          q: 'How do I book a facility?',
          a: 'You can book a facility by calling us at (210) 477-8900 or by submitting a contact form through our website. Our staff will work with you to find available dates and times that fit your needs.'
        },
        {
          q: 'How far in advance should I book?',
          a: 'We recommend booking at least 2-4 weeks in advance for regular events. For large tournaments or multi-day events, we suggest booking 2-3 months in advance to ensure availability.'
        },
        {
          q: 'What is your cancellation policy?',
          a: 'Cancellations made 72 hours or more before the scheduled event will receive a full refund. Cancellations made within 72 hours may be subject to a cancellation fee. Please contact us for specific details.'
        },
        {
          q: 'Can I reserve multiple courts/fields at once?',
          a: 'Absolutely! We offer custom tournament packages that include multiple court or field access. Contact us to discuss your specific needs and receive a customized quote.'
        },
        {
          q: 'Do you offer discounts for recurring rentals?',
          a: 'Yes, we offer special rates for leagues, recurring training sessions, and long-term bookings. Contact our office to discuss discount options for your organization.'
        }
      ]
    },
    {
      category: 'Facilities & Equipment',
      questions: [
        {
          q: 'Are your facilities climate-controlled?',
          a: 'Yes, all of our indoor facilities including basketball and volleyball courts are fully climate-controlled for year-round comfort.'
        },
        {
          q: 'What equipment is provided?',
          a: 'All facilities include scoreboards and basic equipment. Basketball courts include hoops and scoreboards. Baseball/softball fields include dugouts, scoreboards, and bases. Volleyball courts include net systems and scoreboards. Teams are responsible for bringing their own balls and sport-specific equipment.'
        },
        {
          q: 'Do you have locker rooms and restrooms?',
          a: 'Yes, we have clean, well-maintained restroom facilities throughout the complex. Locker rooms are available upon request for tournament events.'
        },
        {
          q: 'Is your facility ADA accessible?',
          a: 'Yes, Mission Concepcion Sports Park is fully ADA accessible with ramps, elevators, and accessible restroom facilities.'
        }
      ]
    },
    {
      category: 'Events & Tournaments',
      questions: [
        {
          q: 'Do you host tournaments?',
          a: 'Yes! We specialize in hosting youth sports tournaments for basketball, volleyball, baseball, and softball. We offer comprehensive tournament packages with multiple courts/fields, staff support, and event coordination.'
        },
        {
          q: 'Can you help promote my tournament?',
          a: 'Yes, we offer marketing and promotional assistance for larger tournaments. We can help with online promotion, social media marketing, and connecting you with local sports organizations.'
        },
        {
          q: 'Do you provide staff for events?',
          a: 'Yes, our professional staff is available to support your event. This includes facility management, scorekeeping assistance, and on-site coordination. Staff support is included in our tournament packages.'
        },
        {
          q: 'Can I bring in outside vendors?',
          a: 'Outside vendors must be approved in advance. Please contact us to discuss your specific needs. Our on-site concessions are available for all events.'
        }
      ]
    },
    {
      category: 'Payment & Pricing',
      questions: [
        {
          q: 'What payment methods do you accept?',
          a: 'We accept cash, credit cards (Visa, Mastercard, American Express, Discover), and checks. For large events, we can arrange payment plans.'
        },
        {
          q: 'Do you require a deposit?',
          a: 'Yes, we require a deposit to secure your reservation. The deposit amount varies based on the type and duration of your event. This will be discussed during the booking process.'
        },
        {
          q: 'Are there additional fees I should know about?',
          a: 'Our pricing is transparent. Additional fees may apply for extended hours, special equipment requests, or additional staff support. All fees will be clearly communicated during the booking process.'
        }
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Find answers to common questions about our facilities, booking, and services
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, catIndex) => (
              <div key={catIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-600">
                  {category.category}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`item-${catIndex}-${faqIndex}`}
                      className="border border-gray-200 rounded-lg px-6 hover:shadow-md transition-shadow duration-200"
                    >
                      <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600 py-4">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 pb-4 leading-relaxed">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Our friendly staff is here to help. Contact us today and we'll be happy to assist you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-full shadow-lg">
              <Link to="/contact">Contact Us</Link>
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

export default FAQ;
