interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
  }
  
  export function Input({ 
    label,
    className = '',
    ...props 
  }: InputProps) {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
        )}
        <input
          className={`w-full rounded-full border border-gray-300 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent ${className}`}
          {...props}
        />
      </div>
    )
  }