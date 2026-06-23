"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "react-toastify";
import Link from "next/link";
import { Mail, Phone, User, Loader2 } from "lucide-react";

export default function EarlyAccessForm() {
  const [data, setData] = useState({ name: "", email: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!data.name.trim() || !data.email.trim() || !data.phone.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "waitlist",
          name: data.name,
          email: data.email,
          phone: data.phone,
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Something went wrong.");
      }

      toast.success(
        "You have been added to the waitlist. We will notify you when we launch.",
      );
      setSubmitted(true);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Unable to submit your request. Please try again.";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const iconClasses =
    "absolute left-3.5 top-1/2 -translate-y-1/2 size-[18px] text-brand-purple/50 pointer-events-none";
  const inputClasses =
    "h-[52px] rounded-[12px] border-brand-purple/25 bg-white/90 text-[15px] font-openSans text-neutral-900 placeholder:text-neutral-400 pl-10 focus-visible:border-brand-purple focus-visible:ring-2 focus-visible:ring-brand-purple/20 transition-all";

  return (
    <div className="min-h-screen bg-secondary py-20 px-4">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-160px)]">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-8"
        >
          <Link href="/">
            <img
              src="/Sterling%20Experiences%20Logo%20purple.png"
              alt="Sterling Experiences"
              className="h-[32px] md:h-[38px] w-auto mx-auto"
            />
          </Link>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-10 max-w-[480px]"
        >
          <h1 className="font-ebGaramond text-[32px] md:text-[48px] font-[500] text-brand-purple leading-[1.1] tracking-[-0.03em]">
            Get Early Access
          </h1>
          <p className="font-openSans text-[15px] md:text-[16px] text-neutral-600 leading-[1.6] mt-3">
            Be among the first to experience Sterling EventOps &mdash; the
            operations platform built for Nigeria&rsquo;s event industry.
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="w-full max-w-[420px]"
        >
          {submitted ? (
            <div className="bg-white rounded-[16px] p-8 text-center shadow-xl shadow-black/10 border border-brand-purple/10">
              <div className="w-[56px] h-[56px] rounded-full bg-brand-gold/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-[28px] text-brand-purple font-bold">
                  &#10003;
                </span>
              </div>
              <h2 className="font-ebGaramond text-[22px] font-[500] text-brand-purple leading-tight">
                You are on the list
              </h2>
              <p className="font-openSans text-[14px] text-neutral-600 mt-2 leading-[1.6]">
                We will notify you when Sterling EventOps launches. Check your
                email for a confirmation.
              </p>
              <Link href="/">
                <Button variant="secondary" className="mt-6 w-full">
                  Return Home
                </Button>
              </Link>
            </div>
          ) : (
            <div className="bg-white rounded-[16px] p-6 md:p-8 shadow-xl shadow-black/10 border border-brand-purple/10">
              <form onSubmit={handleSubmit} className="space-y-[18px]">
                {/* Full Name */}
                <div className="flex flex-col space-y-[6px]">
                  <Label className="font-openSans text-[14px] font-[500] text-neutral-800">
                    Full Name
                  </Label>
                  <div className="relative">
                    <User className={iconClasses} />
                    <Input
                      name="name"
                      placeholder="Enter your full name"
                      value={data.name}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col space-y-[6px]">
                  <Label className="font-openSans text-[14px] font-[500] text-neutral-800">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className={iconClasses} />
                    <Input
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={data.email}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="flex flex-col space-y-[6px]">
                  <Label className="font-openSans text-[14px] font-[500] text-neutral-800">
                    Phone Number
                  </Label>
                  <div className="relative">
                    <Phone className={iconClasses} />
                    <Input
                      name="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={data.phone}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  disabled={loading}
                  className="w-full h-[52px] text-[15px] font-[500] mt-2"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 className="size-4 animate-spin" />
                      Joining...
                    </span>
                  ) : (
                    "Join Waitlist"
                  )}
                </Button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
