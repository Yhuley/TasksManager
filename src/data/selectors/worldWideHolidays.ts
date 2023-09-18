import { RootState, WorldWideHoliday } from "@data";
import { isPending } from "@data/utils";
import { denormalize, schema } from 'normalizr';

export const getState = (state: RootState) => state.worldWideHolidays;
export const getEntities = (store: RootState) => getState(store).entities;
export const getList = (store: RootState) => getState(store).ids;
export const getItem = (store: RootState, holidayId: string) => getEntities(store)[holidayId];
export const getItemsList = (store: RootState): WorldWideHoliday[] => {
  const entities = {
    worldWideHolidays: getEntities(store),
  };

  return denormalize(getList(store), [new schema.Entity('worldWideHolidays')], entities);
};

export const getListLoading = (store: RootState) => isPending(getState(store).listLoading);
