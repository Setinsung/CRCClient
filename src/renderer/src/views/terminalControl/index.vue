<script setup lang="ts">
import Terminal from 'vue-web-terminal'
import 'vue-web-terminal/lib/theme/dark.css'
const onExecCmd = (key, command, success, failed) => {
  if (key === 'fail') {
    failed('Something wrong!!!')
  } else {
    const allClass = ['success', 'error', 'system', 'info', 'warning']

    const clazz = allClass[Math.floor(Math.random() * allClass.length)]
    success({
      type: 'normal',
      class: clazz,
      tag: '成功',
      content: command
    })
  }
}
</script>

<template>
  <div class="content">
    <div class="terminal">
      <terminal context="$" title="terminal" name="my-terminal" @exec-cmd="onExecCmd"> </terminal>
    </div>
  </div>
</template>

<style scoped lang="less">
.content {
  display: flex;
  justify-content: center;

  .terminal {
    display: flex;
    margin-top: 35px;
    width: 90%;
    height: 85%;
  }
}
</style>
