import settingIcon from "../assets/settings.png";
import bellIcon from "../assets/bell.png";
import profileIcon from "../assets/profile.png";
import cardIcon1 from "../assets/chip1.png";
import cardIcon2 from "../assets/chip2.png";
import bankIcon1 from "../assets/card-gray.png";
import bankIcon2 from "../assets/card-white.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import nextIcon from "../assets/Group 56@2x.png";
import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";
import person4 from "../assets/person4.png";
import sendIcon from "../assets/send.png";

function imgImport(imgName) {
  console.log("dwfewfw", imgName);
  switch (imgName) {
    case "settingIcon":
      return settingIcon;
    case "bellIcon":
      return bellIcon;
    case "profileIcon":
      return profileIcon;
    case "cardIcon1":
      return cardIcon1;
    case "cardIcon2":
      return cardIcon2;
    case "sendIcon":
      return sendIcon;
    case "bankIcon1":
      return bankIcon1;
    case "bankIcon2":
      return bankIcon2;
    case "icon1":
      return icon1;
    case "icon2":
      return icon2;
    case "icon3":
      return icon3;
    case "nextIcon":
      return nextIcon;
    case "person1":
      return person1;
    case "person2":
      return person2;
    case "person3":
      return person3;
    case "person4":
      return person4;
    default:
      return "";
  }
}

export default imgImport;
