import { LabelType, RootState } from "@data";
import { denormalize, schema } from 'normalizr';

export const getState = (state: RootState) => state.labels;
export const getEntities = (store: RootState) => getState(store).entities;
export const getList = (store: RootState) => getState(store).ids;
export const getItemsTotal = (store: RootState): number => getState(store).count;
export const getItem = (store: RootState, labelId: string) => getEntities(store)[labelId];
export const getItemsList = (store: RootState): LabelType[] => {
  const entities = {
    labels: getEntities(store),
  };

  return denormalize(getList(store), [new schema.Entity('labels')], entities);
};