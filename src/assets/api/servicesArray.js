import ServiceImageOne from "../images/services-images/service-image-1.jpg"
import ServiceImageTwo from "../images/services-images/service-image-2.jpg"
import ServiceImageThree from "../images/services-images/service-image-3.jpg"

const serviceArray = [
  {
    id: "svc-01",
    title: "COMPLETE INTERIOR DESIGN PROJECT",
    image: ServiceImageOne,
    imgAlt: "This Is An Image Alt",
    description: [
      "This option involves first meeting with your designer on-site where you have the opportunity to discuss your vision, dreams, and needs, and also to agree on exactly what you would like to be involved in the project. We’ll delve into your everyday routines at home to make sure we can deliver not only a beautiful, but also a functional, interior for your everyday life.",
      "You’ll discuss the concept, colours, materials and furniture with your designer. The process may involve a number of personal shopping days where we’ll be out together in search of inspiration and to pick up those irresistible pieces, and to make ensure our design concept stays consistent and on track. Together we can purchase all orders and put in place the final dressings into your home.",
      "You will also be able to communicate with your interior designer on a daily basis to make sure every decision made is right, and will help us to achieve the best result.",
      "This service is for those that are looking for full support throughout the interior design process and for those who are not sure what they really want, or need help reigning in their imaginations and putting it into reality.",
    ],
    servicesList: [
      "Layouts",
      "Elevations",
      "Lighting & Electrical Plans",
      "Interior Design Concept",
      "Moodboards",
      "Colour & Material Palletes",
      "Shopping List",
      "Consultations & Site Visits",
      "Dressing & Snagging",
    ],
  },
  {
    id: "svc-02",
    title: "INTERIOR DESIGN CONCEPT",
    image: ServiceImageTwo,
    imgAlt: "This Is An Image Alt",
    description: [
      "If you know exactly the layout you're looking to have and you are confident with your own vision then my job will be to help you pick the right shades for your walls, floor, and ceiling, and the perfect textiles and furniture to ensure your vision will not be just beautiful and trendy but also perfectly functional.",
    ],
    servicesList: [
      "Moodboards",
      "Colour & Material Palletes",
      "Shopping List",
      "Home Visit",
    ],
  },
  {
    id: "svc-03",
    title: "ONE QUESTION",
    image: ServiceImageThree,
    imgAlt: "This Is An Image Alt",
    description: [
      "Need some advice on a relatively small interior design decision? Not too sure which coffee table would best suit your newly decorated living room, or simply which textiles might complement your existing decor?",
      "Sometimes we don’t need the full works, but there's something we just can’t put our finger on that’s missing in an otherwise beautiful and functional room. Maybe you were out shopping on a Saturday afternoon and couldn’t settle on new textiles for your room, or you were planning your picture collage but aren’t sure what layout looked the best.",
    ],
    servicesList: ["Advice on a single question to help you along"],
  },
]

export default serviceArray
