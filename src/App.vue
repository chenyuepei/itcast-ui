<template>
  <div id="app">
    <!-- <div class="row">
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
    </div>-->

    <!-- <hm-dialog title="温馨提示">
        使用v-slot指定插槽进行编辑
        <template v-slot:title>
          <h3 style="color:red">我是标题</h3>
        </template>
    </hm-dialog>-->

    <!-- <hm-dialog visible width="80%" top="200px"></hm-dialog> -->
    <!-- <hm-button type="primary" @click="visible = true">按钮</hm-button>
      <hm-dialog :visible.sync="visible">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
        <template v-slot:footer>
           <hm-button type="primary" @click="visible=false">确定</hm-button>
           <hm-button @click="visible=false">取消</hm-button>
        </template>
    </hm-dialog>-->

    <!-- input组件 -->
    <!-- <div class="hm-input">
        <hm-input placeholder="请输入用户名" v-model="username" clearable></hm-input>
      <hm-input placeholder="请输入用户名" type="password"  v-model="username" showPassword></hm-input>
    </div> -->

    <!-- <hm-switch v-model="active" ></hm-switch>
    <hm-switch
     v-model="active"
     active-color="#13ce66"
     inactive-color="#ff4949"
     ></hm-switch>
   -->
        <hm-radio label="1" v-model="gender">男</hm-radio>
      <hm-radio label="0" v-model="gender">女</hm-radio>
   <radio-groud v-model="gender">
     <hm-radio label="1">男</hm-radio>
     <hm-radio label="0">女</hm-radio>
   </radio-groud>

  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      username:'cyp',
      active:false,
      gender:'1'
    };
  },
  methods: {
    getInfo() {
      console.log("获取信息！！"); //获取信息！！
    }
  }
};
</script>

<style lang="scss" scoped>
// .row {
//   margin-bottom: 20px;
//   .hm-button {
//     margin-right: 20px;
//   }
// }

#app {
  .hm-input {
    width: 180px;
  }
}
</style>