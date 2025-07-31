import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const body = await req.json()

  try {
    const data = await resend.emails.send({
      from: "Muhammad Tallal <onboarding@resend.dev>", // You can change this once you verify your domain
      to: "mmtallal@gmail.com", // Replace with your preferred recipient email
      subject: body.subject || "New message from your portfolio site",
      replyTo: body.email,
      html: `
        <h2>You've received a new message</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Message:</strong></p>
        <p>${body.message.replace(/\n/g, "<br />")}</p>
      `,
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ success: false, error }, { status: 500 })
  }
}
