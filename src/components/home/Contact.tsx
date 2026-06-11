"use client";
import { useState } from "react";
import {
  BlackStarIcon,
  BlackStarSmallIcon,
  YellowStarIcon,
} from "@/components/ui/assets-icons";
import { User, Mail, Phone, MessageSquare } from "lucide-react";
import Calender from "@/components/CalEmbed";
import { toast } from "react-toastify";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setDisabled(!data.name || !data.email || !data.number || !data.message);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    // Validate phone number (basic format)
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!phoneRegex.test(data.number)) {
      toast.error("Please enter a valid phone number");
      return;
    }

    // Validate other fields
    if (!data.name.trim()) {
      toast.error("Please enter your name");
      return;
    }

    if (!data.message.trim()) {
      toast.error("Please enter a message");
      return;
    }

    if (data.message.trim().length < 10) {
      toast.error("Message should be at least 10 characters long");
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.from("Inquiry").insert(data);

      if (error) {
        toast.error("Failed to submit. Please try again later.");
        setLoading(false);
        return;
      }
      toast.success("Successfully submitted");
      setLoading(false);
      setData({
        name: "",
        email: "",
        number: "",
        message: "",
      });
    } catch (err) {
      toast.error("An unexpected error occurred");
      setLoading(false);
    }
  };

  const inputClasses =
    "h-[51px] rounded-[12px] border-brand-purple/30 bg-white text-[16px] font-openSans text-neutral-900 placeholder:text-neutral-400 pl-10 focus-visible:border-brand-purple focus-visible:ring-2 focus-visible:ring-brand-purple/20";

  const iconClasses =
    "absolute left-3.5 top-1/2 -translate-y-1/2 size-[18px] text-brand-purple/60 pointer-events-none";

  return (
    <div className="flex flex-col gap-[40px] md:flex-row items-center my-[67px]">
      {/* Left column — heading + CTA */}
      <div className="md:w-[50%] relative">
        <span className="absolute hidden md:block bottom-[120%] left-[20%] hover:left-[40%] hover:scale-150 transition-all duration-1000 ease-in-out">
          <YellowStarIcon />
        </span>
        <h1 className="font-ebGaramond font-[500] md:font-[600] text-[36px] md:text-[56px] text-[#800080] leading-[43px] md:leading-[78px] tracking-[-0.04em] text-center md:text-left">
          Send us a message today or book a free consultation
        </h1>
        <div className="flex items-center justify-center md:justify-start">
          <Calender title="Schedule free consultation" variant="secondary" />
        </div>
        <span className="hidden md:block absolute top-[-40%] md:top-[150%] left-[80%] md:left-[30%] hover:left-[50%] hover:scale-150 transition-all duration-1000 ease-in-out">
          <BlackStarIcon />
        </span>
        <span className="md:hidden absolute top-[-20%] left-[90%] hover:left-[50%] hover:scale-150 transition-all duration-1000 ease-in-out">
          <BlackStarSmallIcon />
        </span>
      </div>

      {/* Right column — form */}
      <div className="w-full md:w-[50%] bg-brand-gold rounded-[16px] px-[28px] py-[37px] space-y-[22px]">
        {/* Full Name */}
        <div className="flex flex-col space-y-[6px]">
          <Label
            htmlFor="name"
            className="font-openSans font-[400] text-[15px] text-neutral-800 leading-[22px] tracking-[-0.02em]"
          >
            Full Name
          </Label>
          <div className="relative">
            <User className={iconClasses} />
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              value={data.name}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col space-y-[6px]">
          <Label
            htmlFor="email"
            className="font-openSans font-[400] text-[15px] text-neutral-800 leading-[22px] tracking-[-0.02em]"
          >
            Email Address
          </Label>
          <div className="relative">
            <Mail className={iconClasses} />
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={data.email}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>
        </div>

        {/* Phone Number */}
        <div className="flex flex-col space-y-[6px]">
          <Label
            htmlFor="number"
            className="font-openSans font-[400] text-[15px] text-neutral-800 leading-[22px] tracking-[-0.02em]"
          >
            Phone Number
          </Label>
          <div className="relative">
            <Phone className={iconClasses} />
            <Input
              id="number"
              name="number"
              type="tel"
              placeholder="Enter your phone number"
              value={data.number}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col space-y-[6px]">
          <Label
            htmlFor="message"
            className="font-openSans font-[400] text-[15px] text-neutral-800 leading-[22px] tracking-[-0.02em]"
          >
            Leave a Message
          </Label>
          <div className="relative">
            <MessageSquare
              className={cn(
                iconClasses,
                "top-4 translate-y-0",
              )}
            />
            <Textarea
              id="message"
              name="message"
              placeholder="Write your message here..."
              value={data.message}
              onChange={handleChange}
              className="min-h-[120px] rounded-[12px] border-brand-purple/30 bg-white text-[16px] font-openSans text-neutral-900 placeholder:text-neutral-400 pl-10 pt-3.5 focus-visible:border-brand-purple focus-visible:ring-2 focus-visible:ring-brand-purple/20"
              rows={5}
            />
          </div>
        </div>

        <Button
          variant="secondary"
          className="w-full h-[51px] text-[16px]"
          disabled={disabled}
          onClick={handleSubmit}
        >
          {loading ? "Submitting..." : "Submit"}
        </Button>
      </div>
    </div>
  );
};

export default Contact;
