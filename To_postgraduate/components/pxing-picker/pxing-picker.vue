<template>
	<view class="con">
		<view v-if="isshow" class="mypicker" @click="hide"></view>
		<view class="btn" v-if="isshow">
			<view class="btn_left">
				<text class="bl_text" @click="hide">取消</text>
			</view>
			<view class="btn_right">
				<text class="br_text" @click="chooseSure">确认</text>
			</view>
		</view>
		<picker-view v-if="isshow" :value="value" @change="bindchange" class="picker-view">
			<picker-view-column>
				<view class="item" v-for="(item,index) in selectList" :key="index">{{item.label}}</view>
			</picker-view-column>
			<picker-view-column v-if="totalLength!=1">
				<view class="item" v-for="(item,index) in selectList[value[0]].children" :key="index">{{item.label}}</view>
			</picker-view-column>
			<picker-view-column v-if="totalLength!=1&&totalLength!=2">
				<view class="item" v-for="(item,index) in selectList[value[0]].children[value[1]].children" :key="index">{{item.label}}</view>
			</picker-view-column>
			<picker-view-column v-if="totalLength==4">
				<view class="item" v-for="(item,index) in selectList[value[0]].children[value[1]].children[value[2]].children" :key="index">{{item.label}}</view>
			</picker-view-column>
		</picker-view>
		
	</view>
</template>

<script>
	export default {
		name:'pxingPicker',
		props:{
			deepLength:{ //联动层级
				type: Number
			},
			chooseList:{ //选择数据
				type: Array,
				default: []
			},
			defaultChooseList:{ //默认选择
				type: Array,
				default: []
			}
		},
		watch:{
			chooseList:{
				immediate: true,
				handler(n,o){
					this.selectList = n;
				}
			},
			defaultChooseList:{
				immediate: true,
				handler(n,o){
					this.value = n;
				}
			},
			deepLength:{
				immediate: true,
				handler(n,o){
					this.totalLength = n;
				}
			}
		},
		data() {
			return {
				isshow: false,
				choose: [],
				value: [],
				selectList: [],
				totalLength: this.$props.deepLength
			};
		},
		methods:{
			show(){
				this.isshow = true;
			},
			chooseSure(){
				this.choose = [];
				if(this.totalLength==1){
					var tempone = {
						value: this.selectList[this.value[0]].value,
						label: this.selectList[this.value[0]].label
					}
					this.choose.push(tempone);
				}else if(this.totalLength==2){
					var tempone = {
						value: this.selectList[this.value[0]].value,
						label: this.selectList[this.value[0]].label
					}
					var temptwo = {
						value: this.selectList[this.value[0]].children[this.value[1]].value,
						label: this.selectList[this.value[0]].children[this.value[1]].label
					}
					this.choose.push(tempone,temptwo);
				}else if(this.totalLength==3){
					var tempone = {
						value: this.selectList[this.value[0]].value,
						label: this.selectList[this.value[0]].label
					}
					var temptwo = {
						value: this.selectList[this.value[0]].children[this.value[1]].value,
						label: this.selectList[this.value[0]].children[this.value[1]].label
					}
					var tempthree = {
						value: this.selectList[this.value[0]].children[this.value[1]].children[this.value[2]].value,
						label: this.selectList[this.value[0]].children[this.value[1]].children[this.value[2]].label
					}
					this.choose.push(tempone,temptwo,tempthree);
				}else{
					var tempone = {
						value: this.selectList[this.value[0]].value,
						label: this.selectList[this.value[0]].label
					}
					var temptwo = {
						value: this.selectList[this.value[0]].children[this.value[1]].value,
						label: this.selectList[this.value[0]].children[this.value[1]].label
					}
					var tempthree = {
						value: this.selectList[this.value[0]].children[this.value[1]].children[this.value[2]].value,
						label: this.selectList[this.value[0]].children[this.value[1]].children[this.value[2]].label
					}
					var tempfour = {
						value: this.selectList[this.value[0]].children[this.value[1]].children[this.value[2]].children[this.value[3]].value,
						label: this.selectList[this.value[0]].children[this.value[1]].children[this.value[2]].children[this.value[3]].label
					}
					this.choose.push(tempone,temptwo,tempthree,tempfour);
				}
				this.$emit('confirm',this.choose);
				this.isshow = false;
			},
			hide(){
				this.isshow = false;
			},
			bindchange(e){
				if(this.totalLength==1){
					this.value = e.detail.value;
				}else if(this.totalLength==2){
					var templist = e.detail.value;
					if(this.value[0]!=templist[0]){
						this.value = [templist[0],0];
					}else{
						this.value = e.detail.value;
					}
				}else if(this.totalLength==3){
					var templist = e.detail.value;
					if(this.value[0]!=templist[0]){
						this.value = [templist[0],0,0];
					}else if(this.value[1]!=templist[1]){
						this.value = [templist[0],templist[1],0];
					}else{
						this.value = e.detail.value;
					}
				}else if(this.totalLength==4){
					var templist = e.detail.value;
					if(this.value[0]!=templist[0]){
						this.value = [templist[0],0,0,0];
					}else if(this.value[1]!=templist[1]){
						this.value = [templist[0],templist[1],0,0];
					}else if(this.value[2]!=templist[2]){
						this.value = [templist[0],templist[1],templist[2],0];
					}else{
						this.value = e.detail.value;
					}
				}
				
			}
		}
	}
</script>

<style lang="scss">
	.con{
		width: 100%;
		.c_label{
			padding-top: 40upx;
			width: 96%;
			margin: 0 auto;
			height: 60upx;
			line-height: 60upx;
			letter-spacing: 2upx;
			font-size: 28upx;
			color: #222;
			font-weight: bold;
		}
		.c_input{
			width: 96%;
			margin: 8upx auto 0;
			height: 80upx;
			background-color: #f6f6f6;
			border-radius: 10upx;
			.ci_i{
				width: 96%;
				padding: 0 2%;
				height: 80upx;
				line-height: 80upx;
				font-size: 28upx;
			}
		}
		.mypicker{
			width: 100vw;
			height: 100vh;
			background-color: #666;
			opacity: 0.5;
			position: fixed;
			top: 0;
			left: 0;
		}
		.btn{
			width: 100%;
			height: 80upx;
			background-color: #fff;
			bottom: 460upx;
			position: fixed;
			border-bottom: 1px solid #f6f6f6;
			display: flex;
			border-radius: 16upx 16upx 0 0;
			.btn_left{
				width: 45%;
				margin-left: 5%;
				height: 80upx;
				line-height: 80upx;
				text-align: left;
				.bl_text{
					font-size: 28upx;
					color: #999;
					letter-spacing: 6upx;
					font-weight: 400;
				}
			}
			.btn_right{
				width: 45%;
				margin-right: 5%;
				height: 80upx;
				line-height: 80upx;
				text-align: right;
				.br_text{
					font-size: 28upx;
					color: #1ba784;
					letter-spacing: 6upx;
					font-weight: 400;
				}
			}
		}
		.picker-view{
			width: 100%;
			height: 460upx;
			position: fixed;
			z-index: 1;
			bottom: 0;
			background-color: #fff;
			.item{
				display: flex;
				height: 100upx;
				align-items: center;
				justify-content: center;
				text-align: center;
				font-size: 28upx;
				letter-spacing: 2upx;
			}
		}
	
	}
</style>
