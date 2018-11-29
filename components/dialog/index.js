// components/dialog/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
  },

  /**
   * 组件的初始数据
   */
  data: {
    showDialog: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    hideDialog: function(){
      // 隐藏弹窗
      this.setData({
        showDialog: false
      })
    },
    showDialog: function(){
      // 显示弹窗
      this.setData({
        showDialog: true
      })
    }
  }
})
