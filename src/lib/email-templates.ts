const BRAND = {
  purple: "#800080",
  gold: "#FFD700",
  champagne: "#F6F1E5",
  dark: "#0E0E12",
  name: "Sterling Experiences",
  url: "https://www.sterlingxperiences.com",
  logoUrl: "https://www.sterlingxperiences.com/Sterling%20Experiences%20Logo%20purple.png",
};

function wrapper(content: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${BRAND.name}</title>
</head>
<body style="margin:0;padding:0;background-color:#FAF8F2;font-family:Georgia,'Times New Roman',serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#FAF8F2;">
    <tr>
      <td align="center" style="padding:40px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
          <!-- Header -->
          <tr>
            <td style="background-color:${BRAND.purple};padding:32px 40px;border-radius:12px 12px 0 0;text-align:center;">
              <img src="${BRAND.logoUrl}" alt="${BRAND.name}" style="height:38px;width:auto;max-width:180px;" />
              <div style="height:2px;width:60px;background-color:${BRAND.gold};margin:16px auto 0;"></div>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="background-color:#ffffff;padding:40px;border-left:1px solid #E8E0D0;border-right:1px solid #E8E0D0;">
              ${content}
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background-color:#ffffff;padding:0 40px 32px;border-left:1px solid #E8E0D0;border-right:1px solid #E8E0D0;border-bottom:1px solid #E8E0D0;border-radius:0 0 12px 12px;">
              <div style="border-top:1px solid #E8E0D0;padding-top:20px;text-align:center;">
                <p style="font-family:Arial,sans-serif;font-size:12px;color:#888;margin:0 0 4px;">
                  ${BRAND.name}
                </p>
                <p style="font-family:Arial,sans-serif;font-size:12px;color:#888;margin:0 0 2px;">
                  Port Harcourt, Nigeria
                </p>
                <p style="font-family:Arial,sans-serif;font-size:12px;color:#888;margin:0;">
                  <a href="${BRAND.url}" style="color:${BRAND.purple};text-decoration:underline;">${BRAND.url}</a>
                </p>
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function fieldRow(label: string, value: string): string {
  const display = value || "Not specified";
  return `<tr>
    <td style="padding:0 0 12px;">
      <span style="font-family:Arial,sans-serif;font-size:12px;color:#888;text-transform:uppercase;letter-spacing:0.5px;">${label}</span>
      <p style="font-family:Georgia,'Times New Roman',serif;font-size:15px;color:${BRAND.dark};margin:2px 0 0;line-height:1.5;">${display}</p>
    </td>
  </tr>`;
}

export function bookingAdminEmail(data: {
  name: string;
  organisation: string;
  eventType: string;
  date: string;
  guestCount: string;
  servicesRequired: string;
  budgetRange: string;
  additionalNotes: string;
  userEmail?: string;
}): string {
  const content = `
    <h1 style="font-family:Georgia,'Times New Roman',serif;font-size:24px;color:${BRAND.purple};margin:0 0 4px;font-weight:500;">
      New Booking Consultation
    </h1>
    <div style="width:40px;height:2px;background-color:${BRAND.gold};margin-bottom:24px;"></div>
    <p style="font-family:Arial,sans-serif;font-size:14px;color:#555;margin:0 0 24px;line-height:1.6;">
      A new consultation booking request has been submitted. Details below.
    </p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      ${fieldRow("Full Name", data.name)}
      ${fieldRow("Organisation", data.organisation)}
      ${fieldRow("Email", data.userEmail || "Not provided")}
      ${fieldRow("Event Type", data.eventType)}
      ${fieldRow("Estimated Date", data.date)}
      ${fieldRow("Guest Count", data.guestCount)}
      ${fieldRow("Services Required", data.servicesRequired)}
      ${fieldRow("Budget Range", data.budgetRange)}
      ${fieldRow("Additional Notes", data.additionalNotes)}
    </table>
  `;
  return wrapper(content);
}

export function bookingUserConfirmationEmail(data: {
  name: string;
  date: string;
}): string {
  const content = `
    <h1 style="font-family:Georgia,'Times New Roman',serif;font-size:24px;color:${BRAND.purple};margin:0 0 4px;font-weight:500;">
      Thank You, ${data.name}
    </h1>
    <div style="width:40px;height:2px;background-color:${BRAND.gold};margin-bottom:24px;"></div>
    <p style="font-family:Arial,sans-serif;font-size:14px;color:#555;margin:0 0 16px;line-height:1.6;">
      We have received your consultation request and will review the details you shared with us.
    </p>
    <p style="font-family:Arial,sans-serif;font-size:14px;color:#555;margin:0 0 16px;line-height:1.6;">
      A member of our team will reach out to you within <strong>24 hours</strong> to discuss your event and how we can help bring it to life.
    </p>
    ${data.date ? `
    <div style="background-color:${BRAND.champagne};border:1px solid #E8E0D0;border-radius:8px;padding:16px;margin:24px 0;">
      <p style="font-family:Arial,sans-serif;font-size:13px;color:${BRAND.purple};margin:0 0 4px;font-weight:600;">ESTIMATED DATE PROVIDED</p>
      <p style="font-family:Georgia,'Times New Roman',serif;font-size:16px;color:${BRAND.dark};margin:0;">${data.date}</p>
    </div>
    ` : ""}
    <p style="font-family:Arial,sans-serif;font-size:14px;color:#555;margin:16px 0 0;line-height:1.6;">
      In the meantime, feel free to explore our <a href="${BRAND.url}/work" style="color:${BRAND.purple};text-decoration:underline;">portfolio</a> to see past events we have produced.
    </p>
  `;
  return wrapper(content);
}

export function waitlistAdminEmail(data: {
  name: string;
  email: string;
  phone: string;
}): string {
  const content = `
    <h1 style="font-family:Georgia,'Times New Roman',serif;font-size:24px;color:${BRAND.purple};margin:0 0 4px;font-weight:500;">
      New Waitlist Signup
    </h1>
    <div style="width:40px;height:2px;background-color:${BRAND.gold};margin-bottom:24px;"></div>
    <p style="font-family:Arial,sans-serif;font-size:14px;color:#555;margin:0 0 24px;line-height:1.6;">
      Someone has joined the Early Access waitlist.
    </p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      ${fieldRow("Full Name", data.name)}
      ${fieldRow("Email", data.email)}
      ${fieldRow("Phone", data.phone)}
    </table>
  `;
  return wrapper(content);
}

export function waitlistUserConfirmationEmail(data: {
  name: string;
}): string {
  const content = `
    <h1 style="font-family:Georgia,'Times New Roman',serif;font-size:24px;color:${BRAND.purple};margin:0 0 4px;font-weight:500;">
      You Are On The List, ${data.name}
    </h1>
    <div style="width:40px;height:2px;background-color:${BRAND.gold};margin-bottom:24px;"></div>
    <p style="font-family:Arial,sans-serif;font-size:14px;color:#555;margin:0 0 16px;line-height:1.6;">
      Thanks for signing up for early access to <strong>Sterling EventOps</strong> — the operations platform built for Nigeria's event industry.
    </p>
    <p style="font-family:Arial,sans-serif;font-size:14px;color:#555;margin:0 0 16px;line-height:1.6;">
      We are working hard to get everything ready. You will be among the first to know when we launch.
    </p>
    <p style="font-family:Arial,sans-serif;font-size:14px;color:#555;margin:16px 0 0;line-height:1.6;">
      In the meantime, check out our <a href="${BRAND.url}" style="color:${BRAND.purple};text-decoration:underline;">website</a> to learn more about what we do.
    </p>
  `;
  return wrapper(content);
}
