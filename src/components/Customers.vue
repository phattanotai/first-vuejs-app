<template lang="html">
<div class="container">
      <div class="card" >
        <div class="card-body" >
            <div>
               <label >
              <h3 >เพิ่ม แก้ไข ค้นหา ข้อมูลลูกค้า</h3>
            </label>
            </div>
            <form class="form-horizontal" autocomplete = "off">
                <div class="form-group">
                  <label class="control-label col-sm-3" for="id">รหัสประจำตัว:</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="รก" v-model="id">
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-sm-2" for="name">ชื่อ:</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="name" v-model="name">
                  </div>
                </div>
               
                <div class="form-group">
                  <label class="control-label col-sm-2" for="sex">เพศ:</label>
                  <div class="col-sm-10">
                    <input type="radio" name="sex" value="male"   v-model="sex">ชาย
                    <input type="radio" name="sex" value="female" v-model="sex">หญิง
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-sm-2" for="address">ที่อยู่</label>
                  <div class="col-sm-10">
                      <textarea class="form-control" rows="5" id="address"></textarea>
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-sm-2" for="email" v-model="email">อีเมล</label>
                  <div class="col-sm-10">
                      <input type="text" class="form-control" id="email" v-model="email">
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-sm-2" for="tel">เบอร์โทร:</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="tel" v-model="tel">
                  </div>
                </div>
                <div class="form-group">
                  <div class=" col-sm-10">
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

<script>
  export default  {
    name: 'customers',
    props: [],
    mounted() {

    },
    data() {
      return {
              id:'',
              name:'',
              type,
              sex:'',
              address,
              email:'',
              tel:'',

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped>

</style>
