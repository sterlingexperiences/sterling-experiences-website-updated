import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import {
  bookingAdminEmail,
  bookingUserConfirmationEmail,
  waitlistAdminEmail,
  waitlistUserConfirmationEmail,
} from "@/lib/email-templates";

const resend = new Resend(process.env.RESEND_API_KEY || "");

const ADMIN_EMAIL = "admin@sterlingxperiences.com";
const BOOK_FROM = "book@sterlingxperiences.com";
const WAITLIST_FROM = "waitlist@sterlingxperiences.com";

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitize(str: string): string {
  return str.replace(/[<>]/g, "").trim();
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type } = body;

    if (!type || !["booking", "waitlist"].includes(type)) {
      return NextResponse.json(
        { error: "Invalid request type." },
        { status: 400 },
      );
    }

    if (type === "booking") {
      const {
        name,
        organisation,
        eventType,
        date,
        guestCount,
        servicesRequired,
        budgetRange,
        additionalNotes,
        userEmail,
      } = body;

      if (!name?.trim()) {
        return NextResponse.json(
          { error: "Name is required." },
          { status: 400 },
        );
      }

      const clean = {
        name: sanitize(name),
        organisation: sanitize(organisation || ""),
        eventType: sanitize(eventType || ""),
        date: sanitize(date || ""),
        guestCount: sanitize(guestCount || ""),
        servicesRequired: sanitize(servicesRequired || ""),
        budgetRange: sanitize(budgetRange || ""),
        additionalNotes: sanitize(additionalNotes || ""),
        userEmail: userEmail?.trim() ? sanitize(userEmail) : "",
      };

      // Send admin notification
      const adminHtml = bookingAdminEmail(clean);

      await resend.emails.send({
        from: `Sterling Experiences <${BOOK_FROM}>`,
        to: [ADMIN_EMAIL],
        subject: `Booking Consultation Request from ${clean.name}`,
        html: adminHtml,
      });

      // Send user confirmation if email provided
      if (clean.userEmail && validateEmail(clean.userEmail)) {
        const userHtml = bookingUserConfirmationEmail({
          name: clean.name,
          date: clean.date,
        });

        await resend.emails.send({
          from: `Sterling Experiences <${BOOK_FROM}>`,
          to: [clean.userEmail],
          subject: "We received your consultation request",
          html: userHtml,
        });
      }

      return NextResponse.json({ success: true });
    }

    if (type === "waitlist") {
      const { name, email, phone } = body;

      if (!name?.trim() || !email?.trim()) {
        return NextResponse.json(
          { error: "Name and email are required." },
          { status: 400 },
        );
      }

      if (!validateEmail(email)) {
        return NextResponse.json(
          { error: "Invalid email address." },
          { status: 400 },
        );
      }

      const clean = {
        name: sanitize(name),
        email: sanitize(email),
        phone: sanitize(phone || ""),
      };

      // Send admin notification
      const adminHtml = waitlistAdminEmail(clean);

      await resend.emails.send({
        from: `Sterling Experiences <${WAITLIST_FROM}>`,
        to: [ADMIN_EMAIL],
        subject: `Waitlist Signup - ${clean.name}`,
        html: adminHtml,
      });

      // Send user confirmation
      if (validateEmail(clean.email)) {
        const userHtml = waitlistUserConfirmationEmail({
          name: clean.name,
        });

        await resend.emails.send({
          from: `Sterling Experiences <${WAITLIST_FROM}>`,
          to: [clean.email],
          subject: "You are on the waitlist",
          html: userHtml,
        });
      }

      return NextResponse.json({ success: true });
    }

    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 },
    );
  } catch (error) {
    console.error("Send email error:", error);
    return NextResponse.json(
      { error: "Unable to send your request. Please try again later." },
      { status: 500 },
    );
  }
}
