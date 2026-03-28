"use server";

interface WaitlistEntry {
  email: string;
  name: string;
  company: string;
  size: string;
  pain: string;
  createdAt: string;
}

// In production, replace with Supabase or Vercel KV
// For now, send to a webhook (n8n or Google Sheets via Zapier/Make)
const WEBHOOK_URL = process.env.WAITLIST_WEBHOOK_URL;

export async function joinWaitlist(formData: FormData): Promise<{
  success: boolean;
  message: string;
}> {
  const email = formData.get("email")?.toString().trim().toLowerCase();
  const name = formData.get("name")?.toString().trim() ?? "";
  const company = formData.get("company")?.toString().trim() ?? "";
  const size = formData.get("size")?.toString() ?? "";
  const pain = formData.get("pain")?.toString() ?? "";

  if (!email || !email.includes("@")) {
    return { success: false, message: "Email invalide." };
  }

  const entry: WaitlistEntry = {
    email,
    name,
    company,
    size,
    pain,
    createdAt: new Date().toISOString(),
  };

  // Send to webhook if configured
  if (WEBHOOK_URL) {
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(entry),
      });
    } catch (err) {
      console.error("Webhook error:", err);
      // Don't fail the user experience if webhook fails
    }
  } else {
    // Log to console in dev (visible in Vercel logs)
    console.log("WAITLIST_ENTRY:", JSON.stringify(entry));
  }

  return {
    success: true,
    message: "Bienvenue dans la liste !",
  };
}
