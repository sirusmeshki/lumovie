import React, { FC } from "react";
import Link from "next/link";

import Button from "@/components/button";

const RegisterButtons: FC = () => {
  const buttons = [
    {
      text: "sign up",
      path: "/signup",
      isCta: true,
    },
    {
      text: "login",
      path: "/login",
      isCta: false,
    },
  ];

  return (
    <div className="flex gap-1">
      {buttons.map((button, index) => {
        return (
          <Link key={index} href={button.path}>
            <Button text={button.text} isCta={button.isCta} />
          </Link>
        );
      })}
    </div>
  );
};

export default RegisterButtons;
