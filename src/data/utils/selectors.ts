import { ReducerStatus } from "@data";

export const isSuccess = (reducer: ReducerStatus): boolean => reducer === ReducerStatus.success;
export const isPending = (reducer: ReducerStatus): boolean => reducer === ReducerStatus.pending;
export const isFailed = (reducer: ReducerStatus): boolean => reducer === ReducerStatus.failed;
