import { Logos3 } from "@/components/ui/logos3"

const demoData = {
  heading: "Trusted by these companies",
  logos: [
    {
      id: "logo-1",
      description: "Astro",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=200&h=100&fit=crop&crop=center",
      className: "h-7 w-auto",
    },
    {
      id: "logo-2",
      description: "Figma",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop&crop=center",
      className: "h-7 w-auto",
    },
    {
      id: "logo-3",
      description: "Next.js",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=200&h=100&fit=crop&crop=center",
      className: "h-7 w-auto",
    },
    {
      id: "logo-4",
      description: "React",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&h=100&fit=crop&crop=center",
      className: "h-7 w-auto",
    },
    {
      id: "logo-5",
      description: "shadcn/ui",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=100&fit=crop&crop=center",
      className: "h-7 w-auto",
    },
    {
      id: "logo-6",
      description: "Supabase",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=200&h=100&fit=crop&crop=center",
      className: "h-7 w-auto",
    },
    {
      id: "logo-7",
      description: "Tailwind CSS",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=100&fit=crop&crop=center",
      className: "h-4 w-auto",
    },
    {
      id: "logo-8",
      description: "Vercel",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=200&h=100&fit=crop&crop=center",
      className: "h-7 w-auto",
    },
  ],
};

function Logos3Demo() {
  return <Logos3 {...demoData} />;
}

export { Logos3Demo }; 