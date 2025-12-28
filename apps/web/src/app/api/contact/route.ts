import { contactFormSchema } from '@/lib/schema/contact';
import { NextResponse } from 'next/server';
import { resend } from '@/services/email';

export async function POST(req: Request) {
  
  try {
    const body = await req.json();
    const result = contactFormSchema.safeParse(body);
    
    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data" },
        { status: 400 }
      );
    }

    const { name, email, message } = result.data;

    
    const { error } = await resend.emails.send({
      from: 'business@onruntime.com',
      to: 'contact@onruntime.com',
      subject: `Nouveau message de contact de ${name}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    if (error) {
      console.error(error);
      return NextResponse.json(
        { error: "An error occurred" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "An error occurred" },
      { status: 500 }
    );
  }
}