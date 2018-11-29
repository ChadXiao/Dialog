//index.js

Page({
  data: {
  },

  onLoad: function(){
    this.dialog = this.selectComponent("#dialog")
  },

  showDialog: function(){
    this.dialog.showDialog()
  }

})
