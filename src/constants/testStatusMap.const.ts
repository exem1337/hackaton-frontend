import { ETestStatuses } from "../enums/testStatuses.enum";

export const TEST_STATUS_MAP = new Map<ETestStatuses, string>([
  [ETestStatuses.Active, 'Активный'],
  [ETestStatuses.Done, 'Завершен']
])