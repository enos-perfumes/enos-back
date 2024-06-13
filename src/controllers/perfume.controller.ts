import { Request, Response } from "express";
import { Perfume } from "../models/perfume.model";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { uploadFileToS3 } from "../utils/uploadFileToS3";

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  },
});

export const getPerfumes = async (req: Request, res: Response) => {
  try {
    const perfumes = await Perfume.find();
    res.json(perfumes);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch perfumes" });
  }
};

export const createPerfume = async (req: Request, res: Response) => {
  try {
    const formData = req.body;

    const buffer = Buffer.from(formData.image, "base64");
    const fileName = uploadFileToS3(buffer, formData.name);

   console.log(req.files);

    const perfume = new Perfume({
      id: { $oid: "1234567890dasdgqrtfq34tq34tferwrgtw45"},
      name: formData.name,
      brand: formData.brand,
      description: formData.description,
      price: formData.price,
      volume: formData.volume,
      category: formData.category,
      notes: formData.notes,
      image: fileName,
      availability: formData.availability,
      quantity_available: formData.quantity_available,
    });

     console.log({perfume});


    // // const perfume = new Perfume(req.body);
    // // await perfume.save();
    res.status(201).json({ 
      success: true,
      message: "Perfume created",
      data: perfume,
     });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create perfume Error:" + error,
      data: []
    });
  }
};

export const deletePerfume = async (req: Request, res: Response) => {
  try {
    await Perfume.findByIdAndDelete(req.params.id);
    res.json({ message: "Perfume deleted" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete perfume" });
  }
};
