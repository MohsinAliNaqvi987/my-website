export type ContactFields = {
  name: string;
  email: string;
  message: string;
};

type ParseSuccess = { ok: true; spam: false; data: ContactFields };
type ParseSpam = { ok: true; spam: true };
type ParseFailure = { ok: false; error: string };

export type ParseContactResult = ParseSuccess | ParseSpam | ParseFailure;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NAME_MAX = 80;
const MESSAGE_MAX = 5000;

function asTrimmedString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export function parseContactInput(input: unknown): ParseContactResult {
  if (!input || typeof input !== "object") {
    return { ok: false, error: "Invalid request body." };
  }

  const body = input as Record<string, unknown>;
  const honeypot = asTrimmedString(body.company_url);

  if (honeypot.length > 0) {
    return { ok: true, spam: true };
  }

  const name = asTrimmedString(body.name);
  const email = asTrimmedString(body.email).toLowerCase();
  const message = asTrimmedString(body.message);

  if (name.length < 2 || name.length > NAME_MAX) {
    return { ok: false, error: "Please enter a name between 2 and 80 characters." };
  }

  if (!EMAIL_PATTERN.test(email) || email.length > 254) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  if (message.length < 10 || message.length > MESSAGE_MAX) {
    return { ok: false, error: "Please enter a message between 10 and 5,000 characters." };
  }

  return {
    ok: true,
    spam: false,
    data: { name, email, message },
  };
}
