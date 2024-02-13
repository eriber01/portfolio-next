import cloudinary from "@/libs/cloudinary"
import { writeFileSync } from "fs"
import path from "path"
import fs from 'fs'

export interface ParamsGetById {
  params: {
    id: number
  }
}

interface returnImage {
  url: string
  publicId: string
  success: boolean
}

export async function updateImage(file: File, folder: string): Promise<returnImage> {
  try {

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const filepath = path.join(process.cwd(), 'public', file.name)

    await writeFileSync(filepath, buffer)

    const res = await cloudinary.uploader.upload(filepath, {
      folder: `newPortfolio/${folder}`,
      use_filename: true
    })

    await fs.unlink(filepath, error => {
      if (error) {
        console.log('error image: ', error);
        throw new Error("Error delete the image")
      }
    })

    return {
      publicId: res.public_id,
      success: true,
      url: res.secure_url
    }
  } catch (error) {
    console.log(error);

    return {
      publicId: '',
      success: false,
      url: ''
    }
  }

}

export const deleteImage = async (public_id: string) => {
  try {
    await cloudinary.uploader.destroy(public_id)
  } catch (error) {
    throw new Error("Error delete the image");
  }
}