<template>
  <div>
    <!-- <p>{{ $store.state.dialog.show }}</p>
    <p>{{ $store.state.dialog.child.show }}</p>
    <p>{{ a }}</p>
    <p>{{ b }}</p> -->
    <p>{{ not_show }}</p>
    <p>{{ not_show1 }}</p>
  </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
  export default {
    computed: {
      ...mapGetters('dialog',{
        'not_show':'not_show'
        }
      ),
      ...mapGetters('dialog',{
        'not_show1':'not_show1'
        }
      )

      // ...mapState({
      //   a: state => state.dialog.show,
      //   b: state => state.dialog.child.show
      // })
    },
  }
</script>