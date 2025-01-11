import { CardHover } from "@/components/ui/card-hover";
import { IconFlagStar, IconFreeRights, IconGlobe, IconLock, IconSearch, IconSignRight, IconStar, IconTextCaption, IconUser, IconUserDollar } from '@tabler/icons-react';
export function Cards() {
  return (
    (<div className="max-w-5xl mx-auto ">
      <CardHover items={projects} />
    </div>)
  );
}


export const projectss = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];
const projects = [
  {
    id: 1,
    icon: <IconUser className="bg-blue-500 p-3 rounded-full w-16 h-16" />,
    title: "Friends & History",
    link: "/",
    description: "Had a fun chat but skipped by accident? Find them in your chat history and add them as a friend.",
  },
  {
    id: 2,
    icon: <IconSearch className="bg-blue-500 p-3 rounded-full w-16 h-16" />,
    title: "Filter by Interest",
    link: "/",
    description: "Want to narrow down your search? Use interests, genders or locations to filter the strangers you meet.",
  },
  {
    id: 3,
    icon: <IconTextCaption className="bg-blue-500 p-3 rounded-full w-16 h-16" />,
    title: "Text Chat",
    link: "/",
    description: "Not in the mood for video? No problem! You can also chat with strangers via text messages. Full of features.",
  },
  {
    id: 4,
    icon: <IconGlobe className="bg-blue-500 p-3 rounded-full w-16 h-16" />,
    title: "Global Reach",
    link: "/",
    description: "Expand horizons and think globally.",
  },
  {
    id: 5,
    icon: <IconLock className="bg-blue-500 p-3 rounded-full w-16 h-16" />,
    title: "Safe & Secure",
    link: "/",
    description: "We make use of advanced AI technologies and enhanced spam protection to keep your chats clean.",
  },
  {
    id: 6,
    icon: <IconStar className="bg-blue-500 p-3 rounded-full w-16 h-16" />,
    title: "Feutures rich",
    link: "/",
    description: "From sending photos, videos, having voice calls, to sharing GIFs and adding avatars, we have it all.",
  },
];
