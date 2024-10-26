interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary'
    size?: 'sm' | 'md' | 'lg'
  }
  
  export function Button({ 
    children, 
    variant = 'primary', 
    size = 'md',
    className = '',
    ...props 
  }: ButtonProps) {
    const baseStyles = "rounded-full font-medium transition-colors"
    const variants = {
      primary: "bg-black text-white hover:bg-gray-800",
      secondary: "bg-white text-black border border-gray-200 hover:bg-gray-50"
    }
    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg"
    }
  
    return (
      <button
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    )
  }