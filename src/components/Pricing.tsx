import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

interface PlanProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
  buttonLink: string;
}

const PricingPlan = ({ name, price, description, features, isPopular, buttonText, buttonLink }: PlanProps) => (
  <div className={`
    rounded-xl p-8 bg-white shadow-sm border transition-transform duration-300 hover:shadow-md hover:-translate-y-1
    ${isPopular ? 'border-brand-500 shadow-md relative' : 'border-gray-200'}
  `}>
    {isPopular && (
      <div className="absolute -top-4 left-0 right-0 flex justify-center">
        <span className="bg-brand-500 text-white text-sm font-medium px-3 py-1 rounded-full">
          Most Popular
        </span>
      </div>
    )}
    <h3 className="text-xl font-bold mb-2">{name}</h3>
    <div className="mb-4">
      <span className="text-4xl font-bold">{price}</span>
      {price !== "Free" && <span className="text-gray-600 ml-1">/month</span>}
    </div>
    <p className="text-gray-600 mb-6">{description}</p>
    <ul className="mb-8 space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
          <span className="text-gray-700">{feature}</span>
        </li>
      ))}
    </ul>
    <Link to={buttonLink}>
      <Button 
        className={`w-full ${isPopular ? 'bg-brand-500 hover:bg-brand-600' : 'bg-gray-800 hover:bg-gray-900'}`}
      >
        {buttonText}
      </Button>
    </Link>
  </div>
);

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-red-500 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-red-400">
            Choose the plan that works for your needs. No hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <PricingPlan
            name="Free"
            price="Free"
            description="Perfect for trying out the service."
            features={[
              "5 image removals per month",
              "Standard quality exports",
              "Max file size: 5 MB",
              "Web-based access"
            ]}
            buttonText="Start Free"
            buttonLink="/signup"
          />
          
          <PricingPlan
            name="Pro"
            price="$12"
            description="For professionals who need more."
            features={[
              "100 image removals per month",
              "HD quality exports",
              "Max file size: 15 MB",
              "Batch processing",
              "Priority support"
            ]}
            isPopular={true}
            buttonText="Get Pro"
            buttonLink="/signup?plan=pro"
          />
          
          <PricingPlan
            name="Business"
            price="$49"
            description="For teams and businesses."
            features={[
              "Unlimited image removals",
              "Ultra HD quality exports",
              "Max file size: 25 MB",
              "Advanced batch processing",
              "API access with 5,000 calls",
              "Dedicated support"
            ]}
            buttonText="Get Business"
            buttonLink="/signup?plan=business"
          />
        </div>
        
        <div className="bg-gray-50 p-8 rounded-xl mt-16 border border-gray-100">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Need a custom plan?</h3>
            <p className="text-gray-600">
              Contact us for custom pricing tailored to your specific needs.
            </p>
          </div>
          <div className="flex justify-center">
            <Link to="/contact">
              <Button variant="outline" className="mr-4">Contact Sales</Button>
            </Link>
            <Link to="/contact?type=quote">
              <Button className="bg-brand-500 hover:bg-brand-600">Get a Quote</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
