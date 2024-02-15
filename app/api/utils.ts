import cloudinary from "@/libs/cloudinary"

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

interface resImg {
  public_id: string
  secure_url: string
}

export async function updateImage(file: File, folder: string): Promise<returnImage> {
  console.log("Entreeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee!");

  try {
    console.log("antes del buffer!");

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    console.log("despues del buffer!");

    // const filepath = path.join(process.cwd(), 'public', file.name)

    // await writeFileSync(filepath, buffer)

    // const res = await cloudinary.uploader.upload(filepath, {
    //   folder: `newPortfolio/${folder}`,
    //   use_filename: true
    // })

    const res: any = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream({}, (err, result) => {
        console.log('dentro del bloque antes del error');

        if (err) reject(err)
        console.log('dentro del bloque despues del error', err);

        console.log('el resultado: ', result);

        resolve(result)
      }).end(buffer)
    })

    console.log("despues de subir antes del mensaje!");

    console.log('Respuesta del servidor:', res);

    // await fs.unlink(filepath, error => {
    //   if (error) {
    //     console.log('error image: ', error);
    //     throw new Error("Error delete the image")
    //   }
    // })

    return {
      publicId: res.public_id,
      success: true,
      url: res.secure_url
    }
  } catch (error) {
    console.log('Error al subir la imagen a Cloudinar', error);

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