import type { ReactNode } from 'react';

interface PortfolioBackgroundProps {
  children: ReactNode;
}

const PortfolioBackground = ({ children }: PortfolioBackgroundProps) => {
  return (
    <div className="relative">
      {/* Fixed Animated Background */}
      <div className="fixed inset-0 z-0">
        {/* Floating particles */}
        <div className="absolute w-2 h-2 bg-gray-600 rounded-full animate-bounce" style={{
          top: '20%',
          left: '10%',
          animationDelay: '0s',
          animationDuration: '3s'
        }}></div>
        <div className="absolute w-1 h-1 bg-gray-500 rounded-full animate-bounce" style={{
          top: '60%',
          left: '80%',
          animationDelay: '1s',
          animationDuration: '4s'
        }}></div>
        <div className="absolute w-3 h-3 bg-gray-700 rounded-full animate-bounce" style={{
          top: '80%',
          left: '20%',
          animationDelay: '2s',
          animationDuration: '5s'
        }}></div>
        <div className="absolute w-1.5 h-1.5 bg-gray-600 rounded-full animate-bounce" style={{
          top: '30%',
          left: '70%',
          animationDelay: '0.5s',
          animationDuration: '3.5s'
        }}></div>
        <div className="absolute w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{
          top: '50%',
          left: '90%',
          animationDelay: '1.5s',
          animationDuration: '4.5s'
        }}></div>
        <div className="absolute w-1 h-1 bg-gray-600 rounded-full animate-bounce" style={{
          top: '10%',
          left: '30%',
          animationDelay: '2.5s',
          animationDuration: '3.8s'
        }}></div>
        <div className="absolute w-2.5 h-2.5 bg-gray-700 rounded-full animate-bounce" style={{
          top: '40%',
          left: '5%',
          animationDelay: '0.8s',
          animationDuration: '4.2s'
        }}></div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-black/50"></div>
        
        {/* Animated grid lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" style={{
            backgroundImage: 'linear-gradient(rgba(156, 163, 175, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(156, 163, 175, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite'
          }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 bg-gray-950">
        {children}
      </div>

      
    </div>
  );
};

export default PortfolioBackground;
