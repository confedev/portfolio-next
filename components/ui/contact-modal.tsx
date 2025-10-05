'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useForm as useFormspreeForm } from '@formspree/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle, Send, X, AlertCircle } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Content } from '@/config/texts/types';
import { cn } from '@/lib/utils';

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  t: Content;
}

const createFormSchema = (t: Content) =>
  z.object({
    firstName: z.string().min(1, t.contactModal.required),
    lastName: z.string().min(1, t.contactModal.required),
    email: z
      .string()
      .min(1, t.contactModal.required)
      .email(t.contactModal.invalidEmail),
    company: z.string().min(1, t.contactModal.required),
    phone: z.string().optional(),
  });

type FormState = 'idle' | 'sending' | 'success' | 'error';

export function ContactModal({ open, onOpenChange, t }: ContactModalProps) {
  const [formState, setFormState] = useState<FormState>('idle');

  // Formspree hook
  const [formspreeState, submitToFormspree] = useFormspreeForm(
    process.env.NEXT_PUBLIC_FORMSPREE_ID,
  );

  const formSchema = createFormSchema(t);
  type FormData = z.infer<typeof formSchema>;

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      phone: '',
    },
  });

  // Handle Formspree state automatically
  useEffect(() => {
    if (formspreeState.succeeded) {
      setFormState('success');
      form.reset();
      // Auto-close after 3 seconds
      const successTimer = setTimeout(() => {
        setFormState('idle');
        onOpenChange(false);
      }, 3000);
      return () => clearTimeout(successTimer);
    } else if (formspreeState.errors && formspreeState.errors.length > 0) {
      setFormState('error');
      // Return to initial state after 3 seconds
      const errorTimer = setTimeout(() => setFormState('idle'), 3000);
      return () => clearTimeout(errorTimer);
    } else if (formspreeState.submitting) {
      setFormState('sending');
    }
  }, [
    formspreeState.succeeded,
    formspreeState.submitting,
    formspreeState.errors,
  ]);

  // Reset state when modal closes
  useEffect(() => {
    if (!open) {
      setFormState('idle');
    }
  }, [open]);

  const onSubmit = async (data: FormData) => {
    // State is handled automatically with useEffect
    await submitToFormspree(data);
  };

  const handleClose = () => {
    if (formState !== 'sending') {
      form.reset();
      setFormState('idle');
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-green-400">
            <Send className="h-5 w-5" />
            {t.contactModal.title}
          </DialogTitle>
          <DialogDescription>{t.contactModal.description}</DialogDescription>
        </DialogHeader>

        {formState === 'success' && (
          <div className="flex flex-col items-center justify-center py-8 space-y-4">
            <div className="relative">
              <CheckCircle className="h-16 w-16 text-green-400 animate-bounce" />
              <div className="absolute inset-0 rounded-full bg-green-400/20 animate-ping" />
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-lg font-semibold text-green-400">
                {t.contactModal.success}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t.contactModal.successMessage}
              </p>
              <p className="text-xs text-muted-foreground/70">
                {t.contactModal.autoCloseMessage}
              </p>
            </div>
          </div>
        )}

        {formState === 'error' && (
          <div className="flex flex-col items-center justify-center py-8 space-y-4">
            <div className="relative">
              <AlertCircle className="h-16 w-16 text-red-400 animate-pulse" />
              <div className="absolute inset-0 rounded-full bg-red-400/20 animate-ping" />
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-lg font-semibold text-red-400">
                {t.contactModal.error}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t.contactModal.errorMessage}
              </p>
              <Button
                onClick={() => setFormState('idle')}
                variant="outline"
                size="sm"
                className="mt-4 border-red-500/20 hover:bg-red-500/10"
              >
                {t.contactModal.tryAgain}
              </Button>
            </div>
          </div>
        )}

        {(formState === 'idle' || formState === 'sending') && (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-green-400">
                        {t.contactModal.firstName}
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="border-green-500/20 focus:border-green-400 bg-background/50"
                          disabled={formState === 'sending'}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-green-400">
                        {t.contactModal.lastName}
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="border-green-500/20 focus:border-green-400 bg-background/50"
                          disabled={formState === 'sending'}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-green-400">
                      {t.contactModal.email}
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        className="border-green-500/20 focus:border-green-400 bg-background/50"
                        disabled={formState === 'sending'}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-green-400">
                      {t.contactModal.company}
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="border-green-500/20 focus:border-green-400 bg-background/50"
                        disabled={formState === 'sending'}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-green-400">
                      {t.contactModal.phone} {t.contactModal.optional}
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="tel"
                        placeholder="+1 234 567 8900"
                        className="border-green-500/20 focus:border-green-400 bg-background/50"
                        disabled={formState === 'sending'}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleClose}
                  disabled={formState === 'sending'}
                  className="flex-1 border-green-500/20 hover:bg-green-500/10"
                >
                  <X className="h-4 w-4 mr-2" />
                  {t.contactModal.cancel}
                </Button>

                <Button
                  type="submit"
                  disabled={formState === 'sending'}
                  className={cn(
                    'flex-1 bg-green-600 hover:bg-green-700 text-white',
                    formState === 'sending' && 'animate-pulse',
                  )}
                >
                  {formState === 'sending' ? (
                    <>
                      <div className="h-4 w-4 mr-2 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      {t.contactModal.sending}
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      {t.contactModal.send}
                    </>
                  )}
                </Button>
              </div>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
}
