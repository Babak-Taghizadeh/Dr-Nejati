import { NextResponse } from 'next/server';

export async function GET() {
  const apiKey = process.env.MAP_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: 'API key not found' },
      { status: 500 }
    );
  }

  return NextResponse.json({ apiKey });
}
