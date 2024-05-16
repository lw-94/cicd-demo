<script setup lang="tsx">
const name = ref(0)
const np = ref<string | number>(0)
//
function demoComponent(props: any) {
  // 给props设置类型来规定组件属性
  // props 任何属性变化都会重新刷新组件
  console.log('🚀 ~ demoComponent ~ props.a:', props.a)
  return (
    <>
      <div>demoComponent</div>
      <p class="ml4 text-red">
        name:
        {name.value}
      </p>
      <p>
        np:
        {props.np}
      </p>
    </>
  )
}
</script>

<template>
  <div>about</div>
  <Button @click="np = Math.random()">
    change np
  </Button>
  <Button @click="name = Math.random()">
    change name
  </Button>
  <demoComponent :np="np" a="1" />
</template>

<style scoped lang="scss">
//
.a {
  overflow: hidden;
  margin-left: 10px;
}
</style>
