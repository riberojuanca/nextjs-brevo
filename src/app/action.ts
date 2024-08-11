"use server";
import { sendEmail } from "@/lib/brevo";

export default async function handleForm(formData: FormData) {
  const title = formData.get("title");
  const from_name = formData.get("from_name");
  const from_email = formData.get("from_email");
  const content = formData.get("content");

  await sendEmail({
    subject: title as string,
    sender: {
      name: from_name as string,
      email: "riberojuanca@gmail.com",
    },
    to: [
      {
        name: "Juanca",
        email: "juancaribero@icloud.com",
      },
    ],
    replyTo: {
      name: from_name as string,
      email: from_email as string,
    },

    htmlContent: content as string,
  });
}
