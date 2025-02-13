/* eslint-disable no-restricted-imports */
import { RequestResult } from 'packages/request';
import { CallEffect, PutEffect, Saga, SagaInjectionModes } from 'packages/saga';
import { AnyAction, IRootState } from 'libs/slice';

export type TRootStateKeyType = keyof IRootState;

export interface IInjectRepositoryParams {
  key: TRootStateKeyType | string;
  repository: Saga;
  mode?: SagaInjectionModes;
}

export type SagaResult = Generator<CallEffect<RequestResult> | PutEffect<AnyAction>, void>;
