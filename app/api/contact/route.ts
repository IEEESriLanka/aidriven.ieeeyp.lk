import { NextRequest, NextResponse } from "next/server";
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

export async function POST(req: NextRequest) {
  const body = await req.json();

  const validatedFields = contactSchema.safeParse(body);
  if (!validatedFields.success) {
    return NextResponse.json(
      { message: "Please fix the errors below.", errors: validatedFields.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const { fname, lname, email, comments } = validatedFields.data;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const emailHtml = await render(
      // @ts-ignore
      ContactFormEmail({ fname, lname, email, comments })
    );

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: EMAIL,
      subject: `New Contact Form Submission from ${fname} ${lname}`,
      html: emailHtml,
    });

    return NextResponse.json({ success: true, message: "Message sent successfully!" });
  } catch (err) {
    console.error("Nodemailer Error:", err);
    return NextResponse.json({ message: "Failed to send email. Please try again later." }, { status: 500 });
  }
}
