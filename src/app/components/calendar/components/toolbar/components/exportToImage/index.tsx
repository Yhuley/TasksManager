import { ButtonIcon } from "@ui";
import { FaCamera } from "react-icons/fa";
import { useExportCalendarToImage } from "./hooks";

export const ExportToImage = () => {
  const { exportToImage } = useExportCalendarToImage()
  return (
    <ButtonIcon onClick={exportToImage} icon={<FaCamera />} />
  )
}