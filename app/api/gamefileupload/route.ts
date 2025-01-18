import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'dr8c1x4ai',
  api_key: '733569386728467',
  api_secret: 'dfpKUz9_q1pW9BqBAJIRxfoiaR4',
});


// POST handler for file uploads
export async function POST(req: Request) {
    try {
      const formData = await req.formData(); // Use formData() to parse the multipart/form-data
      const file = formData.get("file") as File;
  
      if (!file) {
        return NextResponse.json(
          { success: false, message: "No file provided" },
          { status: 400 }
        );
      }
  
      // Convert file to base64
      const buffer = await file.arrayBuffer();
      const base64File = `data:${file.type};base64,${Buffer.from(buffer).toString(
        "base64"
      )}`;

    //   const customPublicId = `${file.name.split(".")[0]}.zip`;
  
      // Upload to Cloudinary
      const uploadResponse = await cloudinary.uploader.upload(base64File, {
        folder: "gamefiles", // Customize folder name
        resource_type: "raw", // Required for non-image files like ZIPs
        // public_id: customPublicId, // Customize public ID for ZIP file name // Customize public ID for ZIP file name
      });
  
      // Cloudinary returns the URL directly for raw files
      const downloadUrl = uploadResponse.secure_url;
  
      return NextResponse.json(
        {
          success: true,
          url: downloadUrl, // This is the URL Cloudinary provides for raw files
        },
        { status: 200 }
      );
    } catch (error: any) {
      console.error("Upload error:", error);
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 500 }
      );
    }
  }
  