import { LabelType, selectors, useAppDispatch, useAppSelector } from "@data";
import { createEvent } from "@data/reducers/events";
import { Event } from 'react-big-calendar';
import { v4 as uuid } from "uuid";
import { useRef } from "react";
import { createLabel } from "@data/reducers/labels";

export const useUploadCalendar = () => {
  const dispatch = useAppDispatch();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const labelIds = useAppSelector(selectors.labels.getList);

  const triggerInputClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }

  const checkIfParsedEventIsValid = (event: Event) =>
    event.hasOwnProperty('start') && event.hasOwnProperty('end') && event.hasOwnProperty('title');

  const checkIfLabelIsValid = (label: LabelType) =>
    label.hasOwnProperty('color') && label.hasOwnProperty('title')

  const createLabelsIfNeeded = (event: Event) => {
    if (event.labels) {
      event.labels.map((label) => {
        if (checkIfLabelIsValid(label) && !labelIds.includes(label.id)) {
          dispatch(createLabel({ ...label, id: label.id || uuid() }))
        }
      })
    }
  }

  const uploadCalendar = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      const file = e.target?.files[0];
      const reader = new FileReader();

      reader.onload = (event) => {
        try {
          if (event.target?.result && typeof event.target?.result === "string") {
            const parsedEvents: Event[] = JSON.parse(event.target.result);
            parsedEvents.map((parsedEvent) => {
              if (checkIfParsedEventIsValid(parsedEvent)) {
                createLabelsIfNeeded(parsedEvent);

                const convertedEvent: Event = {
                  ...parsedEvent,
                  id: parsedEvent.id || uuid(),
                  start: new Date(parsedEvent.start || new Date()),
                  end: new Date(parsedEvent.end || new Date()),
                }
                dispatch(createEvent(convertedEvent))
              }
            })
          }
        } catch (error) {
          console.error('Error parsing file:', error);
        } finally {
          e.target.value = '';
        }
      };

      reader.readAsText(file);
    }
  }

  return {
    uploadCalendar,
    fileInputRef,
    triggerInputClick,
  }
}