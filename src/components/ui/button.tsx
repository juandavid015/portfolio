import { Button as ButtonPrimitive } from '@base-ui/react/button';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

/**
 * Exported separately so links can look like buttons without becoming one:
 * `<Link className={buttonVariants()} />`.
 */
const buttonVariants = cva(
  'inline-flex min-h-12 shrink-0 items-center justify-center gap-2.5 px-5.5 font-mono text-[13px] tracking-[0.06em] whitespace-nowrap uppercase transition-colors select-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-foreground',
        outline: 'border hover:bg-foreground hover:text-background',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

function Button({
  className,
  variant,
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
