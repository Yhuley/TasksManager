import { AppEvent, RootState } from "@data";
import { denormalize, schema } from 'normalizr';

export const getState = (state: RootState) => state.events;
export const getEntities = (store: RootState) => getState(store).entities;
export const getList = (store: RootState) => getState(store).ids;
export const getItemsTotal = (store: RootState): number => getState(store).count;
export const getItem = (store: RootState, eventId: string) => getEntities(store)[eventId];
export const getItemsList = (store: RootState): AppEvent[] => {
  const entities = {
    events: getEntities(store),
  };

  return denormalize(getList(store), [new schema.Entity('events')], entities);
};