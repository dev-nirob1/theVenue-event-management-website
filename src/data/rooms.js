export const rooms = [
  {
    id: 1,
    slug: 'grand-royal-hall',
    title: 'The Grand Royal Hall',
    capacity: 1200,
    price: 2500,
    category: 'Premium',
    eventTypes: ['Weddings', 'Galas', 'Conferences'],
    description: 'Our flagship venue, the Grand Royal Hall, is a masterpiece of Neoclassical architecture blended with cutting-edge technology. Featuring soaring 10-meter ceilings, hand-carved molding, and state-of-the-art acoustics, it provides a majestic backdrop for the world\'s most prestigious gatherings.',
    facilities: [
      { icon: 'fa-microchip', text: '4K LED Wall' },
      { icon: 'fa-volume-up', text: 'Dolby Atmos Sound' },
      { icon: 'fa-wifi', text: 'Gigabit Wi-Fi 6' },
      { icon: 'fa-utensils', text: 'Private Prep Kitchen' }
    ],
    layouts: [
      { name: 'Banquet', capacity: 850 },
      { name: 'Theater', capacity: 1200 },
      { name: 'Classroom', capacity: 600 }
    ],
    images: [
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop'
    ],
    hostedEvents: [
      { title: 'Royal Wedding: James & Sarah', date: 'Dec 2025', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop' },
      { title: 'Global Banking Summit', date: 'Oct 2025', image: 'https://images.unsplash.com/photo-1540575861501-7c001173a271?q=80&w=2070&auto=format&fit=crop' }
    ]
  },
  {
    id: 2,
    slug: 'sky-pavilion-terrace',
    title: 'Sky Pavilion Terrace',
    capacity: 450,
    price: 1800,
    category: 'Outdoor',
    eventTypes: ['Cocktails', 'Parties', 'Art Shows'],
    description: 'Perched on the 48th floor, the Sky Pavilion offers panoramic views of the city skyline through seamless floor-to-ceiling glass. The retractable roof allows for open-air celebrations under the stars, while the climate-controlled interior ensures comfort in any season.',
    facilities: [
      { icon: 'fa-wind', text: 'Retractable Roof' },
      { icon: 'fa-glass-cheers', text: 'Circular Icon Bar' },
      { icon: 'fa-cloud-moon', text: 'Ambient Sky Lighting' },
      { icon: 'fa-music', text: 'Integrated Surround Sound' }
    ],
    layouts: [
      { name: 'Cocktail', capacity: 450 },
      { name: 'Seated Dinner', capacity: 220 }
    ],
    images: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1570701979417-742944b58e70?q=80&w=2068&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?q=80&w=2070&auto=format&fit=crop'
    ],
    hostedEvents: [
      { title: 'Fashion Week Afterparty', date: 'Sep 2025', image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop' },
      { title: 'Art & Horizon Exhibition', date: 'Aug 2025', image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop' }
    ]
  },
  {
    id: 3,
    slug: 'modern-innovation-lab',
    title: 'Modern Innovation Lab',
    capacity: 250,
    price: 900,
    category: 'Corporate',
    eventTypes: ['Workshops', 'Tech Talks', 'Training'],
    description: 'Designed for the future of work, the Innovation Lab is a high-performance environment featuring modular furniture, interactive digital whiteboards, and a Tier-3 data connection. Perfect for brainstorming sessions, software launches, and intensive workshops.',
    facilities: [
      { icon: 'fa-chalkboard', text: 'Interactive Whiteboards' },
      { icon: 'fa-network-wired', text: '10Gb Dedicated Line' },
      { icon: 'fa-vr-cardboard', text: 'AR/VR Ready' },
      { icon: 'fa-coffee', text: 'Smart Refreshment Hub' }
    ],
    layouts: [
      { name: 'Classroom', capacity: 180 },
      { name: 'U-Shape', capacity: 80 },
      { name: 'Workshop', capacity: 120 }
    ],
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop'
    ],
    hostedEvents: [
      { title: 'AI Ethics Workshop', date: 'Nov 2025', image: 'https://images.unsplash.com/photo-1591115765373-520b7a217294?q=80&w=2070&auto=format&fit=crop' },
      { title: 'FinTech Startup Launch', date: 'Jul 2025', image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop' }
    ]
  },
  {
    id: 4,
    slug: 'the-industrial-studio',
    title: 'The Industrial Studio',
    capacity: 800,
    price: 1500,
    category: 'Artistic',
    eventTypes: ['Exhibitions', 'Fashion Shows', 'Concerts'],
    description: 'A raw, versatile space with exposed brick, weathered steel beams, and polished concrete floors. The Industrial Studio offers a blank canvas for creative visionaries, featuring high-capacity load-bearing points for massive installations and hanging art.',
    facilities: [
      { icon: 'fa-paint-roller', text: 'Custom Color Lighting' },
      { icon: 'fa-truck-loading', text: 'Freight Elevator Access' },
      { icon: 'fa-tshirt', text: 'Dressing & Green Rooms' },
      { icon: 'fa-solar-panel', text: 'Natural Light Control' }
    ],
    layouts: [
      { name: 'Gallery', capacity: 800 },
      { name: 'Theater', capacity: 500 },
      { name: 'Fashion Runway', capacity: 400 }
    ],
    images: [
      'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop'
    ],
    hostedEvents: [
      { title: 'Underground Sound Fest', date: 'Oct 2025', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop' },
      { title: 'Urban Art Collective', date: 'Jun 2025', image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2072&auto=format&fit=crop' }
    ]
  },
  {
    id: 5,
    slug: 'executive-boardroom',
    title: 'Executive Boardroom',
    capacity: 35,
    price: 450,
    category: 'Business',
    eventTypes: ['Meetings', 'Seminars', 'Private Dining'],
    description: 'Elegance meets efficiency in our Executive Boardroom. Outfitted with bespoke walnut furniture and leather seating, it provides a quiet, prestigious environment for decision-making. Includes dedicated secretarial services and integrated voting systems.',
    facilities: [
      { icon: 'fa-user-shield', text: 'Privacy & Security Mode' },
      { icon: 'fa-microphone-alt', text: 'Integrated Voting System' },
      { icon: 'fa-eye-slash', text: 'Smart Glass Privacy' },
      { icon: 'fa-concierge-bell', text: 'Private Service Staff' }
    ],
    layouts: [
      { name: 'Boardroom', capacity: 35 },
      { name: 'U-Shape', capacity: 25 }
    ],
    images: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505409859467-3a796fd5798e?q=80&w=2070&auto=format&fit=crop'
    ],
    hostedEvents: [
      { title: 'Fortune 500 Strategy', date: 'Aug 2025', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop' },
      { title: 'Venture Capital Round', date: 'May 2025', image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop' }
    ]
  },
  {
    id: 6,
    slug: 'glass-garden-atrium',
    title: 'Glass Garden Atrium',
    capacity: 150,
    price: 1200,
    category: 'Boutique',
    eventTypes: ['Private Parties', 'Intimate Weddings'],
    description: 'A botanical sanctuary enclosed in a crystal-clear glass structure. The Atrium brings the outdoors in, surrounding your guests with exotic flora and a serene water feature. Perfect for romantic micro-weddings and exclusive product launches.',
    facilities: [
      { icon: 'fa-leaf', text: 'Indoor Botanical Garden' },
      { icon: 'fa-tint', text: 'Water Feature/Bose Pond' },
      { icon: 'fa-sun', text: 'Programmable Sunshade' },
      { icon: 'fa-spa', text: 'Luxury Lounge Area' }
    ],
    layouts: [
      { name: 'Seated Garden', capacity: 100 },
      { name: 'Cocktail', capacity: 150 }
    ],
    images: [
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=2072&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?q=80&w=2069&auto=format&fit=crop'
    ],
    hostedEvents: [
      { title: 'Botanical Couture Launch', date: 'Oct 2025', image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=2070&auto=format&fit=crop' },
      { title: 'The Emerald Gala', date: 'Apr 2025', image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2162&auto=format&fit=crop' }
    ]
  }
]
