import * as React from "react"
import { cn } from "@/lib/utils"

export interface TestimonialAuthor {
  name: string
  handle?: string
  avatar?: string
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
  className?: string
}

export function TestimonialCard({ 
  author, 
  text, 
  href, 
  className 
}: TestimonialCardProps) {
  return (
    <div className={cn(
      "min-w-[18rem] max-w-[22rem] rounded-2xl border border-[#32333A] bg-[#22232A] p-6 shadow-sm relative overflow-hidden group",
      className
    )}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10">
        <p className="mb-4 text-sm leading-relaxed text-[#99999A]">{text}</p>
        <div className="flex items-center gap-3">
          {author.avatar && (
            <img 
              src={author.avatar} 
              alt={author.name}
              className="h-10 w-10 rounded-full object-cover border-2 border-[#32333A]"
            />
          )}
          <div>
            <p className="text-sm font-medium leading-none text-white">{author.name}</p>
            {author.handle && (
              <p className="text-xs text-[#99999A]">{author.handle}</p>
            )}
          </div>
        </div>
        {href && (
          <a 
            href={href} 
            className="absolute inset-0 z-20"
            target="_blank" 
            rel="noopener noreferrer"
            aria-label={`Link to ${author.name}'s profile`}
          />
        )}
      </div>
    </div>
  )
} 