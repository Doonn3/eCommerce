<script lang="ts" setup>
type PropsType = {
  nameColumns: string[];
  data: string[];
};

const props = defineProps<PropsType>();
</script>

<template>
  <div class="overflow-x-auto">
    <!-- class=table table-zebra table-pin-rows table-pin-cols -->
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <!-- <th></th> -->
          <th
            v-for="(name, index) in props.nameColumns"
            :key="index"
          >
            {{ name }}
          </th>
          <!-- <th></th> -->
          <!-- <th>Name</th> -->
          <!-- <th>Job</th> -->
          <!-- <th>Favorite Color</th> -->
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr class="bg-base-200">
          <!-- <th>1</th> -->

          <td
            v-for="(item, index) in props.data"
            :key="index"
          >
            {{ item }}
          </td>

          <!-- <th>1</th> -->
          <!-- <td>Cy Ganderton</td> -->
          <!-- <td>Quality Control Specialist</td> -->
          <!-- <td>Blue</td> -->
        </tr>
        <!-- row 2 -->
        <!-- <tr>
          <th>2</th>
          <td>Hart Hagerty</td>
          <td>Desktop Support Technician</td>
          <td>Purple</td>
        </tr> -->
        <!-- row 3 -->
        <!-- <tr>
          <th>3</th>
          <td>Brice Swyre</td>
          <td>Tax Accountant</td>
          <td>Red</td>
        </tr> -->
      </tbody>
    </table>
  </div>
</template>
