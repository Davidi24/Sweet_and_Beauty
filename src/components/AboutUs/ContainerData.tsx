import CakeIcon from "@mui/icons-material/Cake";
import CookieIcon from "@mui/icons-material/Cookie";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import BrunchDiningIcon from "@mui/icons-material/BrunchDining";
import { AboutUsType } from "../../types/serviceType";

const ContainerData: AboutUsType[] = [
  {
    id: 1,
    icon: (
      <CakeIcon fontSize="large" />
    ),
    title: "Torte Personalizzate",
    paragraph:
      "Ogni torta è progettata su misura per riflettere il tuo stile e rendere ogni occasione speciale, unendo creatività e gusto.",
  },
  {
    id: 2,
    icon: (
      <CookieIcon fontSize="large" />
    ),
    title: "Ingredienti di Qualità",
    paragraph:
      "Utilizziamo solo ingredienti freschi e di alta qualità per garantire che ogni morso sia ricco, gustoso e indimenticabile.",
  },
  {
    id: 3,
    icon: (
      <MenuBookIcon fontSize="large" />
    ),
    title: "Ispirazione dalla Tradizione",
    paragraph:
      "Le nostre ricette uniscono le tradizioni della pasticceria con un tocco moderno per creare dolci familiari ma sorprendenti.",
  },
  {
    id: 4,
    icon: (
      <BrunchDiningIcon fontSize="large" />
    ),
    title: "Momenti Dolci da Condividere",
    paragraph:
      "Crediamo che i dolci siano fatti per essere condivisi—un modo per unire le persone e rendere ogni momento più bello.",
  },
];

export default ContainerData;
