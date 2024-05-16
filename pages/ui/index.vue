<script setup lang="ts">
//
const appStore = useAppStore()
const { name } = storeToRefs(appStore)
const confirm = useConfirm()

const items = ref([
  {
    label: 'Files',
    icon: 'i-ooui:copy-rtl',
    items: [
      {
        label: 'Documents',
        icon: 'pi pi-file',
        items: [
          {
            label: 'Invoices',
            icon: 'pi pi-file-pdf',
            items: [
              {
                label: 'Pending',
                icon: 'pi pi-stop',
              },
              {
                label: 'Paid',
                icon: 'pi pi-check-circle',
              },
            ],
          },
          {
            label: 'Clients',
            icon: 'pi pi-users',
          },
        ],
      },
      {
        label: 'Images',
        icon: 'pi pi-image',
        items: [
          {
            label: 'Logos',
            icon: 'pi pi-image',
          },
        ],
      },
    ],
  },
  {
    label: 'Cloud',
    icon: 'pi pi-cloud',
    items: [
      {
        label: 'Upload',
        icon: 'pi pi-cloud-upload',
      },
      {
        label: 'Download',
        icon: 'pi pi-cloud-download',
      },
      {
        label: 'Sync',
        icon: 'pi pi-refresh',
      },
    ],
  },
  {
    label: 'Devices',
    icon: 'pi pi-desktop',
    items: [
      {
        label: 'Phone',
        icon: 'pi pi-mobile',
      },
      {
        label: 'Desktop',
        icon: 'pi pi-desktop',
      },
      {
        label: 'Tablet',
        icon: 'pi pi-tablet',
      },
    ],
  },
])

const products = ref([
  {
    code: 123,
    name: 456,
    cate: 60,
    qu: 9090,
  },
  {
    code: 333,
    name: 456,
    cate: 60,
    qu: 9,
  },
])
</script>

<template>
  <div>ui</div>
  <ConfirmDialog>
    <template #container>
      <div class="bg-white dark:bg-black">
        <Button unstyled @click="confirm.close">
          close
        </Button>
      </div>
    </template>
  </ConfirmDialog>
  <PanelMenu :model="items" unstyled>
    <template #item="{ item }">
      <a v-ripple class="align-items-center flex cursor-pointer px-3 py-2">
        <span class="text-primary" :class="[item.icon]" />
        <span class="ml-2" :class="[{ 'font-semibold': item.items }]">{{ item.label }}</span>
        <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
        <span v-if="item.shortcut" class="ml-auto border-1 p-1 text-xs">{{ item.shortcut }}</span>
      </a>
    </template>
  </PanelMenu>
  <Button :label="name" class="border-blue border-red bg-yellow" @click="confirm.require">
    <template #icon>
      <div class="i-ooui:copy-rtl text-red" />
    </template>
  </Button>
  <DataTable :value="products" class="cus-table" :row-class="() => 'bg-red '">
    <Column field="code" header="Code" />
    <Column field="name" header="Name" />
    <Column field="cate" header="Cate" />
    <Column field="qu" header="Qu" />
  </DataTable>
</template>

<style scoped lang="scss">
//
.cus-table {
  --uno: 'w200 rounded-xl overflow-hidden';
}
:deep(.p-datatable-thead th) {
  --uno: 'bg-yellow border-b-blue';
  > div {
    --uno: 'text-center';
  }
}
</style>
