<template>
  <el-dialog :visible.sync="$store.state.dialog.show">{{ $store.getters.not_show }}</el-dialog>
</template>

<script>
  export default {
    
  }
</script>
