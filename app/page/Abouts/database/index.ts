import { Tech } from "../interfaces"


const images: Tech[] = [
  {
    tech: 'https://res.cloudinary.com/eriber/image/upload/v1683686089/Portafolio/TechImage/Next_ypqi0c.png'
  },
  {
    tech: 'https://res.cloudinary.com/eriber/image/upload/v1682707385/Portafolio/TechImage/Mongo_bbsnp9.png'
  },
  {
    tech: 'https://res.cloudinary.com/eriber/image/upload/v1682707229/Portafolio/TechImage/Node_j6gk3i.png'
  },
  {
    tech: 'https://res.cloudinary.com/eriber/image/upload/v1682565758/Portafolio/TechImage/javas_oeirj7.png'
  },
  {
    tech: 'https://res.cloudinary.com/eriber/image/upload/v1682425350/Portafolio/TechImage/React_hm3wdk.png'
  },
]

export const getTech = () => {
  return images
}