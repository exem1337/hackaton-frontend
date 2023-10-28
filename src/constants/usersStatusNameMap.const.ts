import {StatusEmployeeEnum} from "../enums/statusEmployee.enum";

export const USERS_STATUS_NAME_MAP = new Map<StatusEmployeeEnum, string> (
   [
      [
         StatusEmployeeEnum.Active, 'Активный'
      ],
      [
         StatusEmployeeEnum.Vacation, 'Отпуск'
      ],
      [
         StatusEmployeeEnum.Fired, 'Уволен',
      ],
      [
         StatusEmployeeEnum.BusinessTrip, 'Командировка',
      ]
   ]
)