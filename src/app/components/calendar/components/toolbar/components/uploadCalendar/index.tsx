import { ButtonIcon } from "@ui"
import { FaUpload } from "react-icons/fa";
import { useUploadCalendar } from "./hooks";

export const UploadCalendar = () => {
  const { fileInputRef, uploadCalendar, triggerInputClick } = useUploadCalendar()

  return (
    <>
      <ButtonIcon icon={<FaUpload />} onClick={triggerInputClick} />
      <input
        type="file"
        accept=".json"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={uploadCalendar}
      />
    </>
  )
}