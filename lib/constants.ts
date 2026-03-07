export const SCENES = [
  {
    id: 'hero',
    folder: 'vortex',
    frames: Array.from({ length: 27 }, (_, i) => 
      `/assets-flow/vortex/_scene_7__glass_water_showcaseconceptafter_the_fin_c6c986f8ea__online-video-cutter_com__${(i + 1).toString().padStart(3, '0')}.png`
    ),
    title: "Pixel 'N' Purpose",
    subtitle: "A Cinematic Experience",
    content: null // Hero usually doesn't have a dedicated content section below it in this flow
  },
  {
    id: 'websites',
    folder: 'website',
    frames: [
      ...Array.from({ length: 11 }, (_, i) => `/assets-flow/website/${i + 1}.png`),
      ...Array.from({ length: 13 }, (_, i) => 
        `/assets-flow/website/_scene_7__glass_water_showcaseconceptafter_the_fin_c6c986f8ea__online-video-cutter_com__${(i + 39).toString().padStart(3, '0')}.png`
      )
    ],
    title: "Websites",
    subtitle: "Structured Digital Architecture",
    content: {
      description: "We build digital ecosystems that breathe with your brand. High-performance, SEO-first, and visually uncompromising.",
      cards: [
        { title: "E-Commerce", text: "Luxury shopping experiences that convert through elegance." },
        { title: "Portfolio Sites", text: "Minimalist stages for maximalist creators." },
        { title: "Brand Hubs", text: "The central nervous system of your digital presence." }
      ]
    }
  },
  {
    id: 'portfolios',
    folder: 'portfolio',
    frames: Array.from({ length: 20 }, (_, i) => 
      `/assets-flow/portfolio/_scene_7__glass_water_showcaseconceptafter_the_fin_c6c986f8ea__online-video-cutter_com__${(i + 52).toString().padStart(3, '0')}.png`
    ),
    title: "Portfolios",
    subtitle: "Expressive Creative Showcases",
    content: {
      description: "Our portfolio designs are digital gallery spaces. We focus on the work, ensuring that every interaction adds value to the visual narrative.",
      cards: [
        { title: "Visual Storytelling", text: "Motion-first layouts that guide the viewer." },
        { title: "Editorial Design", text: "Typography-driven experiences for high-end brands." },
        { title: "Interactive Media", text: "Beyond the static: engaging the senses." }
      ]
    }
  },
  {
    id: 'packaging',
    folder: 'packaging',
    frames: Array.from({ length: 17 }, (_, i) => 
      `/assets-flow/packaging/_scene_7__glass_water_showcaseconceptafter_the_fin_c6c986f8ea__online-video-cutter_com__${(i + 72).toString().padStart(3, '0')}.png`
    ),
    title: "Packaging",
    subtitle: "Physicality in a Digital World",
    content: {
      description: "Heavy amber fluids represent the weight of physical design. We bridge the gap between tactile sensation and digital brand identity.",
      cards: [
        { title: "Premium Finishes", text: "Designing for texture, light, and luxury." },
        { title: "Sustainability", text: "Eco-conscious materials without compromising aesthetic." },
        { title: "Unboxing Experience", text: "The first physical touchpoint of your brand." }
      ]
    }
  },
  {
    id: 'photography',
    folder: 'photography',
    frames: Array.from({ length: 22 }, (_, i) => 
      `/assets-flow/photography/_scene_7__glass_water_showcaseconceptafter_the_fin_c6c986f8ea__online-video-cutter_com__${(i + 89).toString().padStart(3, '0')}.png`
    ),
    title: "Photography",
    subtitle: "The Art of the Still",
    content: {
      description: "Silver bursts capture the split-second precision of light. Our photography services focus on high-end product and editorial shots.",
      cards: [
        { title: "Product Shoots", text: "Hero shots for luxury goods." },
        { title: "Brand Content", text: "Lifestyle imagery that defines your culture." },
        { title: "Art Direction", text: "Orchestrating every pixel of the frame." }
      ]
    }
  },
  {
    id: 'showcase',
    folder: 'projects-done',
    frames: Array.from({ length: 19 }, (_, i) => 
      `/assets-flow/projects-done/_scene_7__glass_water_showcaseconceptafter_the_fin_c6c986f8ea__online-video-cutter_com__${(i + 111).toString().padStart(3, '0')}.png`
    ),
    title: "Contact",
    subtitle: "Let's Build Something Meaningful",
    content: {
      description: "The final transition leads to collaboration. How do you want to tell your story?",
      cta: true
    }
  }
];
