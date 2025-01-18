// app/api/download/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  // Example URL of the file (this could be from Cloudinary or your server)
  const fileUrl = req.nextUrl.searchParams.get('fileUrl');
  const filename = req.nextUrl.searchParams.get('filename') || 'default_filename.zip';
  if (!fileUrl) {
    return new NextResponse('File URL is required', { status: 400 });
  }
  // Fetch the file (if it's hosted externally like Cloudinary, you can directly send it as a stream)
  const response = await fetch(fileUrl);
  const fileBuffer = await response.arrayBuffer();

  // Set the headers for downloading the file
  const headers = new Headers();
  headers.set('Content-Disposition', `attachment; filename="${filename}.zip"`);
  headers.set('Content-Type', 'application/zip');

  // Send the file buffer as the response
  return new NextResponse(fileBuffer, {
    status: 200,
    headers,
  });
}