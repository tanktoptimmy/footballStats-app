import mongoose from 'mongoose';
import dbConnect from '@/utils/dbConnect';
import Fixture from '@/models/fixture'; // Your Mongoose model
import { NextResponse } from 'next/server';

export async function GET(req) {
  const searchParams = req.nextUrl.searchParams;

  const id = searchParams.get('id');
  const season = searchParams.get('season');

  try {
    await dbConnect();
    const results = await Fixture.find(
      { 'league.id': id, season: parseInt(season, 10) },
      // '-events'
    );
    return NextResponse.json({ data: results });
  } catch (err) {
    return NextResponse.json({ message: 'Internal server error' });
  } finally {
    mongoose.disconnect();
  }
}
