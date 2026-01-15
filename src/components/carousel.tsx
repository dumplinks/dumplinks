 
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop', alt: 'Mountain landscape' },
    { url: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=800&h=500&fit=crop', alt: 'Coastal view' },
    { url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=500&fit=crop', alt: 'Forest path' },
    { url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=500&fit=crop', alt: 'Natural scenery' },
    { url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=500&fit=crop', alt: 'Sunset view' }
  ];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-8">
      <div className="max-w-4xl w-full">
        <div className="relative group">
          {/* Main image container */}
          <div className="relative h-96 overflow-hidden rounded-xl shadow-2xl">
            <img
              src={images[currentIndex].url}
              alt={images[currentIndex].alt}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-900 rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-900 rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-white w-8'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Image counter */}
        <div className="text-center mt-6 text-white/70 text-sm font-medium">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}

