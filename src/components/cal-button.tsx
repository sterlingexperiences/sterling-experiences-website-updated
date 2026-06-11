"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import type { ButtonProps } from "@/components/ui/button";

type Props = {
  title: string;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  className?: string;
};

export default function CalButton({
  title,
  variant = "primary",
  size = "default",
  className = "",
}: Props) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#800080" },
          dark: { "cal-brand": "#800080" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      data-cal-namespace="30min"
      data-cal-link="sterling-experiences/30min"
      data-cal-config='{"layout":"month_view"}'
    >
      {title}
    </Button>
  );
}
