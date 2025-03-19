
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  const faqs = [
    {
      question: "How accurate is the background removal?",
      answer: "Our AI technology is trained on millions of images and can accurately detect and remove backgrounds from almost any image. It works especially well with product photos, portraits, and objects with clear outlines. For very complex images or fine details like hair, the results are still impressive but may occasionally require minor touch-ups."
    },
    {
      question: "What file formats do you support?",
      answer: "We support all common image formats including JPG, PNG, WEBP, and HEIC. The output is available as PNG with transparency or JPG with a custom background color or image."
    },
    {
      question: "How many images can I process?",
      answer: "It depends on your plan. The Free plan includes 5 images per month, Pro offers 100 images per month, and Business provides unlimited processing. Check our pricing section for more details."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we take data security seriously. All uploads are secured with SSL encryption. We do not store your original or processed images longer than necessary for the service to work (typically 24 hours), unless you specifically save them to your account."
    },
    {
      question: "Can I use BackgroundBlitz for commercial purposes?",
      answer: "Absolutely! All our plans, including the free tier, allow for commercial use of the processed images. There are no licensing restrictions on the output images."
    },
    {
      question: "Do you offer a bulk upload feature?",
      answer: "Yes, our Pro and Business plans include batch processing, allowing you to upload and process multiple images at once. Business plans also include API access for programmatic processing."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about BackgroundBlitz.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white shadow-sm border border-gray-100 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 text-left text-lg font-medium hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Have more questions? We're here to help.
          </p>
          <a href="#" className="text-brand-600 font-medium hover:text-brand-700">
            Contact our support team &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default Faq;
