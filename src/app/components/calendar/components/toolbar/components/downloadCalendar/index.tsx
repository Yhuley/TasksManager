import { ButtonIcon } from "@ui";
import { FaDownload } from "react-icons/fa";
import { useDownloadCalendar } from "./hooks";

export const DownloadCalendar = () => {
  const { downloadCalendar } = useDownloadCalendar();
  return <ButtonIcon onClick={downloadCalendar} icon={<FaDownload /> } />
}