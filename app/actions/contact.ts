"use server";

import { z } from "zod";
import { Resend } from "resend";
import { ContactFormEmail } from "@/components/Emails/ContactFormEmail";
import { EMAIL } from "@/lib/constant";

const resend = new Resend(process.env.RESEND_API_KEY);

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
    const { error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // Update this with your verified domain
      to: [EMAIL, "codebydinil@gmail.com"], // Update this with the destination email
      subject: `New Contact Form Submission from ${fname} ${lname}`,
      react: ContactFormEmail({ fname, lname, email, comments }),
    });

    if (error) {
      // ... (existing code)
      console.error("Resend Error:", error);
      return { message: "Failed to send email. Please try again later." };
    }

    return { success: true, message: "Message sent successfully!" };
  } catch (err) {
    return { message: "An unexpected error occurred." };
  }
}
