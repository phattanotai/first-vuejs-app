<template>
  <div class="container">
      <div class="card" >
        <div class="card-body" >
            <div style="text-align: center;">
               <label >
              <h3 >เพิ่ม แก้ไข ค้นหา ข้อมูลลูกค้า</h3>
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
  </div>
</template>

<script >
  export default  {
    name: 'employee',
    props: [],
    mounted() {

    },
    data() {
      return {

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
