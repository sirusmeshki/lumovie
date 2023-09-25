import { FC } from "react";
import ListOfLinks from "./list-of-links";

const Nav: FC = () => {
  const lists = [
    [
      { text: "FAQ", path: "/faq" },
      { text: "Investor Relations", path: "/investor" },
      { text: "Ways To Watch", path: "/downloads" },
      { text: "Corporate Information", path: "/info" },
      { text: "Only on LuMovie", path: "/only-on-lumovie" },
    ],

    [
      { text: "Help Center", path: "/help" },
      { text: "Jobs", path: "/jobs" },
      { text: "Terms of Use", path: "/terms-of-use" },
      { text: "Contact us", path: "/contact" },
    ],
    [
      { text: "Account", path: "/account" },
      { text: "Privacy", path: "/privacy" },
      { text: "Redem gift cards", path: "/redem-gift-card" },
      { text: "Buy gift cards", path: "/buy-gift-card" },
    ],
    [
      { text: "Media Center", path: "/media-center" },
      { text: "Cookie Prefeneces", path: "/cookie" },
      { text: "Legal Notices", path: "/legal-notices" },
    ],
  ];

  return (
    <nav className="flex justify-between w-full gap-3">
      {lists.map((list, index) => {
        return <ListOfLinks key={index} list={list} />;
      })}
    </nav>
  );
};

export default Nav;
