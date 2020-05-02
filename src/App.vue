<template>
  <div id="app">
      <div class="row">
      <hm-button>按钮</hm-button>
      <hm-button type="primary">按钮</hm-button>
      <hm-button type="success">按钮</hm-button>
      <hm-button type="info">按钮</hm-button>
      <hm-button type="warning">按钮</hm-button>
      <hm-button type="danger">按钮</hm-button>
    </div>
    <div class="row">
      <hm-button plain>按钮</hm-button>
      <hm-button plain type="primary">按钮</hm-button>
      <hm-button plain type="success">按钮</hm-button>
      <hm-button plain type="info">按钮</hm-button>
      <hm-button plain type="warning">按钮</hm-button>
      <hm-button plain type="danger">按钮</hm-button>
    </div>
    <div class="row">
      <hm-button round>按钮</hm-button>
      <hm-button round icon="edit" type="primary">按钮</hm-button>
      <hm-button round type="success">按钮</hm-button>
      <hm-button round type="info">按钮</hm-button>
      <hm-button round type="warning">按钮</hm-button>
      <hm-button round type="danger">按钮</hm-button>
    </div>
    <div class="row">
      <hm-button icon="search" circle></hm-button>
      <hm-button icon="edit" circle type="primary"></hm-button>
      <hm-button icon="check" circle type="success"></hm-button>
      <hm-button icon="message" circle type="info"></hm-button>
      <hm-button icon="delete" circle type="warning"></hm-button>
      <hm-button icon="delete" circle type="danger"></hm-button>
    </div>
    <div class="row">
      <hm-button disabled>按钮</hm-button>
      <hm-button disabled type="primary">按钮</hm-button>
      <hm-button disabled type="success">按钮</hm-button>
      <hm-button disabled type="info">按钮</hm-button>
      <hm-button disabled type="warning">按钮</hm-button>
      <hm-button disabled type="danger">按钮</hm-button>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
    getInfo () {
      console.log('获取信息！！')//获取信息！！
    }
  }
}

</script>

<style lang="scss" scoped>
.row {
 margin-bottom: 20px;
 .hm-button{
   margin-right: 20px;
 }
}

</style>