import session from '@lib/session/session.js';
import { NextResponse } from 'next/server';

export function GET() {
  return session()
    .then((data) => {
      return NextResponse.json(data);
    })
    .catch((error) => {
      return NextResponse.json(
        { error: 'Failed to fetch session data' },
        { status: 500 }
      );
    });
}
 
