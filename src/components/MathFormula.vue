<template>
  <div class="math-formula">
    <div
      contenteditable="true"
      id="matheq_latex"
      ref="mathRef"
    ></div>
    <div>
      <button
        type="button"
        v-for="(btnItem, index) in btns"
        :key="index"
        class="formular-list-btn"
        :class="{'list-btn-select': btnItem.selected||btnItem.overed, 'list-btn-normal': !btnItem.selected&&!btnItem.overed, 'list-btn-left-border': index===0}"
        @click="clickBtn(btnItem)"
        @mouseover="overBtn(btnItem)"
        @mouseout="outBtn(btnItem)"
      >{{btnItem.name}}</button>
    </div>
    <div class="math-header-formula">
      <span
        v-for="(mathDataSourceItem,index) in mathSet"
        :key="index"
        :id="`formula${index}`"
        class="formula-span"
      >
        <ul class="math-formula-eq" :style="{'width': widthArr[index]}">
          <li v-for="(mathItem, index) in mathDataSourceItem" :key="index">
            <a
              @click="toFormula(mathItem.replaceWith)"
              :style="{'background': 'url('+mathItem.background+') no-repeat center'}"
            >{{mathItem.name}}</a>
          </li>
        </ul>
      </span>
    </div>
    <footer class="math-footer">
      <button class="action-btn formula-confirm" @click="confirm">确定</button>
    </footer>
  </div>
</template>

<script>
import MATHSET from '../keyboards/mathFormulaResource.js'
// import MathQuill from 'mathquill/build/mathquill'

export default {
  props: {
    selectStr: {
      type: String
    }
  },

  data() {
    return {
      mathSet: MATHSET,
      widthArr: [
        '197px',
        '309px',
        '141px',
        '57px',
        '113px',
        '169px',
        '309px',
        '140px',
      ],
      btns: [
        { name: '基本', id: '0', selected: true, overed: false },
        { name: '组合', id: '1', selected: false, overed: false },
        { name: '集合', id: '2', selected: false, overed: false },
        { name: '逻辑', id: '3', selected: false, overed: false },
        { name: '几何', id: '4', selected: false, overed: false },
        { name: '化学', id: '5', selected: false, overed: false },
        { name: '字母', id: '6', selected: false, overed: false },
        { name: '序号', id: '7', selected: false, overed: false },
      ],
      bgImgUrl: './images/0.png',
      mathFiled: Object,
    }
  },

  mounted() {
    const MQ = MathQuill.getInterface(2)
    this.mathField = MQ.MathField(this.$refs.mathRef)
    if (this.selectStr) {
      this.mathField.write(this.selectStr)
    }
    window.addEventListener('message', this.editLatex)
  },

  methods: {
    editLatex(event) {
      console.log(event)
      const e = window.event ? window.event : event
      if (e.data.type !== 'latex') return

      this.mathField.empty()

      let data = e.data.latex
      if (data && data.length) {
        // 去掉ckeditor的公式匹配符\(\)
        data = data.replace(/\\\(/, '')
        data = data.replace(/\\\)/, '')

        // 处理部分特殊公式，进行替换
        // 2、求和
        if (data.indexOf('\\sum\\limits_') >= 0) {
          data = data.replace(/\\sum\\limits_/g, '\\sum_')
        }
        if (data.indexOf('\\prod\\limits_') >= 0) {
          data = data.replace(/\\prod\\limits_/g, '\\prod_')
        }
        // 3、极限
        if (data.indexOf('\\lim\\limits') >= 0) {
          data = data.replace(/\\lim\\limits/g, '{\\lim}')
        }
        // 4、空心字
        data = data.replace(/\\mathbb{R}/g, '\\R')
        data = data.replace(/\\mathbb{N}/g, '\\N')
        data = data.replace(/\\mathbb{Z}/g, '\\Z')
        data = data.replace(/\\mathbb{Q}/g, '\\Q')
        // 5.匹配大括号，前后{cases}之间要加一行空格
        data = data.replace(/\\begin{cases}/g, '\\begin{cases}{l}')

        data = data.replace(/\\!/g, '\\nospace')
        this.mathField.write(data)
      }
    },

    toFormula(code) {
      code = code.replace(/{\/}/g, '\\')
      code = code.replace(/\\!/g, '\\nospace')
      if (code === '\\text') {
        this.mathField.cmd('\\text')
      } else {
        this.mathField.write(code)
      }
    },

    clickBtn(btnItem) {
      let temp
      this.btns.forEach((item, index) => {
        if (item.id === btnItem.id) {
          item.selected = true
          temp = index
        } else {
          item.selected = false
        }
      })
      document.getElementById(`formula${temp}`).scrollIntoView(false)
      let uls = document.getElementsByClassName('math-formula-eq')
      for (let i = 0; i < uls.length; i++) {
        if (i == temp) {
          uls[i].style.border = '1px solid #4A82F7'
        } else {
          uls[i].style.border = 'none'
        }
      }
    },

    overBtn(btnItem) {
      btnItem.overed = true
    },

    outBtn(btnItem) {
      btnItem.overed = false
    },

    confirm() {
      let code = this.mathField.latex()
      // 对部分符号进行处理 --start
      // 求和符号
      if (code.indexOf('\\sum_') >= 0) {
        code = code.replace(/\\sum_/g, '\\sum\\limits_')
      }
      if (code.indexOf('\\prod_') >= 0) {
        code = code.replace(/\\prod_/g, '\\prod\\limits_')
      }
      // 上下标符号 +{}
      if (
        code.indexOf('\\') < 0 &&
        (/{([\s\S]*)}\^{([\s\S]*)}/.test(code) ||
          /{([\s\S]*)}_{([\s\S]*)}/.test(code))
      ) {
        code = `{${code}}`
      }
      // 极限符号
      if (code.indexOf('\\lim_') >= 0) {
        code = code.replace(/\\lim_/g, '\\lim\\limits_')
      }
      //多行大括号，去掉占位符
      if (code.indexOf('begin{cases}{l}') >= 0) {
        code = code.replace(/begin{cases}{l}/g, 'begin{cases}')
      }

      window.parent.postMessage(code, '*')
      this.clickBtn(this.btns[0])
    },

    close() {
      this.$emit('close')
    }
  },
}
</script>

