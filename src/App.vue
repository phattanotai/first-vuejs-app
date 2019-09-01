<template>
  <div id="app">
  		<nav class='navbar navbar-expand-sm bg-dark navbar-dark fixed-top'>
		  <a class="navbar-brand" href="#">Logo</a>
		</nav>
		<div class="container">
			<div class="row">
				<div class="col-sm-3 menu">
					<div >
						<div class="alert alert-primary" >					
								<h6> เมนูหลัก</h6>				
						</div>
						<div class = 'menu-list'>
							<ul class="list-group list-group-flush">
								<li class="list-group-item">
									<a  href="#/">หน้าหลัก</a>
								</li>
								<li class="list-group-item">
									<a  href="#/Product">รับฝากเอกสาร</a>
								</li>
							</ul>
						</div>
						<div  class="alert alert-primary" style="margin-top:15px;">
								<h6>จัดการข้อมูล</h6>
						</div>
						<div class = 'menu-list'>
							<ul class="list-group list-group-flush">
								<li class="list-group-item">
									<a href="#/Employee">ข้อมูลพนักงาน</a>
								</li>
								<li  class="list-group-item ">
									<a   href="#/Customers">ข้อมูลลูกค้า</a>
								</li>
								<li  class="list-group-item">
									<a  href="#/Boxes">ข้อมูลกล่องสินค้า</a>
								</li>
								<li  class="list-group-item">
									<a  href="#/Storage">ข้อมูลที่จัดเก็บ</a>
								</li>
								<li  class="list-group-item">
									<a  href="#/Promotion">ข้อมูลส่วนลด</a>
								</li>
								<li  class="list-group-item">
									<a  href="#/Product">ข้อมูลการรับฝาก</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="col-sm-9" style="padding:0px;">
					<router-view/>
				</div>
			</div>
		</div>
    </div>
</template>

<script>


export default {
  name: 'App',
  data(){
		return{
			
		}
  },
  methods:{
	  
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
  background-color:honeydew;
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
	background-color:honeydew;
}
.card{
   width: 95%;
   margin: auto;
   border: 1px solid DodgerBlue;
}
.menu{
	padding: 0%;
	color: white;
	margin-top: 12%;
	
}
.menu ul{
	list-style: none;
	text-align: right;
}
.menu ul li{
	display: inline-block;
	text-decoration: none;
	text-decoration-line: none;
	background-color:honeydew;
}
.menu ul li a{
	color: black;
	font-size: 14px;
}
.menu ul li a:hover{
	color:blue;
	font-size: 16px;
	text-decoration: none;
}

.menu ul li:hover{
	background-color:lightgrey;
}
.menu-list{
	width: 100%;
	margin: auto;
}
.menu h6{
	text-align: center;
}
.main{
	margin-top: 7%;
	margin-bottom: 5%;
}
</style>
