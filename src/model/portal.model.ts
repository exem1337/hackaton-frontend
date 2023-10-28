export interface IPortal {
  description: string;
  id: number;
  logo_url: string;
  name: string;
  departments: Array<IPortalDepartment>;
}

export interface IPortalDepartment {
  portal_id: number;
  name: string;
  id: number;
  description: string;
  topic: Array<IDepartmentTopic>;
}

export interface IDepartmentTopic {
  blob_id: number;
  department_id: number;
  id: number;
  name: string;
}