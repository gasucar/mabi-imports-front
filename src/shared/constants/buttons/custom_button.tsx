import { type ButtonHTMLAttributes, type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger" | "secondary-outline";
type ButtonSize = "sm" | "md" | "lg";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-white text-black hover:bg-white/90",
  secondary:
    "bg-gray-700 text-white hover:bg-gray-600",
  outline:
    "border border-gray-300 text-white hover:bg-white hover:text-black",
  "secondary-outline":
    "border border-gray-300 text-black hover:bg-black hover:text-white transition duration-300 ease-in-out",
  ghost:
    "text-gray-900 hover:bg-gray-100",
  danger:
    "bg-red-600 text-white hover:bg-red-700",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
};

const Spinner = () => (
  <svg
    className="animate-spin h-4 w-4"
    viewBox="0 0 24 24"
    fill="none"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
    />
  </svg>
);

const CustomButton = ({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  className = "",
  ...props
}: CustomButtonProps) => {
  const isDisabled = disabled || loading;

  const classes = `
    inline-flex items-center justify-center gap-2
    rounded-lg font-medium
    transition-colors duration-200
    disabled:opacity-50 disabled:cursor-not-allowed
    cursor-pointer
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${fullWidth ? "w-full" : ""}
    ${className}
  `;

  return (
    <button
      className={classes}
      disabled={isDisabled}
      aria-busy={loading}
      aria-disabled={isDisabled}
      {...props}
    >
      {loading ? (
        <>
          <Spinner />
          <span>Loading...</span>
        </>
      ) : (
        <>
          {leftIcon && <span className="flex items-center">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="flex items-center">{rightIcon}</span>}
        </>
      )}
    </button>
  );
};

export default CustomButton;