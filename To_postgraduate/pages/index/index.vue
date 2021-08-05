<template>
  <view class="index-container">
    <!-- 页面 -->
    <transition>
      <keep-alive>
        <Square v-show="index==0"></Square>
        <info v-show="index==1"></Info>
        <Search v-show="index==2"></Search>
		<College v-show="index==3"></College>
        <Mine v-show="index==4"></Mine>
      </keep-alive>
    </transition>

    <!-- 底部导航 -->
    <fooBar ref="foobar" @toIndex="toIndex"></fooBar>
  </view>
</template>

<script>
import fooBar from '../../components/fooBar/fooBar.vue'
import Square from '../Square/Square'
import Info from '../real_timeInfo/real_timeInfo'
import College from '../college/college.vue'
import Search from '../Search/Search'
import Mine from '../Mine/Mine'
export default {
  components: {
    fooBar,
    Square,
    Info,
    Search,
	College,
    Mine,
  },
  data() {
    return {
      title: 'Hello',
      index: 0,
    }
  },
  onLoad() {},
  watch: {},
  computed: {},
  methods: {
    toIndex(index) {
      // index 当前页面的索引
      this.index = index
      // 根据index判断页面
      // 修改自定义导航标题等
    },
  },
}
</script>

<style>
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateY(30rpx);
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.6s ease;
}
</style>
