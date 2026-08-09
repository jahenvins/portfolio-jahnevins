import { supabase } from "./supabase";

export interface SentMessage {
  id: string;
  sender_email: string;
  created_at: string;
  subject?: string;
}

export interface SendMessageParams {
  senderEmail: string;
  subject: string;
  message: string;
}

// Function to send messages to Supabase
export async function sendMessageToSupabase({
  senderEmail,
  subject,
  message,
}: SendMessageParams) {
  const { data, error } = await supabase.from("messages").insert([
    {
      sender_email: senderEmail,
      subject: subject || "New message from portfolio",
      message: message,
    },
  ]);

  if (error) {
    throw error;
  }

  return data;
}

// Function to fetch sent messages for the "Sent" tab
export async function getSentMessages(): Promise<SentMessage[]> {
  const { data, error } = await supabase
    .from("messages")
    .select("id, sender_email, created_at, subject")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching sent messages:", error);
    return [];
  }

  return data || [];
}