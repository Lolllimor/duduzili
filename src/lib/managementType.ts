export interface FetchPermissionGroup {
  success: boolean;
  status_code: number;
  data: FetchPermissionGroupData;
  message: string;
}

export interface FetchPermissionGroupData {
  count: number;
  next: null;
  previous: null;
  results: FetchPermissionGroupResult[];
}

export interface FetchPermissionGroupResult {
  name: string;
  admin_count: number;
  is_active: boolean;
  created: Date;
  group_id: string;
}
