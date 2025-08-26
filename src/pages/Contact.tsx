import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WaveBackground from "@/components/WaveBackground";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const contactSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.string().min(2, "Please add a subject").max(120, "Subject is too long"),
  message: z.string().min(10, "Please enter at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (values: ContactFormValues) => {
    try {
      // Replace with real API call or integration
      // For now, we mimic a short request
      await new Promise((r) => setTimeout(r, 600));

      toast({
        title: "Message sent",
        description: "Thanks for reaching out. We’ll get back to you shortly.",
      });
      form.reset();
      // eslint-disable-next-line no-console
      console.log("Contact form submission:", values);
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again in a moment.",
      });
    }
  };

  return (
    <>
      <WaveBackground />
      <Header />
      <main id="main-content" className="relative z-10 pt-28 pb-16">
        <section className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.65)]">
              Contact Us
            </h1>
            <p className="mt-3 text-base sm:text-lg text-gray-200/90 max-w-2xl mx-auto">
              Have questions about our cybersecurity solutions? Send us a message and our team will respond soon.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm p-5 sm:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full name</FormLabel>
                          <FormControl>
                            <Input placeholder="Jane Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="jane@company.com" {...field} />
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
                          <FormLabel>Phone (optional)</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="+1 555 123 4567" {...field} />
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
                          <FormLabel>Company (optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Cybersecurity Umbrella" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="Brief summary of your request" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea rows={6} placeholder="Tell us a bit about your needs or questions..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="pt-2 flex items-center gap-3">
                    <Button type="submit" disabled={form.formState.isSubmitting}>
                      {form.formState.isSubmitting ? "Sending..." : "Send message"}
                    </Button>
                    <a
                      href="mailto:contact@cybersecurityumbrella.com"
                      className="text-sm text-gray-200/80 hover:text-white underline underline-offset-4"
                    >
                      Or email us directly
                    </a>
                  </div>
                </form>
              </Form>
            </div>

            <div className="flex flex-col gap-6">
              <aside className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm p-5 sm:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
                <h2 className="text-xl font-semibold text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.65)]">Contact details (🇮🇳)</h2>
                <p className="mt-2 text-sm text-gray-300">
                  Our team is available Monday–Friday, 9am–6pm.
                </p>
                <div className="mt-4 space-y-3 text-sm">
                  <div>
                    <p className="text-gray-400">Email</p>
                    <a href="mailto:contact@cybersecurityumbrella.com" className="text-gray-200 hover:text-white">
                      contact@cybersecurityumbrella.com
                    </a>
                  </div>
                  <div>
                    <p className="text-gray-400">Phone</p>
                    <a href="tel:+15551234567" className="text-gray-200 hover:text-white">+1 (555) 123-4567</a>
                  </div>
                  <div>
                    <p className="text-gray-400">Head Office</p>
                    <p className="text-gray-200">Cybersecurity Umbrella<br />Global Operations</p>
                  </div>
                </div>
              </aside>

              <aside className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm p-5 sm:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
                <h2 className="text-xl font-semibold text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.65)]">Contact details (🇨🇦)</h2>
                <p className="mt-2 text-sm text-gray-300">
                  Our team is available Monday–Friday, 9am–6pm.
                </p>
                <div className="mt-4 space-y-3 text-sm">
                  <div>
                    <p className="text-gray-400">Email</p>
                    <a href="mailto:contact@cybersecurityumbrella.com" className="text-gray-200 hover:text-white">
                      contact@cybersecurityumbrella.com
                    </a>
                  </div>
                  <div>
                    <p className="text-gray-400">Phone</p>
                    <a href="tel:+15551234567" className="text-gray-200 hover:text-white">+1 (555) 123-4567</a>
                  </div>
                  <div>
                    <p className="text-gray-400">Head Office</p>
                    <p className="text-gray-200">Cybersecurity Umbrella<br />Global Operations</p>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}



