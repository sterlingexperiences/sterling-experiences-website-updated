export const StarIcon = ({ color }: { color?: string }) => (
  <svg
    width="46"
    height="57"
    viewBox="0 0 46 57"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23 0L29.2121 20.8024L46 28.5L29.2121 36.1976L23 57L16.7879 36.1976L0 28.5L16.7879 20.8024L23 0Z"
      fill={color ?? "#800080"}
    />
  </svg>
);

export const SmallStarIcon = ({ color }: { color?: string }) => (
  <svg
    width="31"
    height="38"
    viewBox="0 0 31 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.5 0L19.6864 13.8683L31 19L19.6864 24.1317L15.5 38L11.3136 24.1317L0 19L11.3136 13.8683L15.5 0Z"
      fill={color ?? "#800080"}
    />
  </svg>
);

export const FunfairStarIcon = () => (
  <svg
    width="23"
    height="28"
    viewBox="0 0 23 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.5 0L14.606 10.2187L23 14L14.606 17.7813L11.5 28L8.39396 17.7813L0 14L8.39396 10.2187L11.5 0Z"
      fill="#FFD700"
    />
  </svg>
);

/* Pillar icon for Operational Precision */
export const PrecisionIcon = ({ color }: { color?: string }) => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="18" stroke={color ?? "#800080"} strokeWidth="1.5" />
    <circle cx="24" cy="24" r="8" stroke={color ?? "#800080"} strokeWidth="1.5" />
    <path d="M24 6V10" stroke={color ?? "#800080"} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M24 38V42" stroke={color ?? "#800080"} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M6 24H10" stroke={color ?? "#800080"} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M38 24H42" stroke={color ?? "#800080"} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M24 24L30 18" stroke={color ?? "#800080"} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

/* Pillar icon for Guest-Centered Thinking */
export const HumanIcon = ({ color }: { color?: string }) => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="16" r="6" stroke={color ?? "#800080"} strokeWidth="1.5" />
    <path d="M12 38C12 30.268 17.373 24 24 24C30.627 24 36 30.268 36 38" stroke={color ?? "#800080"} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M34 20L38 16L42 20" stroke={color ?? "#800080"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* Pillar icon for Calm Execution */
export const CalmIcon = ({ color }: { color?: string }) => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="18" stroke={color ?? "#800080"} strokeWidth="1.5" />
    <path d="M16 28C16 28 19 32 24 32C29 32 32 28 32 28" stroke={color ?? "#800080"} strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="18" cy="20" r="2" fill={color ?? "#800080"} />
    <circle cx="30" cy="20" r="2" fill={color ?? "#800080"} />
  </svg>
);

/* Pillar icon for Integrated Delivery */
export const NetworkIcon = ({ color }: { color?: string }) => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="14" cy="14" r="5" stroke={color ?? "#800080"} strokeWidth="1.5" />
    <circle cx="34" cy="14" r="5" stroke={color ?? "#800080"} strokeWidth="1.5" />
    <circle cx="24" cy="34" r="5" stroke={color ?? "#800080"} strokeWidth="1.5" />
    <path d="M18 18L21 30" stroke={color ?? "#800080"} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M30 18L27 30" stroke={color ?? "#800080"} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

/* Decorative Quote SVG — for testimonials */
export const QuoteMark = ({ color }: { color?: string }) => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 20C12.686 20 10 22.686 10 26V34H18V26H14C14 23.238 16.238 21 19 21L16 20Z" fill={color ?? "#800080"} />
    <path d="M16 36C14.896 36 14 36.896 14 38C14 39.104 14.896 40 16 40C17.104 40 18 39.104 18 38C18 36.896 17.104 36 16 36Z" fill={color ?? "#800080"} />
    <path d="M38 20C34.686 20 32 22.686 32 26V34H40V26H36C36 23.238 38.238 21 41 21L38 20Z" fill={color ?? "#800080"} />
    <path d="M38 36C36.896 36 36 36.896 36 38C36 39.104 36.896 40 38 40C39.104 40 40 39.104 40 38C40 36.896 39.104 36 38 36Z" fill={color ?? "#800080"} />
  </svg>
);

export const YellowStarIcon = () => (
  <svg
    width="46"
    height="57"
    viewBox="0 0 46 57"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23 0L29.2121 20.8024L46 28.5L29.2121 36.1976L23 57L16.7879 36.1976L0 28.5L16.7879 20.8024L23 0Z"
      fill="#FFD700"
    />
  </svg>
);
