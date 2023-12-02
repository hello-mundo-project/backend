import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "dcmailreceiver@gmail.com",
    pass: "vztf hlnn bqgl jann"
  }
});

export async function sendMail(to: string, subject: string, text: string) {
  const message = {
    to,
    subject,
    text
  };

  await transport.sendMail(message, (err, info) => {
    if (err) {
      throw new Error(err?.message || "메일 발송 실패");
    }

    return info;
  });
}
