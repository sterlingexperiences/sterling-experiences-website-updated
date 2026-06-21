import type { Metadata } from "next";
import EarlyAccessForm from "@/components/early-access/EarlyAccessForm";

export const metadata: Metadata = {
  title: "Early Access",
  description:
    "Be among the first to experience Sterling EventOps — the operations platform built for Nigeria's event industry.",
};

export default function EarlyAccessPage() {
  return <EarlyAccessForm />;
}
