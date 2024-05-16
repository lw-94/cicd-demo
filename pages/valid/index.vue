<script setup lang="ts">
import { defineRule } from 'vee-validate'

defineRule('required', (value: any) => {
  console.log('🚀 ~ defineRule ~ value:', value)
  if (!value || !value.length)
    return 'This field is required'

  return true
})
defineRule('email', (value: any) => {
  // Field is empty, should pass
  if (!value || !value.length)
    return true

  // Check if email
  if (!/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/.test(value))
    return 'This field must be a valid email'

  return true
})
//
const f = ref({
  email: '',
  code: '',
})

function handleSubmit() {
  fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(f.value),
  })
}

const verifyCode = ref('/api/login/code')
function getVerifyCode() {
  verifyCode.value = `/api/login/code?${Math.random()}`
}
</script>

<template>
  <Form class="w100 flex flex-col gap8" @submit="handleSubmit">
    <Field v-slot="{ errors }" name="email" rules="required|email">
      <FloatLabel>
        <InputText id="email" v-model="f.email" :invalid="!!errors" />
        <label for="email">email</label>
      </FloatLabel>
      <small v-if="errors" name="email" :message="errors" />
    </Field>
    <Field v-slot="{ errors }" name="code" rules="required">
      <InputGroup>
        <FloatLabel>
          <InputText id="code" v-model="f.code" />
          <label for="code">code</label>
        </FloatLabel>
        <img :src="verifyCode" @click="getVerifyCode">
      </InputGroup>
      <ErrorMessage v-if="errors" name="code" :message="errors" />
    </Field>
    <Button type="submit" label="Submit" />
  </Form>
</template>

<style scoped lang="scss">
//
</style>
