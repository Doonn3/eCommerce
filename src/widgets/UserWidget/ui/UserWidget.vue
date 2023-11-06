<script lang="ts" setup>
import { DropDownDisplay } from '@shared/ui-kit/Navigation';
import { useCustomer } from '@entities/Customer';
import { UserLogout } from '@features/User/Logout';
import { UserViewProfile } from '@features/User/ViewProfile';

const customer = useCustomer();
</script>
<template>
  <drop-down-display :name="customer.GetUserName || ''">
    <UserViewProfile />
    <UserLogout />
  </drop-down-display>
</template>
