import { FC, useState } from "react";
import styles from "./Stars.module.css";

interface StarsProps {
  count?: number;
  defaultRating?: number;
  icon?: string;
  color?: string;
  iconSize?: number;
}

const DEFAULT_COUNT = 5;
const DEFAULT_ICON = "★";
const DEFAULT_UNSELECTED_COLOR = "grey";
const DEFAULT_COLOR = "yellow";

const Stars: FC<StarsProps> = ({
  count = DEFAULT_COUNT,
  defaultRating,
  icon = DEFAULT_ICON,
  color = DEFAULT_COLOR,
  iconSize,
}: StarsProps) => {
  const [rating, setRating] = useState(defaultRating);
  const [temporaryRating, setTemporaryRating] = useState(0);

  const stars = Array(count || DEFAULT_COUNT).fill(icon || DEFAULT_ICON);

  const handleClick = (rating: number) => {
    setRating(rating);
    localStorage.setItem("starRating", rating.toString());
  };

  return (
    <div className={styles.container}>
      {stars.map((_, index) => {
        const isActiveColor =
          (rating || temporaryRating) &&
          (index < rating! || index < temporaryRating);

        let elementColor = "";

        if (isActiveColor) {
          elementColor = color || DEFAULT_COLOR;
        } else {
          elementColor = DEFAULT_UNSELECTED_COLOR;
        }

        return (
          <div
            className={styles.star}
            key={index}
            style={{
              fontSize: iconSize ? `${iconSize}px` : "14px",
              color: elementColor,
              filter: `${isActiveColor ? "grayscale(0%)" : "grayscale(100%)"}`,
            }}
            onMouseEnter={() => setTemporaryRating(index + 1)}
            onMouseLeave={() => setTemporaryRating(0)}
            onClick={() => handleClick(index + 1)}
          >
            {icon ? icon : DEFAULT_ICON}
          </div>
        );
      })}
    </div>
  );
};

export default Stars;
