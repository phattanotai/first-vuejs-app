<template>
  <div class="container">
      <div class="card" >
        <div class="card-body" >
            <div style="text-align: center;">
               <label >
              <h3 >เพิ่ม แก้ไข ค้นหา ข้อมูลผู้ใช้</h3>
            </label>
            </div>
            <form class="form-horizontal" autocomplete = "off">
                <div class="form-group">
                  <label class="control-label col-sm-2" for="firstname">ชื่อ:</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="firstname" v-model="firstname">
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-sm-2" for="lastname">นามสกุล:</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="lastname" v-model="lastname">
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-sm-2" for="gender">เพศ:</label>
                  <div class="col-sm-10">
                    <input type="radio" name="sex" value="male"   v-model="gender">ชาย
                    <input type="radio" name="sex" value="female" v-model="gender">หญิง
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-sm-2" for="email">อีเมล</label>
                  <div class="col-sm-10">
                      <input type="text" class="form-control" id="email" v-model="email">
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-sm-2" for="age">อายุ:</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="age" v-model="age">
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-sm-offset-2 col-sm-10">
                    <button type="button" class="btn btn-primary" v-on:click="save()" >บันทึก</button>
                    <button type="button" class="btn btn-warning" v-on:click="search()" >ค้นหา</button>
                    <button type="button" class="btn btn-success" v-on:click="edit()" >แก้ไข</button>
                    <button type="button" class="btn btn-info" v-on:click="reset()" >ล้าง</button>
                  </div>
                </div>
             </form>
        </div>
      </div>
      <div class="table-responsive " style="margin: auto;margin-top: 2%">
            <table class="table" v-if="userData != null">
              <thead>
                <tr>
                    <th>#</th>
                    <th>ชื่อ-นามสกุล</th>
                    <th>เพศ</th>
                    <th>อีเมล</th>
                    <th>อายุ</th>
                    <th>แก้ไข/ลบ</th>
                </tr>
              </thead>
              <tbody>
                  <tr v-for="i in userData">
                    <td> {{i.id}}</td>
                    <td>  {{i.firstname}} {{i.lastname}} </td>
                    <td> {{i.gender}} </td>
                    <td> {{i.email}} </td>
                    <td> {{i.age}} </td>
                    <td>
                       <button type="button" class="btn btn-warning" v-on:click="setForm()" >แก้ไข</button>
                       <button type="button" class="btn btn-danger" v-on:click="deleteUser(i.id)" >ลบ</button>
                    </td>
                  </tr>
              </tbody>
            </table>
    </div>



  </div>
</template>

<script >
    import axios from 'axios'
    export default {
        data(){
           return{
              userData:'',
              firstname:'',
              lastname:'',
              gender:'',
              email:'',
              age:'',
              id:'',
              searchBy:''
           }
        },

        methods: {
          save:function(){
               if(this.firstname !== '' || this.lastname !==''||this.email !==''||this.age !==''){
                      var r = confirm("ยืนยันการลบ");
                     if(r==ture){
                            axios.post('/users/new', {
                                  firstname: this.firstname,
                                  lastname: this.lastname,
                                  gender: this.gender,
                                  email: this.email,
                                  age: this.age
                              })
                              .then(function (response) {
                                  alert(response.data);
                              })
                              .catch(function (error) {
                                  currentObj.output = error;
                              });
                              this.reset();
                      }
               }else{
                  alert("กรุณากรอกข้อมูลให้ครบถ้วน");
               }
          },
          search:function(){
              if(this.firstname !== ''){
                  axios.get("users/firstname/"+this.firstname)
                 .then(response => {
                      this.userData = response.data;
                      this.searchBy = "firstname";
                  })
                .catch(function (error) {
                    currentObj.output = error;

                });

              }else if(this.lastname != ''){
                axios.get("users/lastname/"+this.lastname)
                  .then(response => {
                      this.userData = response.data;
                      this.searchBy = "lastname";
                  })
                  .catch(function (error) {
                      currentObj.output = error;

                  });
              }else if(this.gender !== ''){
                  axios.get("users/gender/"+this.gender)
                  .then(response => {
                      this.userData = response.data;
                      this.searchBy = "gender";
                  })
                  .catch(function (error) {
                      currentObj.output = error;

                  });
              }else if(this.email !== ''){
                  axios.get("users/email/"+this.email)
                  .then(response => {
                      this.userData = response.data;
                      this.searchBy = "email";
                  })
                  .catch(function (error) {
                      currentObj.output = error;

                  });
              }else if(this.age !== ''){
                  axios.get("users/age/"+this.age)
                  .then(response => {
                      this.userData = response.data;
                      this.searchBy = "age";
                  })
                  .catch(function (error) {
                      currentObj.output = error;

                  });
              }else{
                  alert("ให้กรอกข้อมูล 1 ช่อง")
              }
          },
          edit:function(){
                if(this.firstname !== '' || this.lastname !==''||this.email !==''||this.age !==''){
                    var r = confirm("ยืนยันการแก้ไข");
                    if(r==ture){
                            axios.put('users/',{
                                  firstname: this.firstname,
                                  lastname: this.lastname,
                                  gender: this.gender,
                                  email: this.email,
                                  age: this.age,
                                  id: this.id
                            })
                            .then(response => {
                               alert(response.data);
                               this.reset();
                            });
                    }
                }else{
                    alert("กรุณากรอกข้อมูลให้ครบถ้วน");
                }
          },
          setForm(i){
            this.firstname = i.firstname;
            this.lastname = i.lastname;
            this.gender = i.gender;
            this.email = i.email;
            this.age = i.age;
            this.id = i.id;
          },
          reset(i){
            this.firstname = '';
            this.lastname = '';
            this.gender = '';
            this.email = '';
            this.age = '';
          },
          deleteUser(id){
               var r = confirm("ยืนยันการลบ");
               if(r==ture){
                axios.delete('users/' + id)
                             .then(response => {
                  alert(response.data);
                  this.search();
               });
              }
          }
        }
    }
</script>


<style scoped>

</style>
