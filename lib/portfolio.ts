export type PortfolioVideo = {
  id: string;
  brand: string;
  title: string;
  category: string;
  description: string;
  poster: string;
  duration: number;
  orientation: "portrait" | "landscape";
  src?: string;
  driveId?: string;
};

// Titles describe the reviewed creative. Performance results belong to verified case studies.
export const portfolioVideos: PortfolioVideo[] = [
  {
    "id": "sawinery-song",
    "brand": "Sawinery",
    "title": "A gift story, set to music",
    "category": "AI animation",
    "description": "Animated storytelling mixed with woodworking product demonstrations.",
    "poster": "/portfolio/sawinery-song.jpg",
    "duration": 160,
    "orientation": "portrait",
    "src": "https://jasonceddy.b-cdn.net/Copy%20of%20AI%20SONG%20AND%20ANIMATION%20%5B9x16%5D%20V1.mp4"
  },
  {
    "id": "kudos-street",
    "brand": "Kudos",
    "title": "Street-style skit",
    "category": "UGC ads",
    "description": "A conversational opening, app inserts and a branded close.",
    "poster": "/portfolio/kudos-street.jpg",
    "duration": 45,
    "orientation": "portrait",
    "src": "https://jasonceddy.b-cdn.net/Kudos_Ad_v3_Hook2_music.mp4"
  },
  {
    "id": "haircare-avatar",
    "brand": "Haircare",
    "title": "Avatar product demo",
    "category": "AI product & UGC",
    "description": "A bathroom-style talking avatar with a haircare product demonstration.",
    "poster": "/portfolio/haircare-avatar.jpg",
    "duration": 19,
    "orientation": "portrait",
    "src": "https://jasonceddy.b-cdn.net/Copy%20of%20Copy%20of%20breakage%20avatar%201%20.mp4"
  },
  {
    "id": "kova-fashion",
    "brand": "KOVA New York",
    "title": "Fashion collection",
    "category": "AI product & UGC",
    "description": "Fashion visuals, fabric details and a storefront walkthrough.",
    "poster": "/portfolio/kova-fashion.jpg",
    "duration": 48,
    "orientation": "portrait",
    "src": "https://jasonceddy.b-cdn.net/Copy%20of%200814%20%282%29%281%29.mov"
  },
  {
    "id": "wet-rag",
    "brand": "Woodworking",
    "title": "The wet rag explainer",
    "category": "AI animation",
    "description": "Character animation and close-up demonstrations in a product explainer.",
    "poster": "/portfolio/wet-rag.jpg",
    "duration": 92,
    "orientation": "portrait",
    "src": "https://jasonceddy.b-cdn.net/Copy%20of%20AI%20WET%20RAG%20Ad%20V2-R4.mp4.mp4"
  },
  {
    "id": "temporary-inked-ai",
    "brand": "TemporaryInked",
    "title": "Tattoo lifestyle creative",
    "category": "AI product & UGC",
    "description": "A visual product showcase built around tattoo detail and lifestyle shots.",
    "poster": "/portfolio/temporary-inked-ai.jpg",
    "duration": 20,
    "orientation": "portrait",
    "src": "https://jasonceddy.b-cdn.net/IMG_1346.MP4"
  },
  {
    "id": "arya-01",
    "brand": "Arya",
    "title": "Podcast cut 01",
    "category": "Social & podcast",
    "description": "A conversation cut with alternating speakers and styled captions.",
    "poster": "/portfolio/arya-01.jpg",
    "duration": 39,
    "orientation": "portrait",
    "driveId": "1Txm9gjJKJu-IljqLzVhaHt9fq4NmTSCi"
  },
  {
    "id": "event-film",
    "brand": "Events",
    "title": "Celebration film",
    "category": "Social & podcast",
    "description": "A landscape event film built around candid moments and group activities.",
    "poster": "/portfolio/event-film.jpg",
    "duration": 150,
    "orientation": "landscape",
    "src": "https://jasonceddy.b-cdn.net/1001%281%29.mp4"
  },
  {
    "id": "kudos-rewards",
    "brand": "Kudos",
    "title": "Rewards explainer",
    "category": "UGC ads",
    "description": "A multi-character opening with overlays and an app walkthrough.",
    "poster": "/portfolio/kudos-rewards.jpg",
    "duration": 75,
    "orientation": "portrait",
    "src": "https://jasonceddy.b-cdn.net/Kudos87_Hook1.mp4"
  },
  {
    "id": "kudos-talking",
    "brand": "Kudos",
    "title": "Talking-head demo",
    "category": "UGC ads",
    "description": "Presenter footage paired with app screens and highlighted captions.",
    "poster": "/portfolio/kudos-talking.jpg",
    "duration": 60,
    "orientation": "portrait",
    "src": "https://jasonceddy.b-cdn.net/ugc%20111%20h3.mp4"
  },
  {
    "id": "kudos-car",
    "brand": "Kudos",
    "title": "In-car conversation",
    "category": "UGC ads",
    "description": "A two-person conversation edited around a credit-card app offer.",
    "poster": "/portfolio/kudos-car.jpg",
    "duration": 56,
    "orientation": "portrait",
    "src": "https://jasonceddy.b-cdn.net/ugc%20113%20h3.mp4"
  },
  {
    "id": "kudos-duo",
    "brand": "Kudos",
    "title": "Liana & Lex",
    "category": "UGC ads",
    "description": "A two-person skit with on-screen emphasis and a branded finish.",
    "poster": "/portfolio/kudos-duo.jpg",
    "duration": 74,
    "orientation": "portrait",
    "src": "https://jasonceddy.b-cdn.net/UGC%20142%20-%20Liana%20%2B%20Lex%20-%20H3.mp4"
  },
  {
    "id": "calendar-unboxing",
    "brand": "Sister Advent Calendar",
    "title": "Gift reveal",
    "category": "AI product & UGC",
    "description": "A presenter-led reveal followed by product close-ups.",
    "poster": "/portfolio/calendar-unboxing.jpg",
    "duration": 13,
    "orientation": "portrait",
    "src": "https://jasonceddy.b-cdn.net/Copy%20of%20hf_20261012_203143_1a7a9d41-be1b-46db-bf70-b97fd5011424.mp4"
  },
  {
    "id": "calendar-pov",
    "brand": "Sister Advent Calendar",
    "title": "POV unboxing",
    "category": "AI product & UGC",
    "description": "A first-person gift reveal with detail shots of the calendar.",
    "poster": "/portfolio/calendar-pov.jpg",
    "duration": 12,
    "orientation": "portrait",
    "src": "https://jasonceddy.b-cdn.net/Copy%20of%20hf_20261013_122828_1eb0756a-e00a-4bba-8db6-777a07123f4d.mp4"
  },
  {
    "id": "calendar-shopping",
    "brand": "Sister Advent Calendar",
    "title": "Shopping to unboxing",
    "category": "AI product & UGC",
    "description": "A retail opening transitions into a tabletop product reveal.",
    "poster": "/portfolio/calendar-shopping.jpg",
    "duration": 10,
    "orientation": "portrait",
    "src": "https://jasonceddy.b-cdn.net/Copy%20of%20hf_20261013_141059_c68a7cec-2e86-447b-9554-edfd4127f5c2.mp4"
  },
  {
    "id": "venus-drops",
    "brand": "Venus Drops",
    "title": "Animated product story",
    "category": "AI animation",
    "description": "A character-led beauty narrative with a product finish.",
    "poster": "/portfolio/venus-drops.jpg",
    "duration": 92,
    "orientation": "portrait",
    "src": "https://jasonceddy.b-cdn.net/Copy%20of%20PIXAR%20VENUS%20DROPS.mp4"
  },
  {
    "id": "skincare-animation",
    "brand": "Skincare",
    "title": "Animated explainer concept",
    "category": "AI animation",
    "description": "Character storytelling, a presenter overlay and product visuals.",
    "poster": "/portfolio/skincare-animation.jpg",
    "duration": 89,
    "orientation": "portrait",
    "src": "https://jasonceddy.b-cdn.net/Copy%20of%20trial%20video.mp4"
  },
  {
    "id": "cleen-story",
    "brand": "Cleen",
    "title": "Character-led product story",
    "category": "AI animation",
    "description": "Stylized character animation with product inserts and captions.",
    "poster": "/portfolio/cleen-story.jpg",
    "duration": 96,
    "orientation": "portrait",
    "src": "https://jasonceddy.b-cdn.net/Copy%20of%20406.A.mov"
  },
  {
    "id": "gutclear",
    "brand": "GutClear",
    "title": "Animated explainer",
    "category": "AI animation",
    "description": "An animated opening, anatomy visuals and product-led editing.",
    "poster": "/portfolio/gutclear.jpg",
    "duration": 69,
    "orientation": "portrait",
    "src": "https://jasonceddy.b-cdn.net/Copy%20of%20Copy%20of%20GutClear%202%20-%20UK%20-%20Jester.mp4"
  },
  {
    "id": "fuelcharge",
    "brand": "FuelCharge",
    "title": "Automotive product creative",
    "category": "AI animation",
    "description": "Mechanical visualizations, lifestyle footage and a product offer.",
    "poster": "/portfolio/fuelcharge.jpg",
    "duration": 34,
    "orientation": "portrait",
    "src": "https://jasonceddy.b-cdn.net/Copy%20of%20FuelCharge%203%20-%20UK%20-%20Jester.mp4"
  },
  {
    "id": "tonsil-demo",
    "brand": "Oral care",
    "title": "Product explainer",
    "category": "AI animation",
    "description": "Anatomy visuals, a presenter and device demonstration footage.",
    "poster": "/portfolio/tonsil-demo.jpg",
    "duration": 42,
    "orientation": "portrait",
    "src": "https://jasonceddy.b-cdn.net/Copy%20of%20TONSIL%202.mp4"
  },
  {
    "id": "skeleton-demo",
    "brand": "Oral care",
    "title": "Skeleton character hook",
    "category": "AI animation",
    "description": "An animated character hook leads into a device demonstration.",
    "poster": "/portfolio/skeleton-demo.jpg",
    "duration": 54,
    "orientation": "portrait",
    "src": "https://jasonceddy.b-cdn.net/Copy%20of%20video%202%20hook%203.mp4"
  },
  {
    "id": "dog-house",
    "brand": "Dog House",
    "title": "Creator vlog edit",
    "category": "Social & podcast",
    "description": "Conversational vlog pacing with emphasized captions.",
    "poster": "/portfolio/dog-house.jpg",
    "duration": 55,
    "orientation": "portrait",
    "src": "https://jasonceddy.b-cdn.net/DOG%20HOUSE.mp4"
  },
  {
    "id": "football-recap",
    "brand": "Sports",
    "title": "Game-day recap",
    "category": "Social & podcast",
    "description": "Vertical football highlights, crowd moments and a closing montage.",
    "poster": "/portfolio/football-recap.jpg",
    "duration": 59,
    "orientation": "portrait",
    "src": "https://jasonceddy.b-cdn.net/0926.mp4"
  },
  {
    "id": "arya-02",
    "brand": "Arya",
    "title": "Podcast cut 02",
    "category": "Social & podcast",
    "description": "A focused talking-head excerpt with emphasized captions.",
    "poster": "/portfolio/arya-02.jpg",
    "duration": 36,
    "orientation": "portrait",
    "driveId": "1_ZFkYUBGuxI7kKIQTN0BN-6K31-41iI1"
  },
  {
    "id": "arya-03",
    "brand": "Arya",
    "title": "Podcast cut 03",
    "category": "Social & podcast",
    "description": "A two-speaker podcast edit with a distinct opening hook.",
    "poster": "/portfolio/arya-03.jpg",
    "duration": 38,
    "orientation": "portrait",
    "driveId": "12Ml18ZdzNV2pTAz-EhzplggNVw277vbW"
  }
];
