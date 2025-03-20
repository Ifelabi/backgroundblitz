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
  <div className="bg-secondary rounded-xl p-6 shadow-sm border border-gray-800">
    <div className="flex text-brand-400 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${i < rating ? "fill-current" : "fill-none"}`}
        />
      ))}
    </div>
    <p className="text-gray-300 mb-4 italic">"{quote}"</p>
    <div className="flex items-center">
      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
        <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
      </div>
      <div>
        <h4 className="font-semibold text-white">{name}</h4>
        <p className="text-gray-400 text-sm">{title}</p>
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
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      quote: "The speed and accuracy are incredible. I can process dozens of images in minutes with perfect results.",
      name: "Michael Chen",
      title: "Professional Photographer",
      rating: 5,
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      quote: "As a designer, I use this tool daily. The API integration with our workflow has saved us countless hours.",
      name: "Alex Rivera",
      title: "Creative Director",
      rating: 4,
      avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150"
    }
  ];

  return (
    <section className="py-16 md:py-24 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Trusted by Thousands of Professionals
          </h2>
          <p className="text-xl text-gray-300">
            Don't just take our word for it. Here's what our customers say.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
