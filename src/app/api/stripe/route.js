import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import AuthUser from '@/middleware/AuthUser';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export const dynamic = 'force-dynamic';

export async function POST(req) {
  try {
    const isAuthUser = await AuthUser(req);
    if (!isAuthUser) {
      return NextResponse.json(
        { success: false, message: 'You are not authenticated' },
        { status: 401 }
      );
    }

    const res = await req.json();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: res,
      mode: 'payment',
      success_url: `${baseUrl}/checkout?status=success`,
      cancel_url: `${baseUrl}/checkout?status=cancel`,
    });

    return NextResponse.json({
      success: true,
      id: session.id,
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      {
        success: false,
        message: 'Something went wrong! Please try again',
      },
      { status: 500 }
    );
  }
}
