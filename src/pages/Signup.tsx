import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useToast } from '@/components/ui/use-toast';

const signupSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .max(50, 'Password must not exceed 50 characters')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    ),
  confirmPassword: z.string(),
  terms: z.boolean().refine(val => val === true, {
    message: 'You must accept the terms and conditions'
  })
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
});

type SignupFormData = z.infer<typeof signupSchema>;

const Signup = () => {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      terms: false
    }
  });

  const onSubmit = async (data: SignupFormData) => {
    try {
      // TODO: Implement actual signup logic here
      console.log('Form data:', data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Success!",
        description: "Your account has been created successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create account. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary px-4">
      <div className="max-w-md w-full space-y-8 bg-secondary-foreground p-8 rounded-xl shadow-lg">
        <div>
          <Link to="/" className="text-xl font-bold text-red-500 flex items-center justify-center mb-8">
            <span className="bg-brand-500 text-white p-1 rounded mr-2">BG</span>
            BackgroundBlitz
          </Link>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-red-500">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-brand-500 hover:text-brand-400">
              Sign in
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email address
              </label>
              <input
                id="email"
                {...register('email')}
                type="email"
                autoComplete="email"
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-700 bg-secondary text-white placeholder-gray-400 focus:outline-none focus:ring-brand-500 focus:border-brand-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                Password
              </label>
              <input
                id="password"
                {...register('password')}
                type="password"
                autoComplete="new-password"
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-700 bg-secondary text-white placeholder-gray-400 focus:outline-none focus:ring-brand-500 focus:border-brand-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-300 mb-1">
                Confirm Password
              </label>
              <input
                id="confirm-password"
                {...register('confirmPassword')}
                type="password"
                autoComplete="new-password"
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-700 bg-secondary text-white placeholder-gray-400 focus:outline-none focus:ring-brand-500 focus:border-brand-500 focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-500">{errors.confirmPassword.message}</p>
              )}
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="terms"
              {...register('terms')}
              type="checkbox"
              className="h-4 w-4 text-brand-500 focus:ring-brand-500 border-gray-700 rounded bg-secondary"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-400">
              I agree to the{' '}
              <Link to="/terms" className="font-medium text-brand-500 hover:text-brand-400">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to="/privacy" className="font-medium text-brand-500 hover:text-brand-400">
                Privacy Policy
              </Link>
            </label>
          </div>
          {errors.terms && (
            <p className="text-sm text-red-500">{errors.terms.message}</p>
          )}

          <div>
            <Button
              type="submit"
              className="w-full bg-brand-500 hover:bg-brand-600"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Creating Account...' : 'Create Account'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup; 