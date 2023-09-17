import { selectors, useAppSelector } from "@data";
import { useState } from "react"

export const useLabels = () => {
  const [isLabelsPopupShown, setLabelsPopupShown] = useState(false);
  const labels = useAppSelector(selectors.labels.getItemsList);

  const showLabelsPopup = () => {
    setLabelsPopupShown(true);
  }

  const closeLabelsPopup = () => {
    setLabelsPopupShown(false);
  }
  return {
    labels,
    isLabelsPopupShown,
    showLabelsPopup,
    closeLabelsPopup,
  }
}