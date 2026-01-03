"use server";

import { z } from "zod";
import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import { ContactFormEmail } from "@/components/Emails/ContactFormEmail";
import { EMAIL } from "@/lib/constant";

const contactSchema = z.object({
  fname: z.string().min(1, "First name is required"),
  lname: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  comments: z.string().optional(),
});

export async function submitContactForm(
  prevState: unknown,
  formData: FormData,
) {
  const validatedFields = contactSchema.safeParse({
    fname: formData.get("fname"),
    lname: formData.get("lname"),
    email: formData.get("email"),
    comments: formData.get("comments"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please fix the errors below.",
    };
  }

  const { fname, lname, email, comments } = validatedFields.data;

  try {
    console.log("--- DEBUG CONTACT FORM ---");
    console.log(
      "GMAIL_USER:",
      process.env.GMAIL_USER ? `"${process.env.GMAIL_USER}"` : "UNDEFINED",
    );
    console.log(
      "GMAIL_APP_PASSWORD type:",
      typeof process.env.GMAIL_APP_PASSWORD,
    );
    console.log(
      "GMAIL_APP_PASSWORD length:",
      process.env.GMAIL_APP_PASSWORD?.length,
    );
    console.log("--------------------------");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const emailHtml = await render(
      // @ts-ignore
      ContactFormEmail({ fname, lname, email, comments }),
    );

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: EMAIL,
      subject: `New Contact Form Submission from ${fname} ${lname}`,
      html: emailHtml,
    });

    return { success: true, message: "Message sent successfully!" };
  } catch (err) {
    console.error("Nodemailer Error:", err);
    return { message: "Failed to send email. Please try again later." };
  }
}
