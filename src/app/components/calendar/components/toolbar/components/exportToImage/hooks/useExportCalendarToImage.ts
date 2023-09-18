import * as htmlToImage from 'html-to-image';

export const useExportCalendarToImage = () => {
  const exportToImage = async () => {
    const calendarElement = document.querySelector('.rbc-calendar') as HTMLElement;

    if (calendarElement) {
      try {
        const dataUrl = await htmlToImage.toPng(calendarElement);

        const a = document.createElement('a');
        a.href = dataUrl;
        a.download = 'calendar.png';

        a.click();
      } catch (error) {
        console.error('Error exporting calendar:', error);
      }
    }
  };

  return { exportToImage };
}