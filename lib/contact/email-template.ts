import type { ContactFields } from "./validation";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatSubmittedAt(date: Date) {
  return new Intl.DateTimeFormat("en-PK", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Asia/Karachi",
  }).format(date);
}

export function buildContactEmail(fields: ContactFields) {
  const submittedAt = new Date();
  const safeName = escapeHtml(fields.name);
  const safeEmail = escapeHtml(fields.email);
  const safeMessage = escapeHtml(fields.message).replace(/\r\n|\r|\n/g, "<br />");
  const readableDate = escapeHtml(formatSubmittedAt(submittedAt));
  const isoDate = escapeHtml(submittedAt.toISOString());
  const replyHref = `mailto:${safeEmail}?subject=${encodeURIComponent(
    `Re: Portfolio inquiry from ${fields.name}`,
  )}`;

  const subject = `New portfolio message from ${fields.name}`;

  const text = [
    "Portfolio Contact Message",
    "",
    `Name: ${fields.name}`,
    `Email: ${fields.email}`,
    `Submitted: ${formatSubmittedAt(submittedAt)} (${submittedAt.toISOString()})`,
    "",
    "Message:",
    fields.message,
  ].join("\n");

  const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>New Portfolio Contact Message</title>
  </head>
  <body style="margin:0;padding:0;background-color:#f1f5f9;font-family:Arial,Helvetica,sans-serif;color:#0f172a;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f1f5f9;padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background-color:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e2e8f0;">
            <tr>
              <td style="background-color:#0f172a;padding:28px 32px;">
                <p style="margin:0 0 6px;font-size:12px;letter-spacing:0.16em;text-transform:uppercase;color:#94a3b8;">Mohsin Naqvi</p>
                <h1 style="margin:0;font-size:22px;line-height:1.3;color:#ffffff;">New Portfolio Contact Message</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 32px 8px;">
                <p style="margin:0 0 20px;font-size:15px;line-height:1.6;color:#334155;">
                  Someone reached out through your portfolio contact form.
                </p>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:separate;border-spacing:0 10px;">
                  <tr>
                    <td style="background-color:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:14px 16px;">
                      <p style="margin:0 0 4px;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:#64748b;">Sender name</p>
                      <p style="margin:0;font-size:16px;font-weight:700;color:#0f172a;">${safeName}</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="background-color:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:14px 16px;">
                      <p style="margin:0 0 4px;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:#64748b;">Sender email</p>
                      <p style="margin:0;font-size:16px;color:#0f172a;">
                        <a href="mailto:${safeEmail}" style="color:#0284c7;text-decoration:none;">${safeEmail}</a>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style="background-color:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:14px 16px;">
                      <p style="margin:0 0 4px;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:#64748b;">Submitted</p>
                      <p style="margin:0;font-size:15px;color:#0f172a;">${readableDate}</p>
                      <p style="margin:6px 0 0;font-size:12px;color:#64748b;">${isoDate}</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 32px 28px;">
                <p style="margin:0 0 8px;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:#64748b;">Message</p>
                <div style="background-color:#ffffff;border:1px solid #e2e8f0;border-left:4px solid #0284c7;border-radius:12px;padding:16px 18px;font-size:15px;line-height:1.7;color:#1e293b;">
                  ${safeMessage}
                </div>
                <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:24px;">
                  <tr>
                    <td style="background-color:#0f172a;border-radius:999px;">
                      <a href="${replyHref}" style="display:inline-block;padding:12px 22px;font-size:14px;font-weight:700;color:#ffffff;text-decoration:none;">
                        Reply to Sender
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="background-color:#f8fafc;padding:16px 32px;border-top:1px solid #e2e8f0;">
                <p style="margin:0;font-size:12px;line-height:1.5;color:#64748b;">
                  This email was sent from the contact form on your portfolio site. Replying will go to the sender's address.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  return { subject, html, text };
}
