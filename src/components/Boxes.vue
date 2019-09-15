<template>
<div class="main">
      <div class="addButton">
         <button type="button" class="btn btn-primary" v-on:click="show = false" >รายงาน</button>
         <button type="button" class="btn btn-primary" v-on:click="show = true" >เพิ่มข้อมูลใหม่</button>
      </div>
      <div class="card" >
        <div class="card-body" >
            <div v-if="show">
              <label >
                <h5>เพิ่ม/แก้ไข  ข้อมูลกล่องจัดเก็บสินค้า
                </h5>
              </label>
              <hr>
              <form class="form-horizontal " autocomplete = "off"  >
                <div >
                  <div class="form-group">
                    <label class="control-label col-sm-4" for="name">ชื่อ:</label>
                    <div class="col-sm-10">
                      <input type="text" class="form-control" id="name" v-model="name">
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="control-label col-sm-4" for="detail">รายละเอียด</label>
                    <div class="col-sm-10">
                        <textarea class="form-control" rows="5" id="detail"></textarea>
                    </div>
                  </div>
                 <div class="form-group row">
                    <div class="col-sm-3">
                        <label class="control-label col-sm-12" for="width">กว้าง:</label>
                        <div class="col-sm-12">
                          <input type="text" class="form-control" id="width" v-model="width">
                        </div>
                    </div>
                     <div class="col-sm-3">
                        <label class="control-label col-sm-12" for="length">ยาว:</label>
                        <div class="col-sm-12">
                          <input type="text" class="form-control" id="length" v-model="length">
                        </div>
                     </div>
                     <div class="col-sm-4">
                         <label class="control-label col-sm-12" for="height">สูง:</label>
                        <div class="col-sm-12">
                          <input type="text" class="form-control" id="height" v-model="height">
                        </div>
                    </div>
                  </div>
                  <div class="form-group">
                     <div class="form-group">
                        <label class="control-label col-sm-4" for="price">ราคา:</label>
                        <div class="col-sm-6">
                          <input type="text" class="form-control" id="price" v-model="price">
                        </div>
                     </div>
                  </div>
                </div>
                <div style="margin-top:10px">
                    <button type="button" class="btn btn-primary " v-on:click="save()" >บันทึก</button>
                    <button type="button" class="btn btn-success " v-on:click="edit()" >แก้ไข</button>
                    <button type="button" class="btn btn-info" v-on:click="reset()" >ล้าง</button>
                </div>
              </form>
            </div>
            <div class="table-responsive " style="margin-top: 2%" v-if="!show">
              <div class="row">
                <div class="col-sm-5">
                  <h5>รายงานข้อมูลลูกค้า</h5>
                </div>
                <div  class="col-sm-7 input-group">
                    <select class="form-control" >
                      <option>ค้นหาจาก</option>
                      <option>ID</option>
                      <option>Name</option>
                    </select>
                    <input type="text" class="form-control " style="margin-left:5px;">
                    <button class="btn btn-success" style="margin-left:5px;">ค้นหา</button>
                </div>
              </div>
              <table class="table table-sm" style="margin-top:15px;" >
                <thead>
                  <tr>
                      <th>#</th>
                      <th>ชื่อ</th>
                      <th>รายละเอียด</th>
                      <th>ขนาด</th>
                      <th>ราคา</th>
                      <th>แก้ไข/ลบ</th>
                  </tr>
                </thead>
                <tbody>
                    <tr v-for="i in dataTable">
                      <td> {{i.id}}</td>
                      <td> {{i.name}} </td>
                      <td> {{i.detail}} </td>
                      <td> {{i.width}} x {{i.length}} X {{i.height}}</td>
                      <td> {{i.price}} </td>
                      <td>
                        <button type="button" class="btn btn-warning" v-on:click="setForm()" >แก้ไข</button>
                        <button type="button" class="btn btn-danger" v-on:click="deleteUser(i.id)" >ลบ</button>
                      </td>
                    </tr>
                </tbody>
              </table>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dataTable: null,
      name: '',
      detail: '',
      width: '',
      length: '',
      height: '',
      price: '',
      show: true
    }
  },
  methods: {

  },
  computed: {

  }
}
</script>

<style scoped>
.addButton{
    margin:20px;
    float: right;
}

</style>
