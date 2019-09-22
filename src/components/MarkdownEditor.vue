<template>
  <div>
    <mavon-editor v-model="Markdown" box-shadow="false" ishljs="true" codestyle="vs2015" scrollStyle="true" :toolbars="config"></mavon-editor>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import mavonEditor from "mavon-editor-guoj";
import "mavon-editor-guoj/dist/css/index.css";

Vue.use(mavonEditor);
export default Vue.extend({
  props: ["Markdown"],
  data() {
    return {
      config: {
        bold: true,
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: false, // 链接
        imagelink: false, // 图片链接
        code: false, // code
        table: false, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: false, // 帮助
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: false, // 保存（触发events中的save事件）
        navigation: true, // 导航目录
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        subfield: true, // 单双栏模式
        preview: true // 预览
      }
    };
  }
});
</script>