<style scoped>
.math-formula {
  position: fixed;
  background: #ffffff;
  border-radius: 2px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
  width: 525px;
  height: 315px;
  padding: 0 10px;
}
.formular-list-btn {
  width: 65px;
  height: 28px;
  background: #f5f7fa;
  border-bottom: 1px solid #e2e6ed;
  border-top: 1px solid #e2e6ed;
  border-right: 1px solid #e2e6ed;
  border-left: 0;
  display: inline-block;
  margin: 0 auto 4px;
  outline: none;
  font-size: 14px;
}
.list-btn-select {
  background: #4a82f7;
  color: #fff;
}
.list-btn-normal {
  background: #f5f7fa;
  color: #666666;
}
.list-btn-left-border {
  border-left: 1px solid #e2e6ed;
}
#matheq_latex {
  width: 525px;
  height: 110px;
  border: 1px solid #e2e6ed;
  background: #fff;
  margin-top: 10px;
  overflow: hidden;
  text-align: left;
  font-size: 30px;
}
.math-header-formula {
  overflow: hidden;
  white-space: nowrap;
  height: 116px;
}
.math-formula-eq {
  height: 114px;
  overflow: hidden;
  /* background-attachment:fixed; */
  background-position: 10px 8px;
  background-color: rgb();
}
#formula0 .math-formula-eq {
  border: 1px solid #4a82f7;
}
.math-footer {
  border-top: 1px solid #e2e6ed;
  height: 46px;
  font-size: 0;
}
ul li {
  list-style: none;
  text-indent: -10000px;
  float: left;
  width: 28px;
  height: 28px;
}
ul a {
  display: block;
  width: 28px;
  height: 28px;
  border: solid 0.5px #e2e6ed;
  text-indent: -10000px;
  background-repeat: no-repeat;
  background: #fff;
}
ul {
  margin: 0;
  padding: 0;
  display: inline-block;
  vertical-align: top;
}
.formula-span + .formula-span {
  margin-left: 13px;
}
a:hover {
  border-color: #2978fb;
}
.formula-confirm:hover {
  background: #c4c2c6;
}
.action-btn {
  border: 1px solid #bfc0c6;
  width: 49px;
  height: 22px;
  margin: 9px 0;
  bottom: 0;
  background-color: white;
}

.formula-confirm {
  background: #4a82f7;
  border-radius: 2px;
  color: #fff;
  font-size: 14px;
  width: 68px;
  height: 30px;
  float: right;
  margin-top: 7px;
}
.font-state-choosen {
  background: #9c9ea7;
}
.font-state-normal {
  background: white;
}
</style>
