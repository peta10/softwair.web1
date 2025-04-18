"use client";
import React, { useEffect, useRef } from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { Star, Heart, TrendingUp, BarChart, Headset, RefreshCw } from 'lucide-react';

const content = [
  {
    title: "1. AI Reviews & Referrals",
    description:
      "Build a stellar online reputation. We strategically prompt happy customers for reviews, ensuring a consistent, positive stream (not a suspicious surge). This boosts SEO visibility and builds crucial trust, directly increasing the effectiveness of our next step...",
    content: (
      <div className="flex h-full w-full items-center justify-center rounded-md bg-gradient-to-br from-orange-400 to-orange-500 text-white shadow-lg">
        <Star className="w-20 h-20 drop-shadow-md" />
      </div>
    ),
  },
  {
    title: "2. AI Website Lead Nurture",
    description:
      "Capitalize on your enhanced reputation. This AI chatbot engages website visitors drawn in by your positive reviews. It answers questions 24/7, qualifies leads, and books appointments, turning increased traffic into tangible opportunities, feeding directly into...",
    content: (
      <div className="flex h-full w-full items-center justify-center rounded-md bg-gradient-to-br from-purple-400 to-purple-500 text-white shadow-lg">
        <Heart className="w-20 h-20 drop-shadow-md" />
      </div>
    ),
  },
  {
    title: "3. Lead Gen (Paid Ads)",
    description:
      "Amplify your reach with intelligent ads. Using data from website interactions and successful conversions, our AI optimizes ad spend across platforms to attract leads similar to those already nurtured, maximizing ROI and providing fuel for...",
    content: (
      <div className="flex h-full w-full items-center justify-center rounded-md bg-gradient-to-br from-pink-400 to-pink-500 text-white shadow-lg">
        <TrendingUp className="w-20 h-20 drop-shadow-md" />
      </div>
    ),
  },
  {
    title: "4. Sales Coaching",
    description:
      "Convert more leads into customers. AI analyzes sales interactions (calls, emails) from nurtured and ad-generated leads, providing actionable insights and coaching to improve your team's closing rates, enhancing the performance derived from...",
    content: (
      <div className="flex h-full w-full items-center justify-center rounded-md bg-gradient-to-br from-teal-400 to-teal-500 text-white shadow-lg">
        <BarChart className="w-20 h-20 drop-shadow-md" />
      </div>
    ),
  },
  {
    title: "5. AI Receptionist",
    description:
      "Ensure seamless customer experience and capture every opportunity. The AI receptionist handles inquiries and bookings generated from all previous steps (reviews, web chat, ads), freeing up your coached sales team to focus on high-value interactions, while also enabling...",
    content: (
      <div className="flex h-full w-full items-center justify-center rounded-md bg-gradient-to-br from-yellow-400 to-yellow-500 text-white shadow-lg">
        <Headset className="w-20 h-20 drop-shadow-md" />
      </div>
    ),
  },
  {
    title: "6. AI Reengagement Campaigns",
    description:
      "Maximize lifetime value and reactivate leads. Using insights from the entire funnel, AI identifies and targets past customers or cold leads with personalized campaigns, bringing them back into the ecosystem nurtured by positive reviews and efficient service.",
    content: (
      <div className="flex h-full w-full items-center justify-center rounded-md bg-gradient-to-br from-blue-400 to-blue-500 text-white shadow-lg">
        <RefreshCw className="w-20 h-20 drop-shadow-md" />
      </div>
    ),
  },
];

export default function StickyScrollRevealDemo() {
  const observerRef = useRef<MutationObserver | null>(null);
  const intersectionObserverRef = useRef<IntersectionObserver | null>(null);

  // Function to update the step counter
  const updateStepCounter = (index: number) => {
    const stepCounter = document.getElementById('current-step');
    if (stepCounter) {
      stepCounter.textContent = String(index + 1);
    }
  };

  useEffect(() => {
    // First approach: Watch for active card changes using MutationObserver
    observerRef.current = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-active') {
          const activeCard = document.querySelector('[data-active="true"]');
          if (activeCard) {
            const headings = document.querySelectorAll('.sticky-scroll-container h2');
            const activeIndex = Array.from(headings).indexOf(activeCard);
            if (activeIndex >= 0) {
              updateStepCounter(activeIndex);
            }
          }
        }
      });
    });

    // Second approach: Using Intersection Observer as a fallback
    intersectionObserverRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const headings = document.querySelectorAll('.sticky-scroll-container h2');
            const activeIndex = Array.from(headings).indexOf(target);
            if (activeIndex >= 0) {
              updateStepCounter(activeIndex);
            }
          }
        });
      },
      { threshold: 0.5, root: document.querySelector('.sticky-scroll-container') }
    );

    // Start observing
    const scrollContainer = document.querySelector('.sticky-scroll-container');
    if (scrollContainer) {
      const headings = scrollContainer.querySelectorAll('h2');
      
      // Set up the mutation observer
      headings.forEach((heading) => {
        observerRef.current?.observe(heading, { attributes: true });
      });
      
      // Set up the intersection observer
      headings.forEach((heading) => {
        intersectionObserverRef.current?.observe(heading);
      });

      // Set initial value
      updateStepCounter(0);
    }

    // Clean up all observers on unmount
    return () => {
      observerRef.current?.disconnect();
      intersectionObserverRef.current?.disconnect();
    };
  }, []);

  // Manually track active card from StickyScroll component
  const handleActiveCardChange = (index: number) => {
    updateStepCounter(index);
  };

  return (
    <div className="w-full py-4 sticky-scroll-container">
      <StickyScroll 
        content={content} 
        contentClassName="shadow-xl" 
        onActiveCardChange={handleActiveCardChange}
      />
    </div>
  );
} 