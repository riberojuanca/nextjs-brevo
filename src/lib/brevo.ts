import * as brevo from "@getbrevo/brevo";

const apiInstance = new brevo.TransactionalEmailsApi();

apiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY as string
);

interface Params {
  subject: string;
  sender: { email: string; name: string };
  replyTo: { email: string; name: string };
  to: { email: string; name: string }[];
  htmlContent: string;
}

export async function sendEmail({
  subject,
  sender,
  replyTo,
  to,
  htmlContent,
}: Params) {
  try {
    const smtpEmail = new brevo.SendSmtpEmail();
    smtpEmail.subject = subject;
    smtpEmail.htmlContent = `<html><h1>${htmlContent}</h1></html>`;
    smtpEmail.to = to;
    smtpEmail.replyTo = replyTo;
    smtpEmail.sender = sender;

    await apiInstance.sendTransacEmail(smtpEmail);
  } catch (error) {
    console.log(error);
  }
}
