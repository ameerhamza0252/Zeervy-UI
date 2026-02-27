import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { amount, tierName, email } = await req.json();

    // TODO: Connect your Stripe secret key
    // const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
    // 
    // const session = await stripe.checkout.sessions.create({
    //   payment_method_types: ['card'],
    //   line_items: [{
    //     price_data: {
    //       currency: 'usd',
    //       product_data: { name: `Zeervy UI — ${tierName}` },
    //       unit_amount: amount * 100,
    //     },
    //     quantity: 1,
    //   }],
    //   mode: 'payment',
    //   success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/support?success=true`,
    //   cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/support`,
    //   customer_email: email,
    // });
    //
    // return NextResponse.json({ url: session.url });

    return NextResponse.json({ message: 'Connect Stripe to enable payments' }, { status: 501 });
  } catch (err) {
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
