<template>
  <div id="app">
  		<nav class='navbar navbar-expand-sm bg-dark navbar-dark'>
		  <a class="navbar-brand" href="#">Logo</a>
		</nav>
	
		<div class="row">
			<div class="col-sm-2 menu">
				<div class = 'menu-list'>
					<ul class="list-group list-group-flush">
							<li class="list-group-item">
								<a href="/#/">หน้าหลัก</a>
							</li>
							<li class="list-group-item">
								<a href="#/Users">รับฝากเอกสาร</a>
							</li>
							<li class="list-group-item">
								<a href="#" v-on:click="editMenu()">จัดการข้อมูล</a>
									<ul class="list-group " v-if="show">
										<li class="list-group-item">
											<a href="Users">ข้อมูลพนักงาน</a>
										</li>
										<li  class="list-group-item">
											<a href="Users">ข้อมูลลูกค้า</a>
										</li>
										<li  class="list-group-item">
											<a href="Users">ข้อมูลกล่องสิ้นค้า</a>
										</li>
										<li  class="list-group-item">
											<a href="Users">ข้อมูลที่จัดเก็บ</a>
										</li>
										<li  class="list-group-item">
											<a href="Users">ข้อมูลส่วนลด</a>
										</li>
										<li  class="list-group-item">
											<a href="Users">ข้อมูลการรับฝาก</a>
										</li>
									</ul>
							</li>
					</ul>
				</div>
			</div>
			
			<div class="col-sm-10" style="padding:0px;">
         		<router-view/>
			</div>
		</div>
    </div>
</template>

<script>


export default {
  name: 'App',
  data(){
		return{
			show:false,
		}
  },
  methods:{
	  editMenu:function(){
		  if(this.show){
			  this.show = false;
		  }else{
			  this.show = true;
		  }
		  
	  }
  },
  components:{

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0px;
}

.header{
	background-color: cornflowerblue;
	height: 60px;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	max-width: 100%;
}
.container{
	padding-top: 1%;
	background-color:honeydew;
}
.card{
   width: 95%;
   margin: auto;
}
.menu{
	background-color: #2c3e50;
	padding: 0%;
	color: white;
}

.menu ul{
	list-style: none;
	right: 0px;
	padding-left: 4%;
}
.menu ul li{
	background-color: #2c3e50;
	display: inline-block;
	text-decoration: none;
	text-decoration-line: none;
	font-size: 16px;
}

.menu ul li a{
	color: white;
}
</style>
