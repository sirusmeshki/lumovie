import { FC } from "react";
import { PlanProps } from "../../models";

const Header: FC<PlanProps> = ({ isPrimary, title }) => {
  return (
    <header className="text-center">
      <h5
        className={`${
          isPrimary ? "text-background" : "text-neutral-100"
        } font-bold text-2xl capitalize`}
      >
        {title}
      </h5>
      <p
        className={`${
          isPrimary ? "text-neutral-600" : "text-neutral-500"
        } font-sm font-normal`}
      >
        Get First Month Free, Then
      </p>
    </header>
  );
};

export default Header;
