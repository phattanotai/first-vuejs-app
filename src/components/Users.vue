<template>
  <div class="main">
      <div class="login" >
          <div style="text-align: center;">
              <label >
            <h3 >เข้าสู่ระบบ</h3>
          </label>
          </div>
          <form class="form-horizontal " autocomplete = "off">
              <div class="form-group row justify-content-center">
                <label class="control-label col-lg-2" for="username">ชื่อผู้ใช้:</label>
                <div class="col-lg-6 col-sm-12 ">
                  <input type="text" class="form-control" id="username" v-model="username">
                </div>
              </div>
              <div class="form-group row justify-content-center">
                <label class="control-label col-lg-2 " for="password">รหัสผ่าน:</label>
                <div class="col-lg-6 col-sm-12">
                  <input type="text" class="form-control" id="password" v-model="password">
                </div>
              </div>
              <div class="form-group row justify-content-center" >
                <div class="col-lg-4 col-sm-12 " >
                  <button type="button" class="btn btn-primary" v-on:click="save()" >เข้าสู่ระบบ</button>
                </div>
              </div>
            </form>
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
.login{
  margin-top:15% ;

}

</style>
