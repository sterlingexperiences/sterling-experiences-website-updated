"use client";

import { useState, useRef, useEffect, type ReactNode } from "react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "react-toastify";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Calendar, Users, Building2, Tag, DollarSign, ClipboardList, ChevronDown, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type BookingModalProps = {
  trigger: ReactNode;
};

const SERVICE_OPTIONS = [
  "Decoration",
  "Event Management",
  "Staffing",
  "Coordination",
  "Logistics",
];

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const DAY_NAMES = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function CalendarPicker({
  value,
  onChange,
}: {
  value: Date | null;
  onChange: (d: Date) => void;
}) {
  const [open, setOpen] = useState(false);
  const [viewMonth, setViewMonth] = useState(new Date().getMonth());
  const [viewYear, setViewYear] = useState(new Date().getFullYear());
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const today = new Date();
  const firstDay = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const daysInPrevMonth = new Date(viewYear, viewMonth, 0).getDate();

  const prevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear(viewYear - 1);
    } else {
      setViewMonth(viewMonth - 1);
    }
  };

  const nextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear(viewYear + 1);
    } else {
      setViewMonth(viewMonth + 1);
    }
  };

  const handleDayClick = (day: number) => {
    onChange(new Date(viewYear, viewMonth, day));
    setOpen(false);
  };

  const isToday = (day: number) =>
    day === today.getDate() &&
    viewMonth === today.getMonth() &&
    viewYear === today.getFullYear();

  const isSelected = (day: number) =>
    value &&
    day === value.getDate() &&
    viewMonth === value.getMonth() &&
    viewYear === value.getFullYear();

  const displayText = value
    ? `${MONTHS[value.getMonth()]} ${value.getDate()}, ${value.getFullYear()}`
    : "";

  const weeks: number[][] = [];
  let day = 1;
  let prevDay = daysInPrevMonth - firstDay + 1;

  for (let i = 0; i < firstDay; i++) {
    if (!weeks[0]) weeks[0] = [];
    weeks[0].push(-prevDay);
    prevDay++;
  }

  while (day <= daysInMonth) {
    const weekIdx = weeks.length - 1;
    if (!weeks[weekIdx] || weeks[weekIdx].length === 7) {
      weeks.push([day]);
    } else {
      weeks[weekIdx].push(day);
    }
    day++;
  }

  const lastWeek = weeks[weeks.length - 1];
  while (lastWeek.length < 7) {
    lastWeek.push(0);
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={cn(
          "h-[48px] w-full rounded-[10px] border border-brand-purple/25 bg-[#F5F0E4] text-[15px] font-openSans text-left flex items-center justify-between transition-all pl-10 pr-3",
          value ? "text-neutral-900" : "text-neutral-400",
          "focus-visible:border-brand-purple focus-visible:ring-2 focus-visible:ring-brand-purple/20",
        )}
      >
        <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 size-[16px] text-brand-purple/50 pointer-events-none" />
        <span className="truncate">
          {displayText || "Select date"}
        </span>
        <ChevronDown
          className={cn(
            "size-4 text-brand-purple/50 shrink-0 transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-[#F5F0E4] rounded-[12px] border border-brand-purple/20 shadow-lg shadow-black/10 p-3">
          <div className="flex items-center justify-between mb-3">
            <button
              type="button"
              onClick={prevMonth}
              className="size-8 flex items-center justify-center rounded-md text-brand-purple hover:bg-brand-purple/10 transition-colors"
            >
              <ChevronDown className="size-4 rotate-90" />
            </button>
            <span className="font-ebGaramond text-[16px] font-[500] text-brand-purple">
              {MONTHS[viewMonth]} {viewYear}
            </span>
            <button
              type="button"
              onClick={nextMonth}
              className="size-8 flex items-center justify-center rounded-md text-brand-purple hover:bg-brand-purple/10 transition-colors"
            >
              <ChevronDown className="size-4 -rotate-90" />
            </button>
          </div>

          <div className="grid grid-cols-7 mb-1">
            {DAY_NAMES.map((d) => (
              <div
                key={d}
                className="text-center text-[11px] font-openSans font-[600] text-brand-purple/60 uppercase py-1"
              >
                {d}
              </div>
            ))}
          </div>

          {weeks.map((week, wi) => (
            <div key={wi} className="grid grid-cols-7">
              {week.map((day, di) => {
                if (day <= 0) {
                  const prevDate = -day;
                  return (
                    <button
                      key={`p-${di}`}
                      type="button"
                      tabIndex={-1}
                      className="text-center text-[12px] text-neutral-300 py-1 rounded-md cursor-default"
                    >
                      {prevDate}
                    </button>
                  );
                }
                if (day === 0) {
                  return <div key={`e-${di}`} />;
                }
                return (
                  <button
                    key={day}
                    type="button"
                    onClick={() => handleDayClick(day)}
                    className={cn(
                      "text-center text-[13px] font-openSans py-1 rounded-md transition-colors relative",
                      isSelected(day)
                        ? "bg-brand-purple text-white font-[600]"
                        : isToday(day)
                          ? "text-brand-purple font-[600] hover:bg-brand-purple/10"
                          : "text-neutral-700 hover:bg-brand-purple/10",
                    )}
                  >
                    {day}
                    {isToday(day) && !isSelected(day) && (
                      <span className="absolute bottom-[2px] left-1/2 -translate-x-1/2 w-[4px] h-[4px] rounded-full bg-brand-gold" />
                    )}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Custom dropdown component ── */
function Dropdown({
  options,
  value,
  onChange,
  placeholder,
  icon,
}: {
  options: { label: string; value: string }[];
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  icon?: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const selected = options.find((o) => o.value === value);

  return (
    <div ref={ref} className="relative">
      {icon && (
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 size-[18px] text-brand-purple/50 pointer-events-none z-10 flex items-center justify-center">
          {icon}
        </span>
      )}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={cn(
          "h-[48px] w-full rounded-[10px] border border-brand-purple/25 bg-[#F5F0E4] text-[15px] font-openSans text-left flex items-center justify-between transition-all",
          icon ? "pl-10 pr-3" : "px-3",
          value ? "text-neutral-900" : "text-neutral-400",
          "focus-visible:border-brand-purple focus-visible:ring-2 focus-visible:ring-brand-purple/20",
        )}
      >
        <span className="truncate">
          {selected ? selected.label : placeholder}
        </span>
        <ChevronDown
          className={cn(
            "size-4 text-brand-purple/50 shrink-0 transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-[#F5F0E4] rounded-[10px] border border-brand-purple/20 shadow-lg shadow-black/10 overflow-hidden">
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              className={cn(
                "w-full text-left px-3 py-2.5 text-[14px] font-openSans transition-colors",
                opt.value === value
                  ? "text-brand-purple font-[500] bg-brand-purple/5"
                  : "text-neutral-700 hover:bg-brand-purple/5 hover:text-brand-purple",
              )}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Main modal ── */
export default function BookingModal({ trigger }: BookingModalProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [data, setData] = useState({
    name: "",
    organisation: "",
    eventType: "",
    guestCount: "",
    servicesRequired: "",
    budgetRange: "",
    additionalNotes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!data.name.trim()) {
      toast.error("Please enter your name");
      return;
    }

    setLoading(true);

    try {
      const dateStr = selectedDate
        ? `${MONTHS[selectedDate.getMonth()]} ${selectedDate.getDate()}, ${selectedDate.getFullYear()}`
        : "Not specified";

      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "booking",
          name: data.name,
          organisation: data.organisation,
          eventType: data.eventType,
          date: dateStr,
          guestCount: data.guestCount,
          servicesRequired: data.servicesRequired,
          budgetRange: data.budgetRange,
          additionalNotes: data.additionalNotes,
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Something went wrong.");
      }

      toast.success(
        "Your consultation request has been sent. We will be in touch within 24 hours.",
      );
      setOpen(false);
      setSelectedDate(null);
      setData({
        name: "",
        organisation: "",
        eventType: "",
        guestCount: "",
        servicesRequired: "",
        budgetRange: "",
        additionalNotes: "",
      });
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Unable to send your request. Please try again.";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const inputClasses =
    "h-[48px] rounded-[10px] border-brand-purple/25 bg-[#F5F0E4] text-[15px] font-openSans text-neutral-900 placeholder:text-neutral-400 pl-10 focus-visible:border-brand-purple focus-visible:ring-2 focus-visible:ring-brand-purple/20 focus-visible:bg-white transition-all";
  const iconClasses =
    "absolute left-3.5 top-1/2 -translate-y-1/2 size-[18px] text-brand-purple/50 pointer-events-none";

  const serviceOptions = [
    { label: "Select a service", value: "" },
    ...SERVICE_OPTIONS.map((s) => ({ label: s, value: s })),
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent aria-describedby={undefined} className="sm:max-w-[520px] p-0 gap-0 bg-[#F5F0E4] border-neutral-200 rounded-xl overflow-hidden flex flex-col max-h-[85vh]">
        <VisuallyHidden>
          <DialogTitle>Book a Consultation</DialogTitle>
        </VisuallyHidden>

        {/* Header — fixed */}
        <div className="bg-brand-purple px-6 py-5 shrink-0">
          <h2 className="font-ebGaramond text-[24px] md:text-[28px] font-[500] text-white leading-tight tracking-[-0.02em]">
            Book a Consultation
          </h2>
          <p className="font-openSans text-[13px] text-white/70 mt-1">
            Tell us about your event and we will be in touch.
          </p>
        </div>

        {/* Scrollable form body */}
        <div className="overflow-y-auto flex-1 px-6 py-5">
          <form onSubmit={handleSubmit} className="space-y-[18px]">
            {/* Name */}
            <div className="flex flex-col space-y-[5px]">
              <Label className="font-openSans text-[13px] font-[500] text-neutral-800">
                Name <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <ClipboardList className={iconClasses} />
                <Input
                  name="name"
                  placeholder="Your full name"
                  value={data.name}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
            </div>

            {/* Organisation */}
            <div className="flex flex-col space-y-[5px]">
              <Label className="font-openSans text-[13px] font-[500] text-neutral-800">
                Organisation
              </Label>
              <div className="relative">
                <Building2 className={iconClasses} />
                <Input
                  name="organisation"
                  placeholder="Company or organisation name"
                  value={data.organisation}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
            </div>

            {/* Event Type */}
            <div className="flex flex-col space-y-[5px]">
              <Label className="font-openSans text-[13px] font-[500] text-neutral-800">
                Event Type
              </Label>
              <div className="relative">
                <Tag className={iconClasses} />
                <Input
                  name="eventType"
                  placeholder="e.g. Corporate Conference, Wedding"
                  value={data.eventType}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
            </div>

            {/* Row: Estimated Date + Guest Count */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col space-y-[5px]">
                <Label className="font-openSans text-[13px] font-[500] text-neutral-800">
                  Estimated Date
                </Label>
                <CalendarPicker
                  value={selectedDate}
                  onChange={setSelectedDate}
                />
              </div>

              <div className="flex flex-col space-y-[5px]">
                <Label className="font-openSans text-[13px] font-[500] text-neutral-800">
                  Guest Count
                </Label>
                <div className="relative">
                  <Users className={cn(iconClasses, "size-[16px]")} />
                  <Input
                    name="guestCount"
                    type="number"
                    min={1}
                    placeholder="Est. guests"
                    value={data.guestCount}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>
              </div>
            </div>

            {/* Services Required — custom dropdown */}
            <div className="flex flex-col space-y-[5px]">
              <Label className="font-openSans text-[13px] font-[500] text-neutral-800">
                Services Required
              </Label>
              <Dropdown
                options={serviceOptions}
                value={data.servicesRequired}
                onChange={(v) => setData({ ...data, servicesRequired: v })}
                placeholder="Select a service"
                icon={<Tag className="size-[16px]" />}
              />
            </div>

            {/* Budget Range */}
            <div className="flex flex-col space-y-[5px]">
              <Label className="font-openSans text-[13px] font-[500] text-neutral-800">
                Budget Range
              </Label>
              <div className="relative">
                <DollarSign className={iconClasses} />
                <Input
                  name="budgetRange"
                  placeholder="e.g. N500,000 - N1,000,000"
                  value={data.budgetRange}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
            </div>

            {/* Additional Notes */}
            <div className="flex flex-col space-y-[5px]">
              <Label className="font-openSans text-[13px] font-[500] text-neutral-800">
                Additional Notes
              </Label>
              <Textarea
                name="additionalNotes"
                placeholder="Tell us more about your event..."
                value={data.additionalNotes}
                onChange={handleChange}
                className="min-h-[90px] rounded-[10px] border-brand-purple/25 bg-[#F5F0E4] text-[15px] font-openSans text-neutral-900 placeholder:text-neutral-400 p-3.5 focus-visible:border-brand-purple focus-visible:ring-2 focus-visible:ring-brand-purple/20 focus-visible:bg-white transition-all resize-none"
                rows={3}
              />
            </div>

            {/* Submit */}
            <Button
              type="submit"
              variant="primary"
              disabled={loading}
              className="w-full h-[50px] text-[15px] font-[500]"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 className="size-4 animate-spin" />
                  Sending...
                </span>
              ) : (
                "Submit Booking Request"
              )}
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
