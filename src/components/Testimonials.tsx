
import React from "react";
import { Star } from "lucide-react";

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  rating: number;
  avatarUrl: string;
}

const Testimonial = ({ quote, name, title, rating, avatarUrl }: TestimonialProps) => (
  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
    <div className="flex text-yellow-400 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${i < rating ? "fill-current" : "fill-none"}`}
        />
      ))}
    </div>
    <p className="text-gray-700 mb-4 italic">"{quote}"</p>
    <div className="flex items-center">
      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
        <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
      </div>
      <div>
        <h4 className="font-semibold text-gray-900">{name}</h4>
        <p className="text-gray-600 text-sm">{title}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      quote: "BackgroundBlitz has been a game-changer for our e-commerce store. Product photos look so much more professional now.",
      name: "Sarah Johnson",
      title: "E-commerce Manager",
      rating: 5,
      avatarUrl: "/placeholder.svg"
    },
    {
      quote: "The speed and accuracy are incredible. I can process dozens of images in minutes with perfect results.",
      name: "Michael Chen",
      title: "Professional Photographer",
      rating: 5,
      avatarUrl: "/placeholder.svg"
    },
    {
      quote: "As a designer, I use this tool daily. The API integration with our workflow has saved us countless hours.",
      name: "Alex Rivera",
      title: "Creative Director",
      rating: 4,
      avatarUrl: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-16 md:py-24 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Thousands of Professionals
          </h2>
          <p className="text-xl text-gray-700">
            Don't just take our word for it. Here's what our customers say.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
            <img src="/placeholder.svg" alt="Company Logo" className="h-10" />
          </div>
          <div className="opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
            <img src="/placeholder.svg" alt="Company Logo" className="h-10" />
          </div>
          <div className="opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
            <img src="/placeholder.svg" alt="Company Logo" className="h-10" />
          </div>
          <div className="opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
            <img src="/placeholder.svg" alt="Company Logo" className="h-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
