
import { AddAdminAccess } from './modal/add-admin-access';
import { CreatePermissionGroup } from './modal/create-permission-group';

export const HeaderBtn = () => {
  return (
    <div className="flex gap-2.5 items-center font-inter">
      <AddAdminAccess />
      <CreatePermissionGroup/>
    </div>
  );
};
