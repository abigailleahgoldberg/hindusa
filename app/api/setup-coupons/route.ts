import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const stripeKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeKey) return NextResponse.json({ error: 'No Stripe key' }, { status: 500 });

    const Stripe = (await import('stripe')).default;
    const stripe = new Stripe(stripeKey, { apiVersion: '2025-02-24.acacia' });

    // Check if coupon already exists
    try {
      await stripe.coupons.retrieve('hindusa-10-off');
    } catch {
      await stripe.coupons.create({
        id: 'hindusa-10-off',
        percent_off: 10,
        duration: 'forever',
        name: 'HindUSA 10% Off',
      });
    }

    // Create promotion code if it doesn't exist
    const existingPromos = await stripe.promotionCodes.list({ code: 'NAMASTE10', limit: 1 });
    if (existingPromos.data.length === 0) {
      await stripe.promotionCodes.create({
        coupon: 'hindusa-10-off',
        code: 'NAMASTE10',
        active: true,
      });
    }

    return NextResponse.json({ success: true, message: 'Coupon and promo code created' });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
