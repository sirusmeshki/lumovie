import { FC } from "react";
import Accordion from "./accordion";

const Accordions: FC = () => {
  const accordions = [
    {
      question: "What can I watch on LuMovie?",
      answer:
        "LuMovie has an extensive library of feature films, documentaries, TV programmes, anime, award-winning LuMovie originals and more. Watch as much as you want, anytime you want.",
    },
    {
      question: "How do I cancel?",
      answer:
        "LuMovie is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account at any time.",
    },
    {
      question: "Where can I watch?",
      answer:
        "Watch anywhere, anytime. Sign in with your LuMovie account to watch instantly on the web at LuMovie.com from your personal computer or on any internet-connected device that offers the LuMovie app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
    },
    {
      question: "Do I need to buy a subscription to use your service?",
      answer:
        "Yes, Watch LuMovie on your smartphone, tablet, smart TV, laptop or streaming device, all for one fixed monthly fee. Plans range from €7,99 to €15,99 a month. No extra costs, no contracts.",
    },
  ];

  return (
    <ul className="flex flex-col gap-2 my-8">
      {accordions.map((accordion, index) => {
        return (
          <Accordion
            key={index}
            question={accordion.question}
            answer={accordion.answer}
          />
        );
      })}
    </ul>
  );
};

export default Accordions;
