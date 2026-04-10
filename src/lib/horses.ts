import type { Horse } from "./types";

// Mock data — will be replaced with Supabase queries
export const horses: Horse[] = [
  {
    slug: "metallic-smokn-gun",
    name: "Metallic Smokn Gun",
    barnName: "Smokey",
    price: 85000,
    breed: "AQHA",
    registration: "AQHA #6012345",
    color: "Gray",
    gender: "gelding",
    age: 7,
    height: "15.1 HH",
    discipline: ["cutting", "reined-cow-horse"],
    location: "Weatherford, TX",
    description:
      "Smokey is a finished cutting horse with $42,000 in NCHA earnings. He's been shown in the Non-Pro and has a huge stop, tons of cow, and is very forgiving for an amateur rider. This horse reads cattle like a book and will take a weekend warrior and make them look like a pro. No quirks, loads, clips, bathes, shoes — the complete package.",
    brokerTake:
      "I don't say this often, but Smokey is the kind of horse that makes careers. I watched three different Non-Pro riders cut on him in a single afternoon, and every single one of them looked like they'd been riding him for years. He has that rare combination of enough cow to win and enough forgiveness to keep a nervous rider confident. At $85K, he's priced below his earnings and ability. A horse like this at the Fort Worth Stock Show would have a line out the door.",
    heroImage: "/horses/smokey-hero.jpg",
    images: [
      "/horses/smokey-conformation-left.jpg",
      "/horses/smokey-conformation-right.jpg",
      "/horses/smokey-head.jpg",
      "/horses/smokey-cutting-action.jpg",
      "/horses/smokey-barn.jpg",
    ],
    videos: [
      { title: "Cutting Work - Non-Pro Rider", url: "#" },
      { title: "Cow Work - Ranch Setting", url: "#" },
      { title: "Trail & Ground Manners", url: "#" },
    ],
    pedigree: {
      sire: {
        name: "Metallic Cat",
        achievements: "NCHA Horse of the Year, $637K LTE",
        sire: { name: "High Brow Cat", achievements: "$110K LTE, Leading Sire" },
        dam: { name: "Chers Shadow", achievements: "Dam of earners of $2M+" },
      },
      dam: {
        name: "Smokn Poco Lena",
        achievements: "Producer of $180K+ earners",
        sire: { name: "Peptoboonsmal", achievements: "$180K LTE, Leading Sire" },
        dam: { name: "Smart Poco Lena", achievements: "NCHA money earner" },
      },
    },
    lte: "$42,350 NCHA",
    achievements: [
      "NCHA Open Futurity Top 25",
      "Augusta Cutting Classic Non-Pro Champion",
      "Abilene Spectacular Non-Pro Reserve Champion",
      "$42,350 LTE",
    ],
    training: "Finished cutter with 3 years of Non-Pro showing. Currently in light training and being shown locally.",
    trainer: "Jake Reynolds, Reynolds Cutting Horses, Weatherford, TX",
    vetNotes: "Clean PPE on file. Full set of X-rays available. No joint injections in 12 months. Sound, no maintenance required.",
    status: "available",
    featured: true,
    listedDate: "2026-04-01",
  },
  {
    slug: "dual-smart-rey-lena",
    name: "Dualin Smart Rey",
    barnName: "Rey",
    price: 125000,
    breed: "AQHA",
    registration: "AQHA #5987654",
    color: "Sorrel",
    gender: "gelding",
    age: 6,
    height: "15.0 HH",
    discipline: ["reined-cow-horse", "reining"],
    location: "Paso Robles, CA",
    description:
      "Rey is a stunning reined cow horse with NRCHA earnings and NRHA points. He has an incredible rein, huge stop, fast spins, and the cow sense to back it up. This horse was Top 10 at the NRCHA Snaffle Bit Futurity and has been competitive in the Hackamore and Bridle. Suitable for an intermediate to advanced rider looking to win.",
    brokerTake:
      "Rey is the real deal. He's one of those horses that walks into the pen and people stop talking. His bridle work is as polished as any I've handled, and his cow work is electric — he'll rate a cow across the pen and turn it so clean it looks choreographed. The only reason this horse is available is a barn change. He's priced for what he is: a legitimate major show contender in the right hands.",
    heroImage: "/horses/rey-hero.jpg",
    images: [
      "/horses/rey-conformation-left.jpg",
      "/horses/rey-conformation-right.jpg",
      "/horses/rey-head.jpg",
      "/horses/rey-cow-work.jpg",
      "/horses/rey-reining.jpg",
    ],
    videos: [
      { title: "NRCHA Bridle Class Run", url: "#" },
      { title: "Dry Work - Reining Pattern", url: "#" },
      { title: "Fence Work", url: "#" },
    ],
    pedigree: {
      sire: {
        name: "Dual Smart Rey",
        achievements: "$56K LTE, Leading Cow Horse Sire",
        sire: { name: "Dual Rey", achievements: "NCHA $113K LTE" },
        dam: { name: "Smart Peppy Lena", achievements: "NCHA Producer" },
      },
      dam: {
        name: "BH Shiners Lena",
        achievements: "NRCHA money earner",
        sire: { name: "Shining Spark", achievements: "NRHA $151K LTE" },
        dam: { name: "Docs Lena Rey", achievements: "Producer of earners" },
      },
    },
    lte: "$78,200 NRCHA / NRHA",
    achievements: [
      "NRCHA Snaffle Bit Futurity Open Top 10",
      "NRCHA Stakes Open Finalist",
      "NRHA Open Derby Top 20",
      "$78,200 LTE",
    ],
    training: "Fully finished in the bridle. Shown through the NRCHA aged events. Currently competing in open classes.",
    trainer: "Maria Santos, Santos Performance Horses, Paso Robles, CA",
    vetNotes: "Clean PPE. Hocks injected 6 months ago (routine maintenance). Full X-rays on file. No soundness concerns.",
    status: "available",
    featured: true,
    listedDate: "2026-03-28",
  },
  {
    slug: "boons-little-rebel",
    name: "Boons Little Rebel",
    barnName: "Rebel",
    price: 35000,
    breed: "AQHA",
    registration: "AQHA #6198765",
    color: "Bay Roan",
    gender: "gelding",
    age: 9,
    height: "15.2 HH",
    discipline: ["team-penning", "team-sorting", "cutting"],
    location: "Stephenville, TX",
    description:
      "Rebel is a ranch-broke, cowboy horse who excels in team penning and sorting. He's been to AQHA World in Team Penning and has a cutting foundation that makes him read cattle effortlessly. This horse will sort, pen, rope the doctoring pen, and go check pastures on Sunday. Absolutely kid and spouse safe. Anyone can ride this horse.",
    brokerTake:
      "If I could only own one horse, it might be Rebel. He's not flashy, he won't win the NCHA Futurity, but he does everything you ask and he does it well. I put my 14-year-old daughter on him at a team penning and they placed third. I put a buyer's wife on him who hadn't ridden in ten years and she was sorting cattle by the end of the day. He's worth twice this price as a family horse alone, and the fact that he can win at the competitive level is a bonus.",
    heroImage: "/horses/rebel-hero.jpg",
    images: [
      "/horses/rebel-conformation-left.jpg",
      "/horses/rebel-conformation-right.jpg",
      "/horses/rebel-penning.jpg",
      "/horses/rebel-trail.jpg",
      "/horses/rebel-kids.jpg",
    ],
    videos: [
      { title: "Team Penning - AQHA Show", url: "#" },
      { title: "Ranch Work & Sorting", url: "#" },
      { title: "Beginner Rider Demo", url: "#" },
    ],
    pedigree: {
      sire: {
        name: "Peptoboonsmal",
        achievements: "$180K LTE, Leading Cutting Sire",
        sire: { name: "Peppy San Badger", achievements: "NCHA $172K LTE" },
        dam: { name: "Royal Blue Boon", achievements: "NCHA earner" },
      },
      dam: {
        name: "Rebel Starlight",
        achievements: "AQHA point earner, ranch horse producer",
        sire: { name: "Smart Little Lena", achievements: "NCHA Triple Crown" },
        dam: { name: "Stars Poco Bueno", achievements: "AQHA Champion" },
      },
    },
    lte: "$18,500 AQHA/APHA",
    achievements: [
      "AQHA World Show Team Penning Top 10",
      "TQHA Team Penning Champion",
      "Multiple AQHA All-Around Points",
      "$18,500 LTE",
    ],
    training: "Fully broke, ranch seasoned. Goes English or Western. Neck reins, side passes, opens gates.",
    trainer: "Self-trained by owner, 6 years ranch and show experience",
    vetNotes: "Clean PPE. No maintenance. Barefoot behind. Easy keeper. No health concerns.",
    status: "available",
    featured: true,
    listedDate: "2026-04-05",
  },
  {
    slug: "once-in-a-blu-boon",
    name: "Once In A Blu Boon",
    barnName: "Blue",
    price: 195000,
    breed: "AQHA",
    registration: "AQHA #5876543",
    color: "Blue Roan",
    gender: "stallion",
    age: 5,
    height: "15.1 HH",
    discipline: ["cutting"],
    location: "Weatherford, TX",
    description:
      "Blue is a top cutting prospect with NCHA Open Futurity money. By one of the hottest sires in the cutting industry, this stallion has the pedigree, talent, and mind to be a major sire prospect while continuing to earn in the show pen. He has a huge stop, rates cattle effortlessly, and has the look and conformation to be a breeding stallion.",
    brokerTake:
      "I've handled a lot of cutting horses, and Blue is special. When he locks onto a cow, the intensity is something you feel through the saddle. His Futurity run was one of the cleanest I've seen from a young horse — no panic, no over-reacting, just pure cow sense. As a stallion prospect with this pedigree and these earnings at 5 years old, $195K is actually conservative. The breeding revenue alone could pay for him in two seasons.",
    heroImage: "/horses/blue-hero.jpg",
    images: [
      "/horses/blue-conformation-left.jpg",
      "/horses/blue-conformation-right.jpg",
      "/horses/blue-head.jpg",
      "/horses/blue-cutting.jpg",
      "/horses/blue-turnout.jpg",
    ],
    videos: [
      { title: "NCHA Futurity Run", url: "#" },
      { title: "Practice Work - Fresh Cattle", url: "#" },
      { title: "Conformation & Walk Video", url: "#" },
    ],
    pedigree: {
      sire: {
        name: "Boonlight Dancer",
        achievements: "$523K LTE, NCHA Open Futurity Champion",
        sire: { name: "Peptoboonsmal", achievements: "$180K LTE" },
        dam: { name: "Shinedancer", achievements: "Producer of $1M+ earners" },
      },
      dam: {
        name: "Blu Catalena",
        achievements: "NCHA $45K LTE",
        sire: { name: "High Brow Cat", achievements: "$110K LTE, Leading Sire" },
        dam: { name: "Catalenas Blue", achievements: "NCHA Producer" },
      },
    },
    lte: "$92,000 NCHA",
    achievements: [
      "NCHA Open Futurity Top 15",
      "Brazos Bash Open Cutting Champion",
      "West Texas Futurity Open Reserve Champion",
      "$92,000 LTE at age 5",
    ],
    training: "In full training, being shown in aged events. Will continue through Derby.",
    trainer: "Todd Williams, Williams Cutting Horses, Weatherford, TX",
    vetNotes: "Full breeding soundness exam on file. Clean PPE and X-rays. Semen tested — excellent motility and morphology.",
    status: "available",
    featured: true,
    listedDate: "2026-03-15",
  },
  {
    slug: "shiners-smart-whiz",
    name: "Shiners Smart Whiz",
    barnName: "Whiz",
    price: 55000,
    breed: "AQHA",
    registration: "AQHA #6054321",
    color: "Palomino",
    gender: "mare",
    age: 8,
    height: "14.3 HH",
    discipline: ["reining"],
    location: "Scottsdale, AZ",
    description:
      "Whiz is a finished reining mare with NRHA money earned and a pedigree that screams broodmare prospect. She's smooth, pretty, and has a pattern that's fun to ride. Big slow lope, effortless lead changes, a stop that'll make your jaw drop, and spins that are fast and flat. She's shown Non-Pro successfully and is suitable for a Youth or Amateur rider.",
    brokerTake:
      "Whiz checks every box for someone who wants to compete and eventually breed. She's by one of the greatest reining sires of all time, and her dam side is equally stacked. As a riding horse, she's a blast — her lope is like sitting in a rocking chair, and she spins like she's on a turntable. As a broodmare, her first foal (by a top sire) is already in training and showing serious promise. She's the kind of mare you ride now and breed later.",
    heroImage: "/horses/whiz-hero.jpg",
    images: [
      "/horses/whiz-conformation-left.jpg",
      "/horses/whiz-conformation-right.jpg",
      "/horses/whiz-head.jpg",
      "/horses/whiz-reining.jpg",
      "/horses/whiz-turnout.jpg",
    ],
    videos: [
      { title: "Reining Pattern - Non-Pro", url: "#" },
      { title: "Spins & Stops - Practice", url: "#" },
      { title: "Trail Riding", url: "#" },
    ],
    pedigree: {
      sire: {
        name: "Shining Spark",
        achievements: "NRHA $151K LTE, Leading Reining Sire",
        sire: { name: "Genuine Doc", achievements: "NRHA Champion" },
        dam: { name: "Diamonds Sparkle", achievements: "AQHA Champion mare" },
      },
      dam: {
        name: "Smart Chic Whiz",
        achievements: "NRHA producer, $35K earner",
        sire: { name: "Smart Chic Olena", achievements: "NRHA $167K LTE" },
        dam: { name: "Whiz N Tag Chex", achievements: "NRHA money earner" },
      },
    },
    lte: "$28,000 NRHA",
    achievements: [
      "NRHA Non-Pro Derby Finalist",
      "Arizona Reining Classic Non-Pro Champion",
      "NRHA Top 20 Non-Pro standings",
      "$28,000 LTE",
    ],
    training: "Fully finished, shown through aged events. Light show schedule, well-maintained.",
    trainer: "Carlos Vega, Vega Reining Horses, Scottsdale, AZ",
    vetNotes: "Clean PPE. Breeding soundness exam available. One previous foal, no complications. Sound, no maintenance.",
    status: "available",
    featured: false,
    listedDate: "2026-04-08",
  },
];

export function getHorseBySlug(slug: string): Horse | undefined {
  return horses.find((h) => h.slug === slug);
}

export function getFeaturedHorses(): Horse[] {
  return horses.filter((h) => h.featured && h.status === "available");
}

export function getAvailableHorses(): Horse[] {
  return horses.filter((h) => h.status === "available");
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}
