export function Container({ 
    children,
    className = ''
  }: {
    children: React.ReactNode;
    className?: string;
  }) {
    return (
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
        {children}
      </div>
    );
  }