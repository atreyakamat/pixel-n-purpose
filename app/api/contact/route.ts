import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, brand, region, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // TODO: Implement actual email sending logic
    // For now, just log the form data
    console.log('Contact form submission:', {
      name,
      email,
      brand,
      region,
      message,
      timestamp: new Date().toISOString()
    });

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({ 
      success: true,
      message: 'Thank you for your message. We\'ll be in touch soon.' 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
