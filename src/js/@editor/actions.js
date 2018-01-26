actions: function(options) {
	var self = this;
	return {
		bold: {
			icon: '<b>B</b>',
			title: '粗体',
			result: function() {
				self.exec('bold')
			}
		},
		italic: {
			icon: '<i>I</i>',
			title: '斜体',
			result: function() {
				self.exec('italic')
			}
		},
		underline: {
			icon: '<u>U</u>',
			title: '下划线',
			result: function() {
				self.exec('underline')
			}
		},
		strikethrough: {
			icon: '<strike>S</strike>',
			title: '删除线',
			result: function() {
				self.exec('strikeThrough')
			}
		},
		heading1: {
			icon: '<b>H<sub>1</sub></b>',
			title: '标题',
			result: function() {
				self.exec('formatBlock', '<H1>')
			}
		},
		heading2: {
			icon: '<b>H<sub>2</sub></b>',
			title: '小标题',
			result: function() {
				self.exec('formatBlock', '<H2>')
			}
		},
		paragraph: {
			icon: '&#182;',
			title: '段落',
			result: function() {
				self.exec('formatBlock', '<P>')
			}
		},
		quote: {
			icon: '&#8220; &#8221;',
			title: '引用',
			result: function() {
				self.exec('formatBlock', '<BLOCKQUOTE>')
			}
		},
		olist: {
			icon: '&#35;',
			title: '有序列表',
			result: function() {
				self.exec('insertOrderedList')
			}
		},
		ulist: {
			icon: '&#8226;',
			title: '无序列表',
			result: function() {
				self.exec('insertUnorderedList')
			}
		},
		code: {
			icon: '&lt;/&gt;',
			title: '代码',
			result: function() {
				self.exec('formatBlock', '<PRE>')
			}
		},
		line: {
			icon: '&#8213;',
			title: '分隔线',
			result: function() {
				self.exec('insertHorizontalRule')
			}
		},
		link: {
			icon: '&#128279;',
			title: '链接',
			result: function() {
				var url = window.prompt('Enter the link URL');
				if (url) self.exec('createLink', url)
			}
		},
		image: {
			icon: '&#128247;',
			title: '图片',
			result: function() {
				var url = window.prompt('Enter the image URL');
				if (url) self.exec('insertImage', url)
			}
		},
		emotions: {
			icon: '🌝',
			title: '表情',
			result: function() {
				var face ='🌝';
				if (face) self.exec('insertText', face)
			}
		}
	}
},