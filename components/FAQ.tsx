
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQItem } from '../types';

const faqData: FAQItem[] = [
  {
    question: "Is this for beginners?",
    answer: "Yes. Our explanations are constructed from first principles, meaning no prior technical knowledge is required to reach a deep understanding."
  },
  {
    question: "Is this free?",
    answer: "No. VEMLY is a paid resource. We prioritize depth, logical rigor, and clarity—elements often missing from free, fragmented content."
  },
  {
    question: "Why is this recommended?",
    answer: "Because conceptual clarity is the foundation of all practical knowledge. We focus on building mental models that last, rather than temporary memorization."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white border-t border-stone-100">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-stone-950 leading-tight">Questions on Clarity</h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="bg-stone-50 border border-stone-200/60 rounded-2xl overflow-hidden transition-all duration-300">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-8 text-left hover:bg-stone-100/50 transition-colors"
              >
                <span className="font-bold text-stone-900 text-lg leading-snug">{item.question}</span>
                {openIndex === index ? <ChevronUp className="text-emerald-800" size={20} /> : <ChevronDown className="text-stone-400" size={20} />}
              </button>
              {openIndex === index && (
                <div className="px-8 pb-8 text-stone-600 leading-relaxed font-light text-base animate-in slide-in-from-top-4 duration-300">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
