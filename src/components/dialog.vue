<template>
<transition name="dialog-fade">
 <div class="hm-dialog_wrapper" v-show="visible" @click.self="handleClose">
   <div class="hm-dialog" :style="{width:width,marginTop:top}">
     <div class="hm-dialog_header">
       <slot name="title">
         <!-- 将span放到slot内，这样不仅可以定义title文本，还可以定义样式等 -->
        <span class="hm-dialog_title">
          {{title}}
        </span>
       </slot>
       <button class="hm-dialog_headerbtn" @click="handleClose">
         <i class="hm-icon-close"></i>
       </button>
     </div>
     <div class="hm-dialog_body">
       <span>这是一段信息</span>
     </div>
     <div class="hm-dialog_footer" v-if="$slots.footer">
       <hm-button>取消</hm-button>
       <hm-button type="primary">确定</hm-button>
     </div>
   </div>
 </div>
</transition>
</template>
<script>
export default {
  name: "HmDialog",
    props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    footer: {
      type: Object
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    handleClose () {
      this.$emit('update:visible', false)
    }
  }
}
</script>
<style lang="scss" scoped>
.hm-dialog_wrapper{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0,0,0,0.5);
  .hm-dialog{
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.3);
    box-sizing: border-box;
    width: 30%;
    &_header{
      padding: 20px 20px 10px;
      .hm-dialog_title{
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .hm-dialog_headerbtn{
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .hm-icon-close{
          color:909399
        }
      }
    }
    &_body{
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &_footer{
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      ::v-deep .hm-button:first-child{
        margin-right: 20px;
      }
    }
  }
}
//动画效果
.dialog-fade-enter-active{
  animation: fade .3s;
}
.dialog-fade-leave-active{
  animation: fade .3s reverse;
}
@keyframes fade{
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100%{
    opacity: 1;
    transform: translateY(0);
  }
}
</style>