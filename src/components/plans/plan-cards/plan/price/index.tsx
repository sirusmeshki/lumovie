import { FC } from "react";
import { PlanProps } from "../../models";

const Price: FC<PlanProps> = ({ isPrimary, price }) => {
  return (
    <div className="flex items-end">
      <h5
        className={`${
          isPrimary ? "text-background" : "text-neutral-100"
        } font-bold text-2xl `}
      >
        ${price}
      </h5>
      <h6
        className={`${
          isPrimary ? "text-neutral-600" : "text-neutral-600"
        } font-medium text-base`}
      >
        /Month
      </h6>
    </div>
  );
};

export default Price;
