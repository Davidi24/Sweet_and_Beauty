import { ServiceType } from "../types/serviceType";
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import BugReportIcon from '@mui/icons-material/BugReport';
import BrushIcon from '@mui/icons-material/Brush';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import GridViewIcon from '@mui/icons-material/GridView';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';

const ServicesData: ServiceType[] = [
  {
    id: 1,
    icon: (
    <LaptopChromebookIcon fontSize="large"/>
    ),
    title: "Web Development",
    paragraph:
      "I utilize the latest technologies to build websites that not only look stunning but also provide an exceptional user experience",
  },
  {
    id: 2,
    icon: (
     <GridViewIcon fontSize="large"/>
    ),
    title: "UI/UX Design",
    paragraph:
      "I design clear, visually appealing interfaces using tools like Figma, Photoshop, and Illustrator to create smooth user experiences."
  },

  

  {
    id: 5,
    icon: (
      <BugReportIcon fontSize="large"/>
    ),
    title: "Software Testing",
    paragraph:
      "I employ a variety of testing methodologies, including functional, performance, and security testing, to resolve any issues before deployment.",
  },

  {
    id: 6,
    icon: (
      <SupportAgentIcon fontSize="large"/>
    ),
    title: "IT Consulting",
    paragraph:
      "I provide strategic advice, implementation support, and ongoing management to optimize your technology investments.",
  },

  

  
  {
    id: 3,
    icon: (
    <BrushIcon fontSize="large"/>
    ),
    title: "Graphic Design",
    paragraph:
      "I focus on combining creativity with strategy to design visuals that are both engaging and aligned with the brand’s identity.",
  },
  {
    id: 4,
    icon: (
      <SettingsSuggestIcon fontSize="large"/>
    ),
    title: "Ongoing Maintenance",
    paragraph:
      "I provide regular updates, performance monitoring, and prompt troubleshooting to keep your systems running at their best.",
  }



];
export default ServicesData;
