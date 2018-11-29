# 小程序自定义弹窗组件


效果：

![弹窗效果图][1]

  [1]: ./images/J0K%5B%60VU8_%5DWUV4%5DLK61%5BNBB.png ""
  
  使用方法：
  
  

 1. 下载代码
 2. 将components文件加下的dialog目录拷贝到你的小程序目录下
 3. 在你要使用的页面json文件中引入组件，如下：

		{
		  "usingComponents": {
			"com-dialog": "/components/dialog/index"
		  }
		}

 4. 在wxml中插入组件
 
		<com-dialog id="dialog">
			 <!-- 这里插入组件内容 -->
		</com-dialog>
		

 5. 在js中调用显示组件

		Page({
		
		  onLoad: function (options) {
			this.dialog = this.selectComponent("#dialog")
		  },
		  
		  hideDialog: function(event){
			  this.dialog.hideDialog()
		  }

		  showDialog: function(event){
			this.dialog.showDialog()
		  }
		})
		
	### 贡献
	
	如果有任何问题或者建议，欢迎在issue中提出！